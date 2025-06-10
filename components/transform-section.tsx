import Image from "next/image"
import { Feature } from "./feature"
import { GameMasteringIcon } from "./ui/game-mastering-icon"
import { Palette } from "lucide-react"
import { MonetizationIcon } from "./ui/monetization-icon"
import { CommunityIcon } from "./ui/community-icon"
import AuthorSignup from "./author-signup"

export default function TransformSection() {
  return (
    <section className="py-24 bg-wanderheart-plumb">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: "120px" }}>
          <h2 className="text-5xl font-bold text-white mb-6">
            Transform Your Stories Into
            <br />
            Interactive Adventures
          </h2>
          <h3 className="text-2xl text-[#9697db] max-w-3xl mx-auto">
            WanderHeart turns your creative writing into
            <br />
            engaging AI-powered game experiences.
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12" style={{ marginBottom: "120px" }}>
          {/* Left side - Module Creator Screenshot */}
          <div className="relative flex-shrink-0">
            <div
              className="absolute inset-0 bg-gradient-to-r from-wanderheart-dull-pink to-wanderheart-mystery-plumb rounded-[15px]"
              style={{
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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshot-IxAGjztlOCFoJ8vkS6eW9JIA8lsyFk.png"
                alt="WanderHeart module creator interface"
                width={390}
                height={241}
                className="rounded-[15px] relative z-10"
                priority
              />
            </div>
          </div>

          {/* Right side - Features Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 justify-center">
            <div className="w-[410px] md:w-auto">
              <Feature
                title="AI Game Mastering"
                description="that brings your adventures to life, adapting narratives to player choices"
                icon={<GameMasteringIcon className="w-[45px] h-[45px]" />}
              />
            </div>

            <div className="w-[410px] md:w-auto">
              <Feature
                title="Easy Module Creation"
                description="with guided templates and AI-assisted world building"
                icon={<Palette className="w-[45px] h-[45px]" />}
              />
            </div>

            <div className="w-[410px] md:w-auto">
              <Feature
                title="Monetization Options"
                description="to earn royalties when players enjoy your content"
                icon={<MonetizationIcon className="w-[45px] h-[45px]" />}
              />
            </div>

            <div className="w-[410px] md:w-auto">
              <Feature
                title="Community Integration"
                description="share and collaborate with other creators in the WanderHeart ecosystem"
                icon={<CommunityIcon className="w-[45px] h-[45px]" />}
              />
            </div>
          </div>
        </div>

        {/* Author Signup Section */}
        <div className="rounded-3xl overflow-hidden shadow-xl" style={{ marginBottom: "120px" }}>
          <div className="relative">
            {/* Background Image for the left side */}
            <div className="absolute inset-0 z-0 md:w-1/2">
              <Image
                src="/images/oilslick.jpg"
                alt="Colorful gradient background"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <AuthorSignup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
