import { CourseHeader } from "@/components/course-header";

export default function Chess() {
    return(
        <div className="min-h-screen bg-gray-100 px-28 pt-14">

            <CourseHeader title="Skillpath to Movies" subtitle="Know all the movies, directors, and stories" />

            <p>Its simple, just watch a lot of movies</p>
            <p>But you might wanna prioritize the ones of pop culture</p>
            <p>And google stuff from time to time</p>
            <p>Look for career defining movies, most important movies of a genre, and movies that won an oscar</p>
            
            <iframe
                width="720"
                height="405"
                src="https://www.youtube.com/watch?v=aTdTOq4ldws"
                title="You think you know movies?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            
        </div>
    );
}