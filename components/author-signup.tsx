"use client"
import { useState } from "react"
import type React from "react"

export default function AuthorSignup() {
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
        "https://andrewbranch.us18.list-manage.com/subscribe/post?u=92a05120cf493df5bf7d97eca&id=b3831f6eba&f_id=00e3b3e6f0"
      tempForm.method = "post"
      tempForm.target = "hidden_iframe"
      tempForm.id = "mc-embedded-subscribe-form"
      tempForm.name = "mc-embedded-subscribe-form"
      tempForm.className = "validate"

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
    } catch (error) {
      console.error("Subscription error:", error)
      setMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden">
      {/* Left side - Signup form */}
      <div
        className="w-full pt-8 pl-8 pr-8 pb-8 md:px-8 md:pb-8 md:w-1/2 md:max-w-[445px]"
        style={{
          boxShadow: "inset 10px 4px 34px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <h2 className="text-5xl font-bold text-white mb-8">
          Become a
          <br />
          WanderHeart
          <br />
          Author
        </h2>
        <p className="text-white text-xl mb-6">Sign up for early bird access</p>
        <div className="max-w-xl">
          <form onSubmit={handleSubmit} className="relative">
            <label htmlFor="author-email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              name="EMAIL"
              id="author-email"
              placeholder="Enter your email"
              required
              disabled={isSubmitting}
              className="w-full h-16 px-6 py-4 bg-transparent border border-white/40 rounded-full text-white placeholder:text-white/70 focus:outline-none focus:border-white/80 transition-colors disabled:opacity-50"
            />

            {/* Explicit tag for module creators */}
            <input type="hidden" name="tags" value="3209099" />

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
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white rounded-full hover:bg-white/10 transition-colors disabled:opacity-50"
              aria-label="Submit email"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          {/* Success/Error Message */}
          {message && <p className="text-white text-sm mt-4 text-center">{message}</p>}
        </div>
      </div>

      {/* Right side - New content */}
      <div className="bg-[#e2c6e2] pt-8 px-8 pb-8 md:pt-12 md:px-12 md:pb-12 flex flex-col justify-center">
        <h2 className="font-bold text-[#333] mb-8" style={{ fontSize: "2.5rem", lineHeight: "auto" }}>
          Ready to bring your stories to life?
        </h2>
        <p className="text-[#333] text-lg leading-relaxed mt-4">
          Join our early access list and be the first to build interactive adventures, shape new worlds, and earn from
          your creativity. The WanderHeart builder is almost here—secure your spot today.
        </p>
      </div>
    </div>
  )
}
