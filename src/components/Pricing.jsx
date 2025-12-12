function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for individuals and small projects",
      features: ["1 design system", "Basic components", "Community support", "Export to 2 platforms"]
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "For growing teams and multiple projects",
      features: ["Unlimited design systems", "Advanced components", "Priority support", "All platform exports", "Team collaboration", "Version history"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with custom needs",
      features: ["Everything in Professional", "SSO & advanced security", "Custom integrations", "Dedicated support", "SLA guarantee"]
    }
  ]

  return (
    <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-wire-text-secondary max-w-2xl mx-auto">
            Start free and scale as your team grows. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`border rounded-xl p-8 ${plan.popular ? 'border-wire-accent bg-wire-bg shadow-lg' : 'border-wire-border'}`}>
              {plan.popular && (
                <div className="bg-wire-accent text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-wire-text-secondary">{plan.period}</span>}
              </div>
              <p className="text-wire-text-secondary mb-6">{plan.description}</p>
              <button className={`w-full py-3 rounded-lg font-medium mb-6 ${plan.popular ? 'bg-wire-accent text-white' : 'border border-wire-border hover:bg-wire-surface'}`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm">
                    <div className="w-4 h-4 bg-wire-accent rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing