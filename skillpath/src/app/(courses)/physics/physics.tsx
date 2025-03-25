import { CourseHeader } from "@/components/course-header";

export default function Chess() {
    return(
        <div className="min-h-screen bg-gray-100 px-28 pt-14">

            <CourseHeader title="Skillpath to Physics" subtitle="It's quite unforgiving" />
            
            <iframe
                width="720"
                height="405"
                src="https://www.youtube.com/watch?v=6akmv1bsz1M"
                title="Physics!"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />

            <p>Veritasium, Real Engineering, Nuclear Reacts</p>
            <p>Some good math knowledge is advised</p>
            
        </div>
    );
}