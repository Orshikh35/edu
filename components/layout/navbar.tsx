"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth-actions";

type SessionUser = {
  id: string;
  email: string;
  name: string | null;
  emailVerified: boolean;
  image?: string | null;
  createdAt: Date; // <-- STRING биш DATE !!!
  updatedAt: Date; // <-- STRING биш DATE !!!
};

type SessionData = {
  session: {
    id: string;
    userId: string;
    token: string;
    createdAt: Date;
    updatedAt: Date;
    expiresAt: Date;
    ipAddress?: string | null;
    userAgent?: string | null;
  };
  user: SessionUser;
};

export type Session = SessionData | null;

export function Navbar({ session }: { session: Session }) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span>EduPlatform</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Right side – session-ээс хамааруулна */}
        <div className="hidden md:flex items-center gap-4">
          {!session?.user && (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Create account</Button>
              </Link>
            </>
          )}

          {session?.user && (
            <form
              action={async () => {
                await signOut();
                router.push("/login");
              }}
            >
              <Button type="submit">Системээс гарах</Button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}
