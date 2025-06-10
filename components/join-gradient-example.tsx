export default function JoinGradientExample() {
  return (
    <div className="space-y-8 p-8">
      <h2 className="wh-heading-2 wh-gradient-join-text">Join Gradient Text</h2>

      <div className="wh-gradient-join h-24 w-full rounded-lg"></div>

      <button className="wh-button-join px-6 py-3 rounded-md wh-button-text">Join Gradient Button</button>

      <div className="wh-border-join p-6 rounded-lg">
        <p className="wh-body-text">Content with join gradient border</p>
      </div>

      {/* Special animated version */}
      <div className="wh-animated-border-join p-6 rounded-lg bg-wanderheart-midnight-sky">
        <p className="wh-body-text">Content with animated join gradient</p>
      </div>

      <div className="p-6 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 wh-gradient-join opacity-20"></div>
        <p className="relative z-10 wh-body-text">Content with join gradient background overlay</p>
      </div>
    </div>
  )
}
