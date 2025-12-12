function Testimonials() {
  const testimonials = [
    {
      quote: "DesignFlow transformed how our team builds and maintains our design system. We shipped 3x faster after implementing it.",
      author: "Sarah Chen",
      role: "Design Lead",
      company: "TechCorp",
      rating: 5
    },
    {
      quote: "The automated token sync between Figma and our codebase eliminated hours of manual work every week.",
      author: "Marcus Rodriguez",
      role: "Frontend Engineer",
      company: "StartupXYZ",
      rating: 5
    },
    {
      quote: "Finally, a tool that bridges the gap between design and development. Our consistency improved dramatically.",
      author: "Emily Watson",
      role: "Product Manager",
      company: "ScaleUp Inc",
      rating: 5
    }
  ]

  return (
    <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12 bg-wire-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by design teams worldwide
          </h2>
          <p className="text-lg text-wire-text-secondary max-w-2xl mx-auto">
            See what teams are saying about their experience with DesignFlow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-wire-bg border border-wire-border rounded-xl p-6">
              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-wire-accent rounded-sm mr-1"></div>
                ))}
              </div>

              <blockquote className="text-wire-text-primary mb-6">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-wire-border rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-wire-text-secondary">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials