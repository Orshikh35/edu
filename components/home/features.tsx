"use client";

import { Award, Clock, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Award,
        title: "Certified Qualifications",
        description: "Earn recognized certificates to boost your professional profile and career prospects.",
    },
    {
        icon: Users,
        title: "Expert Instructors",
        description: "Learn from industry leaders and experienced professionals who are passionate about teaching.",
    },
    {
        icon: Clock,
        title: "Flexible Learning",
        description: "Study at your own pace with lifetime access to course materials and updates.",
    },
    {
        icon: Zap,
        title: "Practical Skills",
        description: "Gain hands-on experience with real-world projects and interactive assignments.",
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

export function Features() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Us?</h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        We provide the best learning experience for your personal and professional growth.
                    </p>
                </div>
                <motion.div
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border hover:shadow-md transition-shadow"
                        >
                            <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
