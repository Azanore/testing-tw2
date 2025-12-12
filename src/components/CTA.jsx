function CTA() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12 bg-wire-accent text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to transform your design workflow?
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Join thousands of designers and developers who are building better products with DesignFlow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-wire-accent px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90">
            Start Free Trial
          </button>
          <button className="border border-white/30 px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/10">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA