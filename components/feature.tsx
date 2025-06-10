import type React from "react"
import type { LucideIcon } from "lucide-react"

interface FeatureProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

export function Feature({ title, description, icon, className = "" }: FeatureProps) {
  return (
    <div className={`flex items-start min-w-[100px] max-w-[295px] sm:max-w-[410px] md:max-w-[295px] ${className}`}>
      {icon && <div className="flex-shrink-0 text-white">{icon}</div>}
      <div className="ml-6">
        <h3 className="text-wh-body font-bold text-white mb-2">{title}</h3>
        <p className="text-wh-body text-white opacity-70">{description}</p>
      </div>
    </div>
  )
}

// Example usage with Lucide icons
export function FeatureWithLucideIcon({
  title,
  description,
  icon: Icon,
  className = "",
}: Omit<FeatureProps, "icon"> & { icon: LucideIcon }) {
  return (
    <Feature
      title={title}
      description={description}
      icon={<Icon className="w-[45px] h-[45px]" />}
      className={className}
    />
  )
}
