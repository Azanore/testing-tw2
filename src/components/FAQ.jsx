function FAQ() {
  const faqs = [
    {
      question: "How does DesignFlow integrate with existing design tools?",
      answer: "DesignFlow connects directly with Figma, Sketch, and Adobe XD through official plugins. Changes in your design files automatically sync to your design system, keeping everything up to date."
    },
    {
      question: "Can I export components for multiple platforms?",
      answer: "Yes, DesignFlow generates production-ready code for React, Vue, Angular, React Native, Flutter, iOS (SwiftUI), and Android. All from a single design system source."
    },
    {
      question: "What happens to my data if I cancel my subscription?",
      answer: "You retain full access to export your design systems and generated code. We provide a 30-day grace period to download all your data before account closure."
    },
    {
      question: "How does version control work for design systems?",
      answer: "DesignFlow uses Git-like versioning. You can create branches, merge changes, and roll back to previous versions. Each change is tracked with timestamps and author information."
    },
    {
      question: "Is there a limit on team members or projects?",
      answer: "The Professional plan includes unlimited team members and design systems. The Starter plan is limited to 1 design system and basic features for individual use."
    },
    {
      question: "Do you offer enterprise security features?",
      answer: "Yes, Enterprise plans include SSO, SAML authentication, audit logs, custom security policies, and the option for on-premise deployment."
    }
  ]

  return (
    <section className="px-5 py-16 md:px-8 md:py-24 lg:px-12 bg-wire-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-wire-text-secondary">
            Everything you need to know about DesignFlow and how it works.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-wire-bg border border-wire-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">
                {faq.question}
              </h3>
              <p className="text-wire-text-secondary leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-wire-text-secondary mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="border border-wire-border px-6 py-3 rounded-lg">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ