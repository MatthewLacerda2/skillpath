import { Recommendation } from "../components/Recommendation";
import { SimpleCard } from "../components/SimpleCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 px-28">
      
      <header className="text-center pt-16 pb-12">
        <h1 className="text-8xl font-bold font-sans text-gray-900 mt-6">Skillpath</h1>
        <h2 className="text-2xl text-gray-600 mt-8 mb-8">Your roadmap to get good at anything</h2>
        <p className="text-gray-500 text-xl max-w-2xl mx-auto">
          Skill Path is a collection of roadmaps to learn anything and everything by yourself
        </p>
      </header>

      <div className="flex justify-center mb-6">
        <div className="grid grid-cols-2 gap-20 pb-10">
          <SimpleCard link="/methodology" title="Methodology: Learn how to learn" />
          <SimpleCard link="/contribute" title="Contribute" />
        </div>
      </div>

      <section className="mb-20">
        <div className="grid grid-cols-4 gap-14">
          <Recommendation link="/anime" title="Anime" subtitle="Know the rules of anime and the main shows" />
          <Recommendation link="/bible" title="Bible" subtitle="Study the sacred scriptures" />
          <Recommendation link="/chess" title="Chess" subtitle="Learn the art of strategy" />
          <Recommendation link="/entrepreneurship" title="Business/Entrepreneurship" subtitle="Start and grow a business" />
          <Recommendation link="/finance" title="Finance" subtitle="Money, money, money" />
          <Recommendation link="/fullstack-development" title="Fullstack Development" subtitle="Frontend and backend development" />
          <Recommendation link="/gamedev" title="Game Development" subtitle="Create your own video games" />
          <Recommendation link="/gym" title="Gym" subtitle="Understand fitness and your muscles" />
          <Recommendation link="/history" title="History" subtitle="Understand the context, how and why things happened" />
          <Recommendation link="/language" title="Language" subtitle="How to learn a language well?" />
          <Recommendation link="/movies" title="Movies" subtitle="Know all the movies, directors, and stories" />
          <Recommendation link="/music" title="Music" subtitle="Know all the singers, bands, and references" />
          <Recommendation link="/programming" title="Programming" subtitle="Learn coding from scratch" />
          <Recommendation link="/physics" title="Physics" subtitle="It's quite unforgiving" />
        </div>
      </section>
    </div>
  );
}
