function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Import Your Designs",
      description: "Connect your Figma files or upload existing design assets. Our AI extracts tokens automatically."
    },
    {
      step: "02",
      title: "Generate Components",
      description: "Transform designs into production-ready components with built-in accessibility and responsive behavior."
    },
    {
      step: "03",
      title: "Ship & Maintain",
      description: "Publish to npm, sync with your codebase, and keep everything updated as your system evolves."
    }
  ]

  return (
    <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12 bg-wire-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How it works
          </h2>
          <p className="text-lg text-wire-text-secondary max-w-2xl mx-auto">
            Get your design system up and running in minutes, not months.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-wire-accent text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-wire-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks