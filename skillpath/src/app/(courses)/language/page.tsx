import { CourseHeader } from "@/components/course-header";

export default function Chess() {
    return(
        <div className="min-h-screen bg-gray-100 px-28 pt-14">

            <CourseHeader title="Skillpath to Language" subtitle="How to learn a language well?" />
            
            <iframe
                width="720"
                height="405"
                src="https://www.youtube.com/watch?v=OaZzu_gQ8bk"
                title="Learn a language"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />

            <ul className="list-disc pl-6 mb-4">
                <li>Duolingo helps, doesnt solve</li>
                <li>Decorate top 100 most useful words</li>
                <li>Reading is good, you can take your time</li>
                <li>Read aloud and repeat the word if you got the accent wrong until you get it right</li>
            </ul>
            
        </div>
    );
}