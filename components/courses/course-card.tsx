import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Need to create Badge or just use div
import { Button } from "@/components/ui/button";
import { Star, Clock, BookOpen } from "lucide-react";

// I'll create a simple Badge component inline or just style it here for now to save a file, 
// but better to have it separate. I'll stick to simple styling for now.

interface CourseCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    price: string;
    category: string;
    rating: number;
    students: number;
    lessons: number;
    duration: string;
}

export function CourseCard({
    id,
    title,
    description,
    image,
    price,
    category,
    rating,
    students,
    lessons,
    duration,
}: CourseCardProps) {
    return (
        <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
                {/* Placeholder for Image */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gray-100">
                    Course Image
                </div>
                <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                        {category}
                    </span>
                </div>
            </div>
            <CardHeader className="p-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-foreground">{rating}</span>
                        <span>({students})</span>
                    </div>
                    <div className="font-bold text-lg text-primary">{price}</div>
                </div>
                <h3 className="font-bold text-xl line-clamp-2 hover:text-primary transition-colors">
                    <Link href={`/courses/${id}`}>{title}</Link>
                </h3>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-grow">
                <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
                <div className="flex items-center gap-4 mt-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        <span>{lessons} Lessons</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{duration}</span>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Link href={`/courses/${id}`} className="w-full">
                    <Button className="w-full" variant="outline">View Details</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
