import Hero from "@/components/hero"
import SocialProof from "@/components/social-proof"
import Adventure from "@/components/adventure"
import FeaturesSection from "@/components/features-section"
import ModuleSection from "@/components/module-section"
import { SectionDivider } from "@/components/section-divider"
import TransformSection from "@/components/transform-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <Adventure />
      <FeaturesSection />
      <ModuleSection />
      <SectionDivider
        imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/battle%20transition.jpg-rRnsu4BdqeHnmVKpzMIUU6XTmMoIdN.jpeg"
        imageAlt="Warrior silhouette against a purple sunset on a battlefield"
      />
      <TransformSection />
      <Footer />
    </main>
  )
}
