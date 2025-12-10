import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container px-4 md:px-6 py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About EduPlatform</h1>
                <p className="text-xl text-muted-foreground">
                    We are on a mission to democratize education and make high-quality professional training accessible to everyone, everywhere.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">Our Story</h2>
                    <p className="text-muted-foreground">
                        Founded in 2023, EduPlatform started with a simple idea: that everyone should have the opportunity to learn from the best. We gathered industry experts, passionate educators, and technology enthusiasts to build a platform that bridges the gap between traditional education and the demands of the modern workforce.
                    </p>
                    <p className="text-muted-foreground">
                        Today, we serve thousands of students across the globe, helping them launch new careers, upskill in their current roles, and pursue their passions.
                    </p>
                </div>
                <div className="aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground">
                    About Us Image
                </div>
            </div>

            <div className="mt-20">
                <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                <div className="grid sm:grid-cols-3 gap-8">
                    {[
                        { title: "Excellence", desc: "We strive for the highest quality in everything we do, from our course content to our platform experience." },
                        { title: "Accessibility", desc: "We believe education should be affordable and accessible to anyone with an internet connection." },
                        { title: "Community", desc: "We foster a supportive community where learners can connect, collaborate, and grow together." }
                    ].map((value, i) => (
                        <div key={i} className="bg-muted/30 p-8 rounded-xl text-center">
                            <h3 className="font-bold text-xl mb-4">{value.title}</h3>
                            <p className="text-muted-foreground">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to start learning?</h2>
                <Link href="/courses">
                    <Button size="lg">Browse Courses</Button>
                </Link>
            </div>
        </div>
    );
}
