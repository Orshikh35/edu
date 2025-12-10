import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <Link href="/" className="mx-auto flex items-center gap-2 font-bold text-xl mb-4">
                        <GraduationCap className="h-8 w-8 text-primary" />
                    </Link>
                    <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email to sign in to your account
                    </p>
                </div>
                <div className="grid gap-6">
                    <form>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    placeholder="name@example.com"
                                    type="email"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect="off"
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                                        Password
                                    </label>
                                    <Link href="#" className="text-sm font-medium text-primary hover:underline">
                                        Forgot password?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    autoCapitalize="none"
                                    autoCorrect="off"
                                />
                            </div>
                            <Button>Sign In with Email</Button>
                        </div>
                    </form>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <Button variant="outline" type="button" disabled>
                        GitHub (Coming Soon)
                    </Button>
                </div>
                <p className="px-8 text-center text-sm text-muted-foreground">
                    <Link href="/register" className="hover:text-brand underline underline-offset-4">
                        Don&apos;t have an account? Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
