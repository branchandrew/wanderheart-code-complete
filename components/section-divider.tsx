import Image from "next/image"

interface SectionDividerProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

export function SectionDivider({ imageSrc, imageAlt, className = "" }: SectionDividerProps) {
  return (
    <div className={`w-full relative border-none ${className}`} style={{ marginTop: "-1px" }}>
      <div className="w-full h-auto border-none">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={1920}
          height={240}
          className="w-full h-auto object-cover block"
          sizes="100vw"
        />
      </div>
    </div>
  )
}
