function Hero() {
  return (
    <section className="px-5 py-12 md:px-8 md:py-20 lg:px-12 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Design systems that scale with your team
          </h1>
          <p className="text-lg md:text-xl text-wire-text-secondary mb-8 max-w-2xl mx-auto">
            Create, maintain, and distribute design systems across your organization.
            From design tokens to component libraries, everything in one platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-wire-accent text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90">
              Start Building Free
            </button>
            <button className="border border-wire-border px-8 py-4 rounded-lg text-lg font-medium hover:bg-wire-surface">
              Watch Demo
            </button>
          </div>

          {/* Hero Visual Placeholder */}
          <div className="bg-wire-surface border border-wire-border rounded-2xl p-8 md:p-12">
            <div className="aspect-video bg-white border border-wire-border rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-wire-border rounded-lg mx-auto mb-4"></div>
                <p className="text-wire-text-muted">Product Demo Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero