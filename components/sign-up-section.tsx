"use client"
import { useState } from "react"
import type React from "react"
import { Input } from "@/components/ui/input"

export default function SignUpSection() {
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
    } catch (error) {
      console.error("Subscription error:", error)
      setMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="w-full mx-auto mt-8 rounded-b-3xl overflow-hidden pt-8"
      style={{
        width: "808px",
        maxWidth: "100%",
        backgroundColor: "rgba(126, 133, 179, 0.3)",
      }}
    >
      <div className="p-8">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg">
            <p className="text-white text-left pb-2">Sign up for early bird access</p>
            <form onSubmit={handleSubmit} className="flex items-center w-full">
              <Input
                type="email"
                name="EMAIL"
                id="email"
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
                className="pr-16 text-wanderheart-neon-water border border-[#C1FFFB] bg-black/15 backdrop-blur-sm w-full"
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
                className="absolute right-4 text-wanderheart-neon-water disabled:opacity-50"
                aria-label="Subscribe to newsletter"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-wanderheart-neon-water border-t-transparent rounded-full animate-spin" />
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
            {message && <p className="text-white text-sm mt-2 text-center">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
