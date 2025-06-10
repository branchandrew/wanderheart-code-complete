"use client"

import Image from "next/image"
import { useState } from "react"
import SignUpSection from "@/components/sign-up-section"
import VideoModal from "@/components/video-modal"

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handlePlayClick = () => {
    setIsVideoModalOpen(true)
  }

  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden pb-20 hero-md:pb-60">
        {/* Background image with proper scaling */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.jpg" alt="Hero background" fill priority className="object-cover" sizes="100vw" />
        </div>

        {/* Content overlay */}
        <div className="relative z-[10] flex flex-col items-center justify-center min-h-screen px-4 pt-48 sm:px-6 lg:px-8 text-center max-w-7xl mx-auto">
          {/* Horizontal rule at the top */}
          <div className="w-full max-w-xl mx-auto mb-4">
            <Image src="/images/hr.png" alt="Decorative divider" width={200} height={8} className="w-full" priority />
          </div>

          {/* Logo below the divider */}
          <div className="w-full max-w-xs mx-auto mb-8">
            <Image src="/images/logo.png" alt="WanderHeart" width={126} height={26} className="w-full" priority />
          </div>

          {/* Header text */}
          <div className="w-full mx-auto mb-12">
            <h2 className="text-[2.5rem] hero-md:text-[3.5rem] font-bold leading-tight text-wanderheart-parchment mb-10">
              The Magic of Tabletop Roleplaying
            </h2>
            <h3 className="text-[1.8rem] hero-md:text-[2.5rem] font-semibold leading-tight text-wanderheart-parchment">
              ...with the Push-to-Talk of a Button
            </h3>
          </div>

          {/* Hero Sorbet Box with Media Player */}
          <div className="w-full mx-auto mt-8 flex justify-center">
            <div
              className="relative rounded-3xl overflow-hidden shadow-xl flex flex-col hero-md:flex-row"
              style={{
                background: "linear-gradient(25deg, #F07F6F, #BE63B9)",
                width: "808px",
                maxWidth: "100%",
              }}
            >
              {/* Left side - Media Player */}
              <div className="w-full hero-md:w-1/2 relative flex justify-center hero-md:justify-start">
                <div
                  className="relative cursor-pointer transition-transform duration-300 hover:scale-[1.02] w-full hero-md:max-w-[400px] hero-md:w-[400px]"
                  style={{
                    height: "256px",
                    borderRadius: "24px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onClick={handlePlayClick}
                >
                  {/* Gradient Border */}
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "24px",
                      padding: "3px",
                      background: "linear-gradient(45deg, #A0519F, #6FC7D6, #714BD0)",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      zIndex: 2,
                    }}
                  ></span>

                  {/* Background Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/watch.jpg"
                      alt="Watch the playtests"
                      fill
                      className="object-cover rounded-[24px]"
                      priority
                    />
                  </div>

                  {/* Play Button */}
                  <div
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 z-10 ${
                      isHovering ? "scale-110" : "scale-100"
                    }`}
                  >
                    <Image
                      src="/images/play-button@2x.png"
                      alt="Play"
                      width={120}
                      height={120}
                      className="w-20 h-20 hero-md:w-24 hero-md:h-24"
                      sizes="(max-width: 768px) 80px, 96px"
                    />
                  </div>

                  {/* "Watch the playtests" Label */}
                  <div className="absolute top-0 left-0 z-10 m-[3px]">
                    <div
                      className="text-white font-semibold py-2 px-6 text-lg"
                      style={{
                        background: "linear-gradient(90deg, #7073D1 0%, #72BFD2 50%, #888ABA 100%)",
                        borderRadius: "18px 0px 18px 0px",
                      }}
                    >
                      Watch the playtests
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Text Content */}
              <div className="hero-md:w-1/2 p-8 pt-6 mt-0 flex flex-col justify-center text-center hero-md:text-left">
                <div className="mb-4">
                  <h2
                    className="font-bold text-white mx-auto hero-md:mx-0 mb-8"
                    style={{
                      fontSize: "47px",
                      lineHeight: "1",
                      marginLeft: "0",
                      marginRight: "0",
                    }}
                  >
                    Tabletop RPG.
                    <br />
                    Any time.
                    <br />
                    No prep.
                  </h2>
                </div>
                <p className="text-white">
                  WanderHeart is an AI Game Master in your pocket. It follows your schedule, deals with the crunch, and
                  tells rich stories for you and your friends.
                </p>
              </div>
            </div>
          </div>

          {/* Sign Up Section */}
          <div className="w-full mx-auto -mt-16  flex justify-center">
            <SignUpSection />
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[100px] z-[1]"
          style={{
            background: "linear-gradient(to bottom, rgba(18, 20, 41, 0) 0%, rgba(18, 20, 41, 1) 100%)",
          }}
        ></div>
      </section>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoId="mAhQ1IKDMuU" />
    </>
  )
}
