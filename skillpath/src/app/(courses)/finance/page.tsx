import { CourseHeader } from "@/components/course-header";

export default function Chess() {
    return(
        <div className="min-h-screen bg-gray-100 px-28 pt-14">

            <CourseHeader title="Skillpath to Finance" subtitle="Money, money, money" />

            <ul className="list-disc pl-6 mb-4">
                <li>Know forms of investments</li>
                <li>50-30-20 rule</li>
                <li>Spend what you need, save what you can</li>
                <li>By saving, i meant investing. DO NOT let your money sit around doing nothing</li>
                <li>Investing in yourself is a financial investment. You will make more money in the future</li>
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