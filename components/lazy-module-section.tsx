import dynamic from "next/dynamic"

// Dynamically import the AdventureCard component
const AdventureCard = dynamic(() => import("./adventure-card"), {
  loading: () => <div className="min-h-[600px] bg-wanderheart-red-sky-at-night/50 rounded-[32px] animate-pulse"></div>,
})

export default function ModuleSection() {
  return (
    <section className="py-24 bg-wanderheart-red-sky-at-night">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between">
          {/* Left side - Heading and description */}
          <div className="w-full lg:w-[390px] text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-5xl font-bold text-white mb-6 text-center lg:text-left" style={{ lineHeight: "37px" }}>
              See what WanderHeart is all about.
            </h2>
            <h2 className="text-5xl font-bold text-white text-center lg:text-left" style={{ lineHeight: "37px" }}>
              Try out one of our independent creator's modules.
            </h2>
          </div>

          {/* Right side - Adventure card */}
          <div className="flex-1 flex justify-center">
            <AdventureCard
              title="Skybridge to Oblivion"
              plays={1235}
              quote="An unforgettable adventure! I've never had so much fun on an airship."
              author="Emmerson Wrong"
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/airship-GRZW1BCr8X10ZTDvQ5gRnH0QwdA0hO.png"
              imageAlt="Airship flying over a colorful fantasy landscape"
              className="min-w-[450px] max-w-[1000px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
