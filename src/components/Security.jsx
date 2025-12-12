function Security() {
  const securityFeatures = [
    {
      title: "SOC 2 Type II Certified",
      description: "Independently audited security controls and processes"
    },
    {
      title: "Enterprise SSO",
      description: "SAML, OIDC, and Active Directory integration"
    },
    {
      title: "Data Encryption",
      description: "AES-256 encryption at rest and TLS 1.3 in transit"
    },
    {
      title: "GDPR Compliant",
      description: "Full compliance with European data protection regulations"
    },
    {
      title: "Regular Security Audits",
      description: "Quarterly penetration testing and vulnerability assessments"
    },
    {
      title: "99.9% Uptime SLA",
      description: "Guaranteed availability with redundant infrastructure"
    }
  ]

  const trustBadges = [
    "SOC 2 Type II",
    "GDPR",
    "ISO 27001",
    "CCPA",
    "HIPAA Ready"
  ]

  return (
    <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Enterprise-grade security & compliance
          </h2>
          <p className="text-lg text-wire-text-secondary max-w-2xl mx-auto">
            Your design systems and data are protected by industry-leading security measures.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-wire-surface border border-wire-border rounded-xl mx-auto mb-4 flex items-center justify-center">
                <div className="w-8 h-8 bg-wire-accent rounded"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-wire-text-secondary text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-wire-surface border border-wire-border rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-2">Compliance & Certifications</h3>
            <p className="text-wire-text-secondary">
              Trusted by enterprises worldwide with strict security requirements
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-wire-bg border border-wire-border rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-wire-border rounded"></div>
                </div>
                <div className="text-xs text-wire-text-secondary font-medium">{badge}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Security