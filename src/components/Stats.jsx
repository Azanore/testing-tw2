function Stats() {
  const stats = [
    { number: "50,000+", label: "Active Users" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "500+", label: "Enterprise Customers" },
    { number: "2M+", label: "Components Generated" }
  ]

  return (
    <section className="px-5 py-12 md:px-8 md:py-16 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold text-wire-accent mb-2">
                {stat.number}
              </div>
              <div className="text-wire-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats