import { CourseHeader } from "@/components/course-header";

export default function Chess() {
    return(
        <div className="min-h-screen bg-gray-100 px-28 pt-14">

            <CourseHeader title="Skillpath to Gym" subtitle="Get jacked and juicy" />

            <ul className="list-disc pl-6 mb-4">
                <li>Train 5x/week</li>
                <li>Cardio: Minimum 1h/week, Ideal 2h/week, Lean: 16km+/week</li>
                <li>Proteins: 1.6g/kg of bodyweight</li>
                <li>Train each muscle group at its own day, with at least 2 days in-between, at least once a week</li>
                <li>6-9 reps, no more no less. Except for back, and maybe hamstrings, those should be 9-12 reps</li>
                <li>If you still have it within you to do one more rep, RAISE THE WEIGHT</li>
                <li>3 sets per exercise. No more than 4 sets</li>
                <li>2 minutes in-between sets at least</li>
                <li>If ya can, buy creatine. 4-5g/day, each and every day (no more, no less)</li>
            </ul>

            <p>Ya dont have to go 5x/week on your first month, only from the 2nd month on</p>

            <p>*Here ya should put the exercises per muscle group*</p>

            <p>*Here ya should put the youtube videos/channels*</p>
            
            <iframe
                width="720"
                height="405"
                src="https://www.youtube.com/watch?v=mEmynZt2SwY"
                title="Get that sick six pack"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            
        </div>
    );
}