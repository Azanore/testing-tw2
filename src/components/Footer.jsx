function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "Demo", "API Docs"],
    Resources: ["Documentation", "Templates", "Blog", "Community"],
    Company: ["About", "Careers", "Customers", "Contact"],
    Legal: ["Privacy", "Terms", "Security", "Status"]
  }

  return (
    <footer className="px-5 py-12 md:px-8 lg:px-12 bg-wire-surface border-t border-wire-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2 text-sm text-wire-text-secondary">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-wire-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-wire-accent rounded"></div>
            <span className="font-semibold">DesignFlow</span>
          </div>
          <p className="text-sm text-wire-text-secondary">
            © 2024 DesignFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer