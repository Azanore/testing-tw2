function SocialProof() {
  return (
    <section className="px-5 py-8 md:px-8 lg:px-12 bg-wire-surface">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-wire-text-muted mb-8">Trusted by design teams at</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-8 bg-wire-border rounded flex items-center justify-center">
              <span className="text-xs text-wire-text-muted">Logo {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof