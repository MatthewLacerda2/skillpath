import { CourseHeader } from "@/components/course-header";

export default function Chess() {
    return(
        <div className="min-h-screen bg-gray-100 px-28 pt-14">

            <CourseHeader title="Skillpath to Music" subtitle="Know all the singers, bands, and references" />

            <p>Its simple, just watch a lot of movies</p>
            <p>But you might wanna prioritize the ones of pop culture</p>
            <p>And google stuff. A lot</p>
            <p>Prioritize songs used in movies. The more used that song is, the better</p>
            <p>Also prioritize songs by famous artists/bands</p>
            
            <iframe
                width="720"
                height="405"
                src="https://www.youtube.com/watch?v=djV11Xbc914&list=PLmXxqSJJq-yXrCPGIT2gn8b34JjOrl4Xf"
                title="I like to move and move it"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />

            <p>*And here should be a list of important artists/bands*</p>
            
        </div>
    );
}