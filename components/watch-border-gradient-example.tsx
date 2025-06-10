export default function WatchBorderGradientExample() {
  return (
    <div className="space-y-8 p-8">
      <h2 className="wh-heading-2 wh-gradient-watch-border-text">Watch Border Gradient Text</h2>

      <div className="wh-gradient-watch-border h-24 w-full rounded-lg"></div>

      <button className="wh-button-watch-border px-6 py-3 rounded-md wh-button-text">
        Watch Border Gradient Button
      </button>

      <div className="wh-border-watch-border p-6 rounded-lg">
        <p className="wh-body-text">Content with watch border gradient border</p>
      </div>

      {/* Special animated version */}
      <div className="wh-animated-border-watch p-6 rounded-lg bg-wanderheart-midnight-sky">
        <p className="wh-body-text">Content with animated watch border gradient</p>
      </div>

      <div className="p-6 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 wh-gradient-watch-border opacity-20"></div>
        <p className="relative z-10 wh-body-text">Content with watch border gradient background overlay</p>
      </div>
    </div>
  )
}
