"use client";

import { useState } from "react";
import { CourseCard } from "@/components/courses/course-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";

// Mock Data
const allCourses = [
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
    {
        id: "5",
        title: "Advanced React Patterns",
        description: "Take your React skills to the next level with advanced patterns and performance optimization.",
        image: "/placeholder-5.jpg",
        price: "$119",
        category: "Development",
        rating: 4.9,
        students: 500,
        lessons: 20,
        duration: "15h",
    },
    {
        id: "6",
        title: "Business Strategy for Entrepreneurs",
        description: "Learn how to build and scale a successful business from scratch.",
        image: "/placeholder-6.jpg",
        price: "$149",
        category: "Business",
        rating: 4.5,
        students: 300,
        lessons: 35,
        duration: "30h",
    },
];

const categories = ["All", "Development", "Design", "Marketing", "Business", "Data Science"];

export default function CoursesPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredCourses = allCourses.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="container px-4 md:px-6 py-12 w-screen justify-center items-center">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Explore Courses</h1>
                    <p className="text-muted-foreground mt-2">Find the perfect course to upgrade your skills.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search courses..."
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto w-full pb-2 md:pb-0 no-scrollbar">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedCategory(category)}
                            className="whitespace-nowrap"
                        >
                            {category}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                        No courses found matching your criteria.
                    </div>
                )}
            </div>
        </div>
    );
}
