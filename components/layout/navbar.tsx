"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <span>EduPlatform</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/courses" className="text-sm font-medium hover:text-primary transition-colors">
                        Courses
                    </Link>
                    <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                        About Us
                    </Link>
                    <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                        Contact
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost" size="sm">
                            Log in
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button size="sm">Get Started</Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-b bg-background">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        <Link
                            href="/"
                            className="text-sm font-medium hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/courses"
                            className="text-sm font-medium hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Courses
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-medium hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <div className="flex flex-col gap-2 pt-4 border-t">
                            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                                <Button variant="ghost" className="w-full justify-start">
                                    Log in
                                </Button>
                            </Link>
                            <Link href="/register" onClick={() => setIsMenuOpen(false)}>
                                <Button className="w-full">Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
