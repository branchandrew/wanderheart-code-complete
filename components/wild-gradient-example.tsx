export default function WildGradientExample() {
  return (
    <div className="space-y-8 p-8">
      <h2 className="wh-heading-2 wh-gradient-wild-text">Wild Gradient Text</h2>

      <div className="wh-gradient-wild h-24 w-full rounded-lg"></div>

      <button className="wh-button-wild px-6 py-3 rounded-md wh-button-text">Wild Gradient Button</button>

      <div className="wh-border-wild p-6 rounded-lg">
        <p className="wh-body-text">Content with wild gradient border</p>
      </div>

      <div className="p-6 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 wh-gradient-wild opacity-20"></div>
        <p className="relative z-10 wh-body-text">Content with wild gradient background overlay</p>
      </div>
    </div>
  )
}
