import { AdventureCard } from "./adventure-card"

export default function ModuleSection() {
  return (
    <section className="py-24 bg-wanderheart-red-sky-at-night">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between">
          {/* Left side - Heading and description */}
          <div className="w-full lg:w-[390px] text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-5xl font-bold text-white mb-6 text-center lg:text-left">
              See what WanderHeart is all about.
            </h2>
            <h2 className="text-5xl font-bold text-white text-center lg:text-left">
              Try out one of our independent creator's modules.
            </h2>
          </div>

          {/* Right side - Adventure card */}
          <div className="flex-1 flex justify-center">
            <AdventureCard
              title="Skybridge to Oblivion"
              plays={1235}
              quote="This is the most I've laughed with my friends in literal years."
              author="Mel"
              imageSrc="/images/skybridge-adventure.jpeg"
              imageAlt="Fantasy adventure scene with magical d20, floating castle, and mystical creatures in the sky"
              className="min-w-[450px] max-w-[1000px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
