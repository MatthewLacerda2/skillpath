import { CourseHeader } from "@/components/course-header";

export default function Chess() {
    return(
        <div className="min-h-screen bg-gray-100 px-28 pt-14">

            <CourseHeader title="Skillpath to Entrepreneurship" subtitle="Start and grow a business" />

            <ul className="list-disc pl-6 mb-4">
                <li>Get in the game as early as possible</li>
                <li>Its all about how much money youre making</li>
            </ul>
            
            <iframe
                width="720"
                height="405"
                src="https://www.youtube.com/watch?v=et_zjQxl8Sk"
                title="Business"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />

            <p>*Put videos of y-combinator*</p>
            
        </div>
    );
}