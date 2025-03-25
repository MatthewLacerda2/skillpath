import { CourseHeader } from "@/components/course-header";

export default function Chess() {
    return(
        <div className="min-h-screen bg-gray-100 px-28 pt-14">

            <CourseHeader title="Skillpath to Anime" subtitle="Know the rules of anime and the main shows" />
            
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