"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-background py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <motion.div
                        className="flex flex-col justify-center space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                Unlock Your Potential with <span className="text-primary">Expert-Led</span> Courses
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Join thousands of learners worldwide. Master new skills, advance your career, and achieve your goals with our premium educational platform.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link href="/courses">
                                <Button size="lg" className="w-full min-[400px]:w-auto">
                                    Browse Courses
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/register">
                                <Button variant="outline" size="lg" className="w-full min-[400px]:w-auto">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted" />
                                ))}
                            </div>
                            <p>Trusted by 10,000+ students</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="mx-auto lg:ml-auto"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative aspect-video w-full max-w-[600px] overflow-hidden rounded-xl bg-muted shadow-2xl">
                            {/* Placeholder for Hero Image - To be replaced with generated image */}
                            <img
                                src="/hero.png"
                                alt="Students learning"
                                className="object-cover w-full h-full"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/600x400?text=Hero+Image";
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
