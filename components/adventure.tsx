"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

// Define the data for our accordion cards
const accordionData = [
  {
    id: "play-anytime",
    title: "Play Anytime, Anywhere",
    description:
      "On your way to work, with friends at the library, or even while getting ready for bed. It's easy and quick to join a game from anywhere, and there's no long-term commitment - each session lasts about 45 minutes!",
    icon: (
      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27 0C41.9117 0 54 12.0883 54 27C54 41.9117 41.9117 54 27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0ZM27 10C17.6112 10 10 17.6112 10 27C10 36.3888 17.6112 44 27 44C36.3888 44 44 36.3888 44 27C44 17.6112 36.3888 10 27 10Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.25 19C27.9404 19 28.5 19.5596 28.5 20.25V26.3989L32.3006 30.1994C32.7887 30.6876 32.7887 31.4791 32.3006 31.9672C31.8124 32.4554 31.0209 32.4554 30.5328 31.9672L26.3661 27.8006C26.1317 27.5661 26 27.2482 26 26.9167V20.25C26 19.5596 26.5596 19 27.25 19Z"
          fill="white"
        />
      </svg>
    ),
    backgroundImage: "/images/play.jpg",
    gradientClasses: "from-[#FC7094] via-[#FC6E94] to-[#FC6D93]/0",
  },
  {
    id: "multiplayer-first",
    title: "Multiplayer First",
    description:
      "Accessible and easy enough to play with friends and family who might be new to playing TTRPGs, and satisfying for veterans of the genre. Connect across all distances, schedules, and hurdles.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0ZM26.667 31.335C20.2237 31.335 15 34.3201 15 38.002C15.0003 41.6837 20.2239 44.668 26.667 44.668C33.11 44.6679 38.3327 41.6836 38.333 38.002C38.333 34.3201 33.1102 31.3351 26.667 31.335ZM26.667 13C22.9851 13 20 15.9851 20 19.667C20.0002 23.3487 22.9852 26.333 26.667 26.333C30.3486 26.3328 33.3328 23.3486 33.333 19.667C33.333 15.9852 30.3487 13.0002 26.667 13Z"
          fill="white"
        />
        <path
          opacity="0.4"
          d="M35.6953 14C38.4565 14.0003 40.6953 16.2387 40.6953 19C40.6953 21.7613 38.4565 23.9997 35.6953 24C34.4978 24 33.399 23.578 32.5381 22.876C33.0622 21.9239 33.3613 20.8306 33.3613 19.667C33.3613 18.1497 32.8537 16.7513 32 15.6309C32.9144 14.6287 34.2318 14 35.6953 14Z"
          fill="black"
          fillOpacity="0.5"
        />
        <path
          opacity="0.4"
          d="M37.3613 32.333C41.9636 32.333 45.6951 34.5717 45.6953 37.333C45.6953 40.0944 41.9637 42.333 37.3613 42.333C36.7952 42.333 36.2424 42.298 35.708 42.2334C37.3655 41.0822 38.3612 39.609 38.3613 38.002C38.3613 35.8832 36.6312 33.9965 33.9346 32.7754C34.9799 32.492 36.1398 32.333 37.3613 32.333Z"
          fill="black"
          fillOpacity="0.5"
        />
      </svg>
    ),
    backgroundImage: "/multiplayer-bg.png",
    gradientClasses: "from-[#0E8AAA] via-[#0E8AAA] to-[#2E8AA2]/0",
  },
  {
    id: "instant-immersion",
    title: "Instant Immersion",
    description:
      "Ready to go? Get into a game with a single click, and let yourself be swept away into your next journey. Beautiful interface, with gorgeous character art, world maps, and writing to help you feel part the action, instantly.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0ZM34.5645 17.3447C34.5645 14.7547 33.1614 14.2304 31.4502 16.1729L30.2168 17.5762L19.7803 29.4463C18.3466 31.065 18.9474 32.3915 21.1055 32.3916H25.8691V43.4912C25.8691 46.0811 27.2722 46.6054 28.9834 44.6631L30.2168 43.2598L40.6543 31.3896C42.088 29.7709 41.4865 28.4443 39.3281 28.4443H34.5645V17.3447Z"
          fill="white"
        />
      </svg>
    ),
    backgroundImage: "/instant-bg.jpeg",
    gradientClasses: "from-[#08B4AA] via-[#08B4AA] to-[#01968E]/0",
  },
  {
    id: "rules-handled",
    title: "Rules & Prep Handled",
    description:
      "With our system, the rules and prep work are all handled for you. All you need to do is focus on your character, your friends, and the story you're weaving together.",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0ZM21.5039 17C20.8304 17 20.1495 17.0424 19.5146 17.2676C15.5436 18.6761 12.8122 23.825 13.0098 35.5039C13.0496 37.8569 13.5998 40.4581 15.7227 41.4736C16.3842 41.79 17.1607 42 18.0439 42C19.1038 42 19.946 41.6972 20.5957 41.2715C21.2768 40.825 21.8771 40.245 22.4766 39.665C23.2175 38.9482 23.9581 38.231 24.8516 37.7676C25.8246 37.2631 26.9049 37.0001 28.001 37H31.3311C32.4271 37.0001 33.5074 37.2631 34.4805 37.7676C35.374 38.2309 36.1145 38.9482 36.8555 39.665C37.455 40.245 38.0552 40.825 38.7363 41.2715C39.386 41.6973 40.2282 41.9999 41.2881 42C42.1714 42 42.9478 41.79 43.6094 41.4736C45.7324 40.4582 46.2825 37.857 46.3223 35.5039C46.5198 23.8248 43.7885 18.676 39.8174 17.2676C39.1826 17.0425 38.5017 17 37.8281 17H36.8076C35.3451 17.0001 33.9184 17.4539 32.7246 18.2988L31.8877 18.8906C31.2381 19.3502 30.4618 19.5967 29.666 19.5967C28.8703 19.5966 28.0939 19.3502 27.4443 18.8906L26.6074 18.2988C25.4136 17.454 23.987 17 22.5244 17H21.5039ZM22.0352 24.1182C22.7255 24.1182 23.2852 24.6778 23.2852 25.3682V26.6182H24.5352C25.2255 26.6182 25.7852 27.1778 25.7852 27.8682C25.785 28.5584 25.2254 29.1182 24.5352 29.1182H23.2852V30.3682C23.285 31.0584 22.7254 31.6182 22.0352 31.6182C21.3452 31.6178 20.7853 31.0582 20.7852 30.3682V29.1182H19.5352C18.8452 29.1178 18.2853 28.5582 18.2852 27.8682C18.2852 27.178 18.8451 26.6185 19.5352 26.6182H20.7852V25.3682C20.7852 24.678 21.3451 24.1185 22.0352 24.1182ZM37.4521 28.7012C38.1425 28.7012 38.7021 29.2608 38.7021 29.9512C38.7021 30.6415 38.1425 31.2012 37.4521 31.2012C36.7619 31.201 36.2021 30.6414 36.2021 29.9512C36.2021 29.2609 36.7619 28.7013 37.4521 28.7012ZM34.9521 26.2012C35.6425 26.2012 36.2021 26.7608 36.2021 27.4512C36.2021 28.1415 35.6425 28.7012 34.9521 28.7012C34.2619 28.701 33.7021 28.1414 33.7021 27.4512C33.7021 26.7609 34.2619 26.2013 34.9521 26.2012ZM39.9521 26.2012C40.6425 26.2012 41.2021 26.7608 41.2021 27.4512C41.2021 28.1415 40.6425 28.7012 39.9521 28.7012C39.2619 28.701 38.7021 28.1414 38.7021 27.4512C38.7021 26.7609 39.2619 26.2013 39.9521 26.2012ZM37.4521 23.7012C38.1425 23.7012 38.7021 24.2608 38.7021 24.9512C38.7021 25.6415 38.1425 26.2012 37.4521 26.2012C36.7619 26.201 36.2021 25.6414 36.2021 24.9512C36.2021 24.2609 36.7619 23.7013 37.4521 23.7012Z"
          fill="white"
        />
      </svg>
    ),
    backgroundImage: "/rules-bg.jpeg",
    gradientClasses: "from-[#565793] via-[#565793] to-[#3D4474]/0",
  },
]

// Mobile Accordion Component - Simplified
function MobileAccordion() {
  return (
    <div className="w-full space-y-6 px-8">
      {accordionData.map((card) => (
        <div
          key={card.id}
          className="relative rounded-[20px] overflow-hidden shadow-lg w-full h-[200px]"
          style={{ marginBottom: "16px" }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={card.backgroundImage || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* Gradient Overlay - Using pre-defined classes */}
          <div className={`absolute inset-0 z-10 bg-gradient-to-r ${card.gradientClasses}`}></div>

          {/* Content Container */}
          <div className="absolute inset-0 z-20 p-4 flex flex-col justify-center">
            <div className="flex items-start w-1/2">
              <div className="flex-shrink-0 h-[40px] w-[40px] mt-1">
                <div className="scale-75">{card.icon}</div>
              </div>
              <div className="ml-4 overflow-hidden">
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-white/90 text-sm">{card.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Desktop Accordion Component - Simplified
function DesktopAccordion() {
  const [expandedId, setExpandedId] = useState<string>("play-anytime")
  const [isPaused, setIsPaused] = useState(false)

  // Function to advance to the next card
  const rotateToNextCard = useCallback(() => {
    const currentIndex = accordionData.findIndex((card) => card.id === expandedId)
    const nextIndex = (currentIndex + 1) % accordionData.length
    setExpandedId(accordionData[nextIndex].id)
  }, [expandedId])

  // Set up auto-rotation
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      rotateToNextCard()
    }, 8000) // Changed from 4000 to 8000 to make rotation half as fast

    return () => clearInterval(interval)
  }, [isPaused, rotateToNextCard])

  // Handle card click
  const handleCardClick = (id: string) => {
    setIsPaused(true) // Pause auto-rotation when user clicks
    setExpandedId(id)
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {accordionData.map((card) => (
        <div
          key={card.id}
          className={cn(
            "relative h-[400px] rounded-[20px] overflow-hidden cursor-pointer transition-all duration-250 ease-out shadow-lg",
            card.id === expandedId ? "w-[522px]" : "w-[78px]",
          )}
          onClick={() => handleCardClick(card.id)}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={card.backgroundImage || "/placeholder.svg"}
              alt=""
              fill
              className={cn(
                "object-cover transition-all duration-250 ease-out",
                card.id === expandedId ? "object-[150px_center]" : "object-center",
              )}
              loading="lazy"
            />
          </div>

          {/* Gradient Overlay - Using pre-defined classes */}
          <div
            className={`absolute inset-0 z-10 bg-gradient-to-r ${
              card.gradientClasses
            } transition-opacity duration-250 ease-out ${card.id === expandedId ? "opacity-100" : "opacity-0"}`}
          ></div>

          {/* Content Container */}
          <div
            className={`absolute inset-0 z-20 p-8 flex transition-opacity duration-250 ease-out ${
              card.id === expandedId ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex-shrink-0 flex justify-center h-[60px] w-[60px]">{card.icon}</div>

            <div className="ml-8 w-[232px]">
              <h2 className="text-3xl font-bold text-white mb-3">{card.title}</h2>
              <p className="text-white/90">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Adventure() {
  const [windowWidth, setWindowWidth] = useState(0)

  // Update window width on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Determine if we're on mobile (less than 768px)
  const isMobile = windowWidth < 768

  return (
    <section
      className="relative w-full py-24"
      style={{
        background: "linear-gradient(to bottom, #4F3A6E, #121429)",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          {/* Section Heading */}
          <div className="w-full lg:w-[300px] text-center lg:text-left mb-12 lg:mb-0 lg:pt-8 lg:pr-8">
            <h2 className="text-5xl font-bold text-white leading-tight">
              Adventure.
              <br />
              Your Way
            </h2>
          </div>

          {/* Accordion Cards Container */}
          <div className="w-full lg:flex-1 md:min-w-[780px]">
            {isMobile ? <MobileAccordion /> : <DesktopAccordion />}
          </div>
        </div>
      </div>
    </section>
  )
}
