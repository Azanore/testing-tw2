function Header() {
  return (
    <header className="border-b border-wire-border bg-wire-bg sticky top-0 z-50">
      <div className="px-5 py-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-wire-accent rounded"></div>
            <span className="text-xl font-semibold">DesignFlow</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-wire-text-secondary hover:text-wire-text-primary">Features</a>
            <a href="#" className="text-wire-text-secondary hover:text-wire-text-primary">Pricing</a>
            <a href="#" className="text-wire-text-secondary hover:text-wire-text-primary">Resources</a>
            <a href="#" className="text-wire-text-secondary hover:text-wire-text-primary">Company</a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:block text-wire-text-secondary hover:text-wire-text-primary">
              Sign In
            </button>
            <button className="bg-wire-accent text-white px-5 py-2 rounded-lg hover:opacity-90">
              Start Free Trial
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-wire-text-primary"></div>
              <div className="w-full h-0.5 bg-wire-text-primary"></div>
              <div className="w-full h-0.5 bg-wire-text-primary"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header