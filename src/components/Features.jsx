function Features() {
  const features = [
    {
      title: "Design Tokens",
      description: "Centralize colors, typography, spacing, and more. Sync across design tools and code automatically."
    },
    {
      title: "Component Library",
      description: "Build reusable components with variants, states, and comprehensive documentation."
    },
    {
      title: "Version Control",
      description: "Track changes, manage releases, and collaborate with your team using Git-like workflows."
    },
    {
      title: "Multi-Platform Export",
      description: "Generate code for React, Vue, Angular, iOS, Android, and more from a single source."
    },
    {
      title: "Design Tool Sync",
      description: "Keep Figma, Sketch, and Adobe XD libraries in perfect sync with your code components."
    },
    {
      title: "Documentation Hub",
      description: "Auto-generated docs with live examples, usage guidelines, and interactive playground."
    }
  ]

  return (
    <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to build design systems
          </h2>
          <p className="text-lg text-wire-text-secondary max-w-2xl mx-auto">
            From design tokens to documentation, our platform provides all the tools
            your team needs to create and maintain consistent design systems.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border border-wire-border rounded-xl p-6 hover:shadow-sm transition-shadow">
              <div className="w-12 h-12 bg-wire-surface border border-wire-border rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-wire-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features