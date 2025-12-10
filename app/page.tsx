import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { PopularCourses } from "@/components/home/popular-courses";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-auto min-w-screen justify-center items-center">
      <Hero />
      <Features />
      <PopularCourses />
      <Testimonials />
    </div>
  );
}
