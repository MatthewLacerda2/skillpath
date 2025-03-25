import { CourseHeader } from "@/components/course-header";

export default function Chess() {
    return(
        <div className="min-h-screen bg-gray-100 px-28 pt-14">

            <CourseHeader title="Skillpath to Bible" subtitle="Study the sacred scriptures" />

            <ul className="list-disc pl-6 mb-4">
                <li>Dont read it like a book</li>
                <li>The most important is the gospel of Jesus</li>
                <li>It was written by men, but is inspired by God</li>
                <li>Some of it are life advices</li>
                <li>There is a godly plan throughout history</li>
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