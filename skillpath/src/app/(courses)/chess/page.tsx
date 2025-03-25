import { CourseHeader } from "@/components/course-header";

export default function Chess() {
    return(
        <div className="min-h-screen bg-gray-100 px-28 pt-14">

            <CourseHeader title="Skillpath to Chess" subtitle="The art of decision making" />

            <ul className="list-disc pl-6 mb-4">
                <li>Focus on your mistakes</li>
                <li>Dont focus on openings</li>
                <li>Know the opening by the book, but git gud at the endgame</li>
            </ul>
            
            <iframe
                width="720"
                height="405"
                src="https://www.youtube.com/embed/videoseries?si=wQf2djrE_0v3APTC&amp;list=PLDnx7w_xuguGl3y2Utxhp6eAKi9KhVlcx"
                title="Mikhail Tal"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            
        </div>
    );
}