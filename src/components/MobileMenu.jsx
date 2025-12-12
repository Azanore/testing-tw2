function MobileMenu() {
  return (
    <div className="md:hidden hidden">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

      {/* Menu Panel */}
      <div className="fixed top-0 right-0 w-80 h-full bg-wire-bg border-l border-wire-border z-50">
        <div className="p-5">
          {/* Close Button */}
          <div className="flex justify-end mb-8">
            <button className="w-8 h-8 flex items-center justify-center">
              <div className="w-6 h-0.5 bg-wire-text-primary transform rotate-45 absolute"></div>
              <div className="w-6 h-0.5 bg-wire-text-primary transform -rotate-45 absolute"></div>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-6">
            <a href="#" className="block text-lg text-wire-text-primary">Features</a>
            <a href="#" className="block text-lg text-wire-text-primary">Pricing</a>
            <a href="#" className="block text-lg text-wire-text-primary">Demo</a>
            <a href="#" className="block text-lg text-wire-text-primary">Docs</a>
          </nav>

          {/* CTA Buttons */}
          <div className="mt-8 space-y-4">
            <button className="w-full text-wire-text-secondary py-3">
              Sign In
            </button>
            <button className="w-full bg-wire-accent text-white py-3 rounded-lg">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu