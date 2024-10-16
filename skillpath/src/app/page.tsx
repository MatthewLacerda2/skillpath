import { Recommendation } from "./components/Recommendation";
import { SimpleCard } from "./components/SimpleCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 px-28">
      
      <header className="text-center pt-16 pb-12">
        <h1 className="text-7xl font-bold font-sans text-gray-900">Skillpath</h1>
        <h2 className="text-2xl text-gray-600 mt-6 mb-8">Your road to get good at anything</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Skill Path is a collection of paved roads to learn anything and everything by yourself, with free online content
        </p>
      </header>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-20 pb-10">
          <SimpleCard link="/methodology" title="Methodology: Learn how to learn" />
          <SimpleCard link="/contribute" title="Contribute" />
        </div>
      </div>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold mb-2 text-gray-800">Courses</h3>
        <p className="mb-6 text-gray-600 ">Master any subject whatsoever</p>
        <div className="grid grid-cols-4 gap-12">
          <Recommendation link="/chess" title="Chess" subtitle="Learn the art of strategy" />
          <Recommendation link="/negotiation" title="Negotiation" subtitle="Master the skill of persuasion" />
          <Recommendation link="/business-entrepreneurship" title="Business/Entrepreneurship" subtitle="Start and grow a business" />
          <Recommendation link="/bicycle" title="Bicycle" subtitle="All about bikes and maintenance" />
          <Recommendation link="/programming" title="Programming" subtitle="Learn coding from scratch" />
          <Recommendation link="/fullstack-development" title="Fullstack Development" subtitle="Frontend and backend development" />
          <Recommendation link="/gamedev" title="Game Development" subtitle="Create your own video games" />
          <Recommendation link="/architecture" title="Architecture" subtitle="Learn about building design" />
          <Recommendation link="/bible" title="Bible" subtitle="Study the sacred scriptures" />
          <Recommendation link="/gym" title="Gym" subtitle="Understand fitness and your muscles" />
        </div>
      </section>

      <section className="pb-16">
        <h3 className="text-3xl font-semibold mb-2 text-gray-800">Basics</h3>
        <p className="mb-6 text-gray-600 ">Never miss out on a conversation</p>
        <div className="grid grid-cols-4 gap-8">
          <Recommendation link="/anime" title="Anime" subtitle="Understand the basics of anime." />
          <Recommendation link="/classical-music" title="Classical Music" subtitle="Get started with classical music." />
          <Recommendation link="/film-history" title="Film History" subtitle="Learn the essentials of film history." />
          <Recommendation link="/fashion" title="Fashion" subtitle="Basics of global fashion trends." />
        </div>
      </section>
    </div>
  );
}
