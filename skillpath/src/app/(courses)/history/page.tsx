import { CourseHeader } from "@/components/course-header";

export default function Chess() {
    return(
        <div className="min-h-screen bg-gray-100 px-28 pt-14">

            <CourseHeader title="Skillpath to History" subtitle="Understand the context, how and why things happened" />
            
            <iframe
                width="720"
                height="405"
                src="https://www.youtube.com/watch?v=dHSQAEam2yc"
                title="Oversimplified"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />

            <p>*Put videos of Oversimplified*</p>
            
        </div>
    );
}