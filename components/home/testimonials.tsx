"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Frontend Developer",
        content: "This platform completely transformed my career. The courses are well-structured and the instructors are top-notch.",
        avatar: "SJ",
    },
    {
        name: "Michael Chen",
        role: "Product Designer",
        content: "I loved the practical approach. I was able to apply what I learned immediately to my current job.",
        avatar: "MC",
    },
    {
        name: "Emily Davis",
        role: "Marketing Manager",
        content: "The flexibility of the courses allowed me to learn at my own pace while working full-time. Highly recommended!",
        avatar: "ED",
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

export function Testimonials() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        Hear from our community of learners who have achieved their goals.
                    </p>
                </div>
                <motion.div
                    className="grid gap-8 md:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={index} variants={item}>
                            <Card className="bg-background border-none shadow-sm h-full">
                                <CardContent className="p-8">
                                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                                    <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{testimonial.name}</h4>
                                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
