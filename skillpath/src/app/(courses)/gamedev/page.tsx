import { CourseHeader } from "@/components/course-header";

export default function Chess() {
    return(
        <div className="min-h-screen bg-gray-100 px-28 pt-14">

            <CourseHeader title="Skillpath to Game Development" subtitle="Create your own video games" />

            <ul className="list-disc pl-6 mb-4">
                <li>You gotta be a one-man army</li>
                <li>Know how to code</li>
                <li>Basic 3d modeling</li>
                <li>Basic animation</li>
                <li>MAKE THE DAMN GAME SMALL AND SIMPLE OR YOU WONT FINISH</li>
                <li>Aim for a 1 month endeavour</li>
                <li>As for sounds, you can just pick whatever</li>
                <li>You gotta experiment a lot with game design</li>
                <li>Then you can level design</li>                
            </ul>
            
            <iframe
                width="720"
                height="405"
                src="https://www.youtube.com/embed/videoseries?si=wQf2djrE_0v3APTC&amp;list=PLDnx7w_xuguGl3y2Utxhp6eAKi9KhVlcx"
                title="Mikhail Tal"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />

            <p>*Put videos of brackeys and codemonkey*</p>
            
        </div>
    );
}