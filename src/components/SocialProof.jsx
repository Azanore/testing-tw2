function SocialProof() {
  const companies = ["Spotify", "Airbnb", "Shopify", "Stripe", "Notion", "Linear"]

  return (
    <section className="px-5 py-8 md:px-8 lg:px-12 bg-wire-surface">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-wire-text-muted mb-8">Trusted by design teams at</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company, i) => (
            <div key={i} className="h-8 bg-wire-border rounded flex items-center justify-center px-4">
              <span className="text-xs text-wire-text-muted font-medium">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof