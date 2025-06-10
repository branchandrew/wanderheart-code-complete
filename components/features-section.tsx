import Image from "next/image"
import { Feature } from "./feature"
import { NoGMIcon } from "./ui/no-gm-icon"
import { JumpIcon } from "./ui/jump-icon"
import { DynamicIcon } from "./ui/dynamic-icon"
import { SoloGroupIcon } from "./ui/solo-group-icon"

export default function FeaturesSection() {
  return (
    <section className="bg-wanderheart-plumb py-[150px]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Product Image with 10px stroke and glow effect */}
          <div className="relative flex-shrink-0">
            <div
              className="absolute inset-0 rounded-[15px]"
              style={{
                background: "linear-gradient(35deg, #E8AFAC, #565793)",
                paddingTop: "12px",
                paddingRight: "10px",
                paddingBottom: "10px",
                paddingLeft: "10px",
                transform: "scale(1.05)",
              }}
            />
            <div
              className="relative"
              style={{
                filter: "drop-shadow(0px 14px 26px rgba(68, 69, 127, 0.4))",
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/product-mQn4rCqdGPdnaEmnbRgQ8uBRAYT8m9.png"
                alt="WanderHeart app interface showing gameplay on desktop and mobile"
                width={390}
                height={241}
                className="rounded-[15px] relative z-10"
                priority
                sizes="(max-width: 768px) 100vw, 390px"
                quality={85}
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 justify-center">
            <div className="w-[410px] md:w-auto">
              <Feature
                title="No GM Needed"
                description="The AI runs the game and keeps the story moving."
                icon={<NoGMIcon />}
              />
            </div>

            <div className="w-[410px] md:w-auto">
              <Feature
                title="Jump Into Adventures Fast"
                description="Pick a module and start playing right away."
                icon={<JumpIcon />}
              />
            </div>

            <div className="w-[410px] md:w-auto">
              <Feature
                title="Dynamic Storytelling"
                description="Your choices shape the world and outcome."
                icon={<DynamicIcon />}
              />
            </div>

            <div className="w-[410px] md:w-auto">
              <Feature
                title="Solo or Group Friendly"
                description="Play alone or with friends, anytime."
                icon={<SoloGroupIcon />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
