"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

// Define testimonial data
const testimonials = [
  {
    id: 1,
    quote: "I played this game last night at an event and it was shockingly fun (and I want to play again).",
    author: "Founder of Pocket Worlds, now Angel investor in WanderHeart",
  },
  {
    id: 2,
    quote: "I've played over 40 of these AI D&D demos and this was by far the most fun I've had!",
    author: "Former Latitude (AI Dungeon) Creative Director on new games",
  },
]

export default function SocialProof() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Function to advance to the next testimonial
  const nextTestimonial = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setTimeout(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
      setIsAnimating(false)
    }, 500) // Half of the animation duration for a smooth transition
  }, [isAnimating])

  // Set up auto-rotation
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000) // Changed from 4000 to 8000 to make rotation half as fast

    return () => clearInterval(interval)
  }, [isPaused, nextTestimonial])

  // Handle manual testimonial selection
  const handleTestimonialClick = (index: number) => {
    if (index === activeTestimonial) return

    setIsPaused(true) // Pause auto-rotation when user clicks
    setIsAnimating(true)

    setTimeout(() => {
      setActiveTestimonial(index)
      setIsAnimating(false)
    }, 500) // Half of the animation duration
  }

  return (
    <section className="relative w-full bg-wanderheart-nearing-midnight pb-40">
      <div className="container mx-auto px-4 md:px-16 max-w-7xl">
        {/* Testimonial Quote */}
        <div className="mb-28 max-w-6xl mx-auto">
          {/* Quotation marks */}
          <div className="mb-8">
            <svg width="56" height="48" viewBox="0 0 56 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0 48V30.8571C0 26.8571 0.777778 22.9524 2.33333 19.1429C3.88889 15.2381 6.22222 11.8095 9.33333 8.85714C12.4444 5.90476 16.2222 3.61905 20.6667 2L25.3333 9.71429C22.2222 10.8571 19.6667 12.5714 17.6667 14.8571C15.7778 17.1429 14.6667 19.8095 14.3333 22.8571H22.6667V48H0ZM33.3333 48V30.8571C33.3333 26.8571 34.1111 22.9524 35.6667 19.1429C37.2222 15.2381 39.5556 11.8095 42.6667 8.85714C45.7778 5.90476 49.5556 3.61905 54 2L58.6667 9.71429C55.5556 10.8571 53 12.5714 51 14.8571C49.1111 17.1429 48 19.8095 47.6667 22.8571H56V48H33.3333Z"
                fill="white"
              />
            </svg>
          </div>

          {/* Testimonial text with animation */}
          <div className="min-h-[280px] relative">
            <div
              className={`absolute w-full transition-opacity duration-1000 mb-8 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <h4 className="">{testimonials[activeTestimonial].quote}</h4>

              {/* Attribution */}
              <p className="text-xl text-white opacity-80 mb-8 mt-16">—{testimonials[activeTestimonial].author}</p>

              {/* Navigation Dots */}
              <div className="flex gap-4 mt-4">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? "bg-white" : "bg-[#565793] opacity-60"
                    } hover:opacity-100`}
                    aria-label={`Testimonial ${index + 1}`}
                    onClick={() => handleTestimonialClick(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Magic The Gathering Section - Full Width */}
      <div className="mx-8">
        <div
          className="max-w-6xl mx-auto mt-20 py-4 px-8 rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(to right, #B86256, #5D322C)",
          }}
        >
          <div className="mx-auto flex items-center gap-2">
            <div className="flex-shrink-0">
              <Image
                src="/images/magic.png"
                alt="Magic The Gathering"
                width={50}
                height={50}
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </div>
            <p className="text-xl md:text-2xl text-wanderheart-parchment">
              <span className="opacity-90 font-normal">From two of the creative minds that brought you</span>
              <span className="font-bold ml-2">Dungeons & Dragons and Magic The Gathering</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
