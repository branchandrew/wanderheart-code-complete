export default function Loading() {
  return (
    <div className="min-h-screen bg-wanderheart-midnight-sky flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8A84E2] via-[#8CEFE9] to-[#E8AFAC] animate-spin-slow"></div>
          <div className="absolute inset-[3px] rounded-full bg-wanderheart-midnight-sky"></div>
          <div className="absolute inset-[6px] rounded-full bg-gradient-to-r from-[#8A84E2] via-[#8CEFE9] to-[#E8AFAC] opacity-50"></div>
        </div>
        <p className="mt-4 text-wanderheart-parchment text-xl">Loading WanderHeart...</p>
      </div>
    </div>
  )
}
