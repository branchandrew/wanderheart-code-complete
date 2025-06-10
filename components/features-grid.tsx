import { LigatureIcon as Bandage, Clock, Users, Sparkles } from "lucide-react"
import { Feature } from "./feature"

export default function FeaturesGrid() {
  return (
    <div className="p-8 bg-wanderheart-midnight-sky">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-wanderheart-parchment mb-12 text-center">Key Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature
            title="No GM Needed"
            description="The AI runs the game and keeps the story moving."
            icon={<Bandage className="w-8 h-8" />}
          />

          <Feature
            title="Play Anytime"
            description="Jump in and out of your adventure whenever you want."
            icon={<Clock className="w-8 h-8" />}
          />

          <Feature
            title="Multiplayer"
            description="Play with friends across different time zones and schedules."
            icon={<Users className="w-8 h-8" />}
          />

          <Feature
            title="Rich Storytelling"
            description="Experience immersive narratives tailored to your choices."
            icon={<Sparkles className="w-8 h-8" />}
          />
        </div>
      </div>
    </div>
  )
}
