import { CourseHeader } from "@/components/course-header";

export default function Chess() {
    return(
        <div className="min-h-screen bg-gray-100 px-28 pt-14">

            <CourseHeader title="Skillpath to Fullstack Development" subtitle="Frontend and backend development" />

            <p>Dont overfocus on programming. Knowing how to code is the very basics, but once you get advanced, you wanna code as little as possible</p>
            <p>Coding is error-prone and thus you wanna code as little as possible</p>
            <p>No-code tools are actually good. But then again, if you dont know how to code, learn it</p>

            <ul className="list-disc pl-6 mb-4">
                <li>Know how to code</li>
                <li>Know how to api</li>
                <li>Know how to unit-test</li>
                <li>Know how to front-end</li>
                <li>*Here you can apply for jobs*</li>
                <li>Know how to deploy</li>
                <li>Know how to Devops</li>
            </ul>

            <p>Eventually, it is about problem solving, not how to code</p>
            
            <iframe
                width="720"
                height="405"
                src="https://www.youtube.com/watch?v=66tfvFeALBQ"
                title="Roadmap to Fullstack"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />

            <p>*Put videos of fireship io*</p>
            
        </div>
    );
}