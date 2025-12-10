"use client";

import { CourseCard } from "@/components/courses/course-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const popularCourses = [
    {
        id: "1",
        title: "Complete Web Development Bootcamp",
        description: "Learn HTML, CSS, JavaScript, React, Node.js and more. Build real-world projects.",
        image: "/placeholder-1.jpg",
        price: "$99",
        category: "Development",
        rating: 4.8,
        students: 1234,
        lessons: 45,
        duration: "40h",
    },
    {
        id: "2",
        title: "Digital Marketing Masterclass",
        description: "Master SEO, Social Media Marketing, Email Marketing, and Analytics.",
        image: "/placeholder-2.jpg",
        price: "$89",
        category: "Marketing",
        rating: 4.7,
        students: 850,
        lessons: 32,
        duration: "25h",
    },
    {
        id: "3",
        title: "UI/UX Design Fundamentals",
        description: "Learn to design beautiful user interfaces and user experiences using Figma.",
        image: "/placeholder-3.jpg",
        price: "$79",
        category: "Design",
        rating: 4.9,
        students: 2100,
        lessons: 28,
        duration: "18h",
    },
    {
        id: "4",
        title: "Data Science with Python",
        description: "Analyze data, create visualizations, and build machine learning models.",
        image: "/placeholder-4.jpg",
        price: "$129",
        category: "Data Science",
        rating: 4.6,
        students: 950,
        lessons: 50,
        duration: "55h",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function PopularCourses() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Courses</h2>
                        <p className="mt-4 text-muted-foreground md:text-xl">
                            Explore our highest-rated courses and start learning today.
                        </p>
                    </div>
                    <Link href="/courses">
                        <Button variant="ghost" className="hidden md:flex">
                            View All Courses <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <motion.div
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {popularCourses.map((course) => (
                        <motion.div key={course.id} variants={item}>
                            <CourseCard {...course} />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/courses">
                        <Button variant="outline">
                            View All Courses <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
