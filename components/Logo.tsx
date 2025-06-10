import Image from "next/image"

interface LogoProps {
  className?: string
  width?: number | string
  height?: number | string
}

export default function Logo({ className = "", width = 253, height = 52 }: LogoProps) {
  // Convert width and height to numbers if they're strings
  const widthValue = typeof width === "number" ? width : Number.parseInt(width as string, 10)
  const heightValue = typeof height === "number" ? height : Number.parseInt(height as string, 10)

  return (
    <Image
      src="/images/logo.png"
      alt="WanderHeart Logo"
      width={widthValue}
      height={heightValue}
      className={className}
      priority
      sizes={`${widthValue}px`}
    />
  )
}
