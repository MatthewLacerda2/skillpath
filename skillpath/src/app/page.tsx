import { Recommendation } from "../components/Recommendation";
import { SimpleCard } from "../components/SimpleCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 px-28">
      
      <header className="text-center pt-16 pb-12">
        <h1 className="text-7xl font-bold font-sans text-gray-900">Skillpath</h1>
        <h2 className="text-2xl text-gray-600 mt-6 mb-8">Your roadmap to get good at anything</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Skill Path is a collection of roadmaps to learn anything and everything by yourself
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
        <p className="mb-6 text-gray-600 ">Master any skill whatsoever</p>
        <div className="grid grid-cols-4 gap-12">
          <Recommendation link="/courses/anime" title="Anime" subtitle="Know the rules of anime and the main shows" />
          <Recommendation link="/courses/bible" title="Bible" subtitle="Study the sacred scriptures" />
          <Recommendation link="/courses/chess" title="Chess" subtitle="Learn the art of strategy" />
          <Recommendation link="/courses/entrepreneurship" title="Business/Entrepreneurship" subtitle="Start and grow a business" />
          <Recommendation link="/courses/finance" title="Finance" subtitle="Money, money, money" />
          <Recommendation link="/courses/fullstack-development" title="Fullstack Development" subtitle="Frontend and backend development" />
          <Recommendation link="/courses/gamedev" title="Game Development" subtitle="Create your own video games" />
          <Recommendation link="/courses/gym" title="Gym" subtitle="Understand fitness and your muscles" />
          <Recommendation link="/courses/history" title="History" subtitle="Understand the context, how and why things happened" />
          <Recommendation link="/courses/language" title="Language" subtitle="How to learn a language well?" />
          <Recommendation link="/courses/movies" title="Movies" subtitle="Know all the movies, directors, and stories" />
          <Recommendation link="/courses/music" title="Music" subtitle="Know all the singers, bands, and references" />
          <Recommendation link="/courses/programming" title="Programming" subtitle="Learn coding from scratch" />
        </div>
      </section>
    </div>
  );
}
