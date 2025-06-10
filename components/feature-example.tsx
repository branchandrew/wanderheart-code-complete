import { LigatureIcon as Bandage } from "lucide-react"
import { Feature } from "./feature"

export default function FeatureExample() {
  return (
    <div className="p-8 bg-wanderheart-midnight-sky">
      <div className="max-w-md">
        <Feature
          title="No GM Needed"
          description="The AI runs the game and keeps the story moving."
          icon={<Bandage className="w-8 h-8" />}
        />
      </div>
    </div>
  )
}
