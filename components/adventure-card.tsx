"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import type React from "react"

interface AdventureCardProps {
  title: string
  plays: number
  quote: string
  author: string
  imageSrc: string
  imageAlt: string
  className?: string
}

export function AdventureCard({ title, plays, quote, author, imageSrc, imageAlt, className = "" }: AdventureCardProps) {
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      // Submit to Mailchimp using a hidden iframe to avoid CORS issues
      const iframe = document.createElement("iframe")
      iframe.style.display = "none"
      iframe.name = "hidden_iframe"
      document.body.appendChild(iframe)

      // Create a temporary form that targets the hidden iframe
      const tempForm = document.createElement("form")
      tempForm.action =
        "https://andrewbranch.us18.list-manage.com/subscribe/post?u=92a05120cf493df5bf7d97eca&id=b3831f6eba&f_id=00feb3e6f0"
      tempForm.method = "post"
      tempForm.target = "hidden_iframe"

      // Add form data to temp form
      for (const [key, value] of formData.entries()) {
        const input = document.createElement("input")
        input.type = "hidden"
        input.name = key
        input.value = value as string
        tempForm.appendChild(input)
      }

      document.body.appendChild(tempForm)
      tempForm.submit()

      // Clean up
      setTimeout(() => {
        document.body.removeChild(iframe)
        document.body.removeChild(tempForm)
      }, 1000)

      // Show success message
      setMessage("Thank you for signing up!")
      form.reset()

      // Hide form after success
      setTimeout(() => {
        setShowEmailForm(false)
        setMessage("")
      }, 2000)
    } catch (error) {
      console.error("Subscription error:", error)
      setMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`overflow-hidden rounded-[32px] bg-[#565793] shadow-lg ${className}`}>
      {/* Image at the top */}
      <div className="relative h-[240px] w-full overflow-hidden rounded-t-[24px]">
        <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" priority />
      </div>

      {/* Content area */}
      <div className="p-8 text-center">
        {/* Title */}
        <h3 className="text-4xl font-bold text-white mb-4">{title}</h3>

        {/* Play count */}
        <p className="text-5xl font-bold text-white mb-6">
          {plays.toLocaleString()} <span className="text-2xl font-normal">Plays</span>
        </p>

        {/* Quote */}
        <div className="mb-8">
          <p className="text-xl text-white italic mb-2">"{quote}"</p>
          <p className="text-white">- {author}</p>
        </div>

        {/* Sign up button or email form */}
        <div className="flex flex-col items-center">
          {!showEmailForm ? (
            <Button
              onClick={() => setShowEmailForm(true)}
              className="bg-[#DCE2EB] hover:bg-[#c4cad2] text-black font-bold text-xl px-10 py-6 h-auto rounded-full"
            >
              Sign up for early access
            </Button>
          ) : (
            <div className="w-full max-w-md">
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="h-[50px] px-4 pr-12 rounded-full bg-black/15 backdrop-blur-sm border border-[#C1FFFB] text-wanderheart-neon-water placeholder:text-wanderheart-neon-water/70 focus:outline-none focus:border-wanderheart-neon-water/80 transition-colors disabled:opacity-50 w-full"
                />

                {/* Optional tag for subscribers */}
                <input type="hidden" name="tags" value="3209098" />

                {/* Anti-bot honeypot field */}
                <input
                  type="text"
                  name="b_92a05120cf493df5bf7d97eca_b3831f6eba"
                  tabIndex={-1}
                  value=""
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                  readOnly
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-wanderheart-neon-water disabled:opacity-50 hover:text-white transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-wanderheart-neon-water border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </form>

              {/* Close button */}
              

              {/* Success/Error Message */}
              {message && (
                <div className="mt-2 text-center">
                  <p className="text-white text-sm">{message}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
