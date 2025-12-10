import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, BookOpen, Star, User } from "lucide-react";

// Mock Data (In a real app, fetch based on params.id)
const course = {
    id: "1",
    title: "Complete Web Development Bootcamp",
    description: "Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps.",
    longDescription: `
    This is the only course you need to learn web development. There are a lot of options for web development training, but this course is without a doubt the most comprehensive and effective on the market.
    
    We'll take you from absolute beginner to competent full-stack web developer in a matter of weeks. You'll learn by doing, building real-world projects that you can add to your portfolio.
  `,
    image: "/placeholder-1.jpg",
    price: "$99",
    category: "Development",
    rating: 4.8,
    students: 1234,
    lessons: 45,
    duration: "40h",
    instructor: {
        name: "Dr. Angela Yu",
        bio: "Lead Instructor at App Brewery. I'm a developer and a teacher. I love to make learning easy and fun.",
        image: "/instructor.jpg"
    },
    curriculum: [
        "Introduction to HTML",
        "Intermediate HTML",
        "Introduction to CSS",
        "Intermediate CSS",
        "Bootstrap 4",
        "Javascript ES6",
        "DOM Manipulation",
        "jQuery",
        "The Unix Command Line",
        "Backend Web Development",
        "Node.js",
        "Express.js",
        "APIs",
        "Git, GitHub and Version Control",
        "EJS",
        "Databases",
        "SQL",
        "MongoDB",
        "Mongoose",
        "React.js"
    ],
    outcomes: [
        "Build any website you want",
        "Build a portfolio of websites to apply for junior developer jobs",
        "Work as a freelance web developer",
        "Master backend development with Node",
        "Master frontend development with React"
    ]
};

export default function CourseDetailPage({ params }: { params: { id: string } }) {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="bg-muted/30 py-12 md:py-20">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-8 lg:grid-cols-3">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center gap-2">
                                <Badge>{course.category}</Badge>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="font-medium text-foreground">{course.rating}</span>
                                    <span>({course.students} students)</span>
                                </div>
                            </div>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                {course.title}
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                {course.description}
                            </p>
                            <div className="flex items-center gap-6 text-sm">
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    <span>Created by {course.instructor.name}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>Last updated: Dec 2023</span>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Card (Desktop) */}
                        <div className="hidden lg:block relative">
                            <div className="absolute top-0 right-0 w-full bg-background border rounded-xl shadow-lg overflow-hidden p-6 space-y-6">
                                <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center text-muted-foreground mb-4">
                                    Preview Video
                                </div>
                                <div className="text-3xl font-bold">{course.price}</div>
                                <Button className="w-full" size="lg">Enroll Now</Button>
                                <p className="text-xs text-center text-muted-foreground">30-Day Money-Back Guarantee</p>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="h-4 w-4" />
                                        <span>{course.lessons} Lessons</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span>{course.duration} Total Content</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4" />
                                        <span>Certificate of Completion</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container px-4 md:px-6 py-12">
                <div className="grid gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-12">

                        {/* Mobile Enroll Card */}
                        <div className="lg:hidden bg-background border rounded-xl shadow-sm p-6 space-y-6">
                            <div className="text-3xl font-bold">{course.price}</div>
                            <Button className="w-full" size="lg">Enroll Now</Button>
                        </div>

                        {/* What you'll learn */}
                        <section className="border rounded-xl p-6 md:p-8">
                            <h2 className="text-2xl font-bold mb-6">What you'll learn</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {course.outcomes.map((outcome, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-sm">{outcome}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Description */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Description</h2>
                            <div className="prose max-w-none text-muted-foreground whitespace-pre-line">
                                {course.longDescription}
                            </div>
                        </section>

                        {/* Curriculum */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                            <div className="border rounded-lg divide-y">
                                {course.curriculum.slice(0, 10).map((item, index) => (
                                    <div key={index} className="p-4 flex items-center gap-3 hover:bg-muted/50 transition-colors">
                                        <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                                            {index + 1}
                                        </div>
                                        <span>{item}</span>
                                    </div>
                                ))}
                                {course.curriculum.length > 10 && (
                                    <div className="p-4 text-center text-sm text-muted-foreground">
                                        And {course.curriculum.length - 10} more lessons...
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Instructor */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Instructor</h2>
                            <div className="flex items-start gap-4">
                                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-muted-foreground">
                                    {course.instructor.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{course.instructor.name}</h3>
                                    <p className="text-muted-foreground mt-2">{course.instructor.bio}</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
