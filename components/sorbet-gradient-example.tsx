export default function SorbetGradientExample() {
  return (
    <div className="space-y-8 p-8">
      <h2 className="wh-heading-2 wh-gradient-sorbet-text">Sorbet Gradient Text</h2>

      <div className="wh-gradient-sorbet h-24 w-full rounded-lg"></div>

      <button className="wh-button-sorbet px-6 py-3 rounded-md wh-button-text">Sorbet Gradient Button</button>

      <div className="wh-border-sorbet p-6 rounded-lg">
        <p className="wh-body-text">Content with sorbet gradient border</p>
      </div>

      <div className="p-6 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 wh-gradient-sorbet opacity-20"></div>
        <p className="relative z-10 wh-body-text">Content with sorbet gradient background overlay</p>
      </div>
    </div>
  )
}
