"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Logo from "@/components/Logo"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [showEmailForm, setShowEmailForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

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
    <div className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto px-6 max-w-7xl">
        <header className="w-full border border-[#2E3548] bg-[#232951]/30 backdrop-blur-sm py-4 rounded-full">
          <div className="w-full flex items-center justify-between px-6">
            <Link href="/" className="flex items-center">
              <Logo height={40} className="text-wanderheart-parchment" />
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-wanderheart-parchment"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-4">
                {!showEmailForm ? (
                  <button
                    onClick={() => setShowEmailForm(true)}
                    className="join-button-border bg-transparent px-6 h-[50px] flex items-center justify-center text-wanderheart-parchment transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,195,255,0.5)] hover:text-white whitespace-nowrap"
                    style={{
                      position: "relative",
                      borderRadius: "9999px",
                      overflow: "hidden",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "9999px",
                        padding: "1px",
                        background: "linear-gradient(45deg, #00c3ff, #dc2e5a, #ef8467, #f6da71)",
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    ></span>
                    Sign up for early access
                  </button>
                ) : (
                  <div className="relative">
                    <form onSubmit={handleSubmit} className="flex items-center">
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder="Enter your email"
                        required
                        disabled={isSubmitting}
                        className="h-[50px] px-4 pr-12 rounded-full bg-black/15 backdrop-blur-sm border border-[#C1FFFB] text-wanderheart-neon-water placeholder:text-wanderheart-neon-water/70 focus:outline-none focus:border-wanderheart-neon-water/80 transition-colors disabled:opacity-50"
                        style={{ width: "280px" }}
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
                        className="absolute right-3 text-wanderheart-neon-water disabled:opacity-50 hover:text-white transition-colors"
                        aria-label="Subscribe to newsletter"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-wanderheart-neon-water border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
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
                    <button
                      onClick={() => {
                        setShowEmailForm(false)
                        setMessage("")
                      }}
                      className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-wanderheart-parchment hover:text-white transition-colors"
                      aria-label="Close form"
                    >
                      
                    </button>

                    {/* Success/Error Message */}
                    {message && (
                      <div className="absolute top-full left-0 right-0 mt-2 text-center">
                        <p className="text-white text-sm bg-black/50 rounded px-2 py-1">{message}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 px-6 pb-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
              {!showEmailForm ? (
                <button
                  onClick={() => {
                    setShowEmailForm(true)
                    setMobileMenuOpen(false)
                  }}
                  className="join-button-border bg-transparent px-6 h-[50px] w-full flex items-center justify-center text-wanderheart-parchment transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,195,255,0.5)] hover:text-white mb-2 whitespace-nowrap"
                  style={{
                    position: "relative",
                    borderRadius: "9999px",
                    overflow: "hidden",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "9999px",
                      padding: "1px",
                      background: "linear-gradient(45deg, #00c3ff, #dc2e5a, #ef8467, #f6da71)",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  ></span>
                  Sign up for early access
                </button>
              ) : (
                <div className="relative">
                  <form onSubmit={handleSubmit} className="flex items-center w-full">
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
                      className="absolute right-3 text-wanderheart-neon-water disabled:opacity-50 hover:text-white transition-colors"
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

                  {/* Success/Error Message */}
                  {message && (
                    <div className="mt-2 text-center">
                      <p className="text-white text-sm bg-black/50 rounded px-2 py-1">{message}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </header>
      </div>
    </div>
  )
}
