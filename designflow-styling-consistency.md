# DesignFlow - Styling Consistency Documentation

## Content Type Groupings for Consistent Styling

Based on the content analysis, here are the groups that should share consistent styling patterns:

---

## 1. SECTION HEADLINES (H2) - Primary Hierarchy
**Consistent Styling Group**

### Content Items:
- "Everything you need to build design systems" (Features)
- "How it works" (Process)
- "Loved by design teams worldwide" (Testimonials)
- "Enterprise-grade security & compliance" (Security)
- "Simple, transparent pricing" (Pricing)
- "Frequently asked questions" (FAQ)
- "Ready to transform your design workflow?" (CTA)

### Tailwind Implementation:
```html
<h2 class="text-3xl md:text-4xl font-bold mb-4 text-center text-primary-950">
  Section Headline
</h2>
```
- **Classes:** `text-3xl md:text-4xl font-bold mb-4 text-center text-primary-950`
- **Responsive:** Scales from 3xl to 4xl on medium screens
- **Spacing:** 4 units bottom margin (1rem)
- **Alignment:** Center-aligned for all sections

---

## 2. SECTION SUBTITLES - Secondary Hierarchy
**Consistent Styling Group**

### Content Items:
- Hero subtitle (value proposition explanation)
- Features subtitle (platform explanation)
- How It Works subtitle (speed emphasis)
- Testimonials subtitle (customer feedback intro)
- Security subtitle (data protection assurance)
- Pricing subtitle (transparent pricing model)
- FAQ subtitle (comprehensive information)
- CTA subtitle (social proof + action)

### Tailwind Implementation:
```html
<p class="text-lg text-primary-600 max-w-2xl mx-auto text-center mb-8">
  Section subtitle content
</p>
```
- **Classes:** `text-lg text-primary-600 max-w-2xl mx-auto text-center mb-8`
- **Typography:** Large text with secondary color
- **Container:** Max width 2xl (42rem) with auto margins
- **Spacing:** 8 units bottom margin (2rem)
- **Alignment:** Center-aligned text

---

## 3. FEATURE TITLES (H3) - Tertiary Hierarchy
**Consistent Styling Group**

### Content Items:
- "Design Tokens", "Component Library", "Version Control" (Features)
- "Import Your Designs", "Generate Components", "Ship & Maintain" (Process)
- Security feature titles (6 items)
- "Compliance & Certifications" (Security subsection)

### Tailwind Implementation:
```html
<!-- Features Context -->
<h3 class="text-xl font-semibold mb-3 text-primary-950">Feature Title</h3>

<!-- Process Context -->
<h3 class="text-xl font-semibold mb-4 text-primary-950">Process Step</h3>

<!-- Security Context -->
<h3 class="text-lg font-semibold mb-2 text-primary-950">Security Feature</h3>
```
- **Features:** `text-xl font-semibold mb-3 text-primary-950`
- **Process:** `text-xl font-semibold mb-4 text-primary-950`
- **Security:** `text-lg font-semibold mb-2 text-primary-950` (smaller for density)
- **Color:** Primary text color (950 shade)
- **Spacing:** Context-appropriate bottom margins

---

## 4. BODY TEXT - Content Descriptions
**Consistent Styling Group**

### Content Items:
- Feature descriptions (6 detailed explanations)
- Process step descriptions (3 explanations)
- Security feature descriptions
- Plan descriptions in pricing
- FAQ answers

### Tailwind Implementation:
```html
<!-- General Body Text -->
<p class="text-primary-600 leading-normal">Description content</p>

<!-- FAQ Answers -->
<p class="text-primary-600 leading-relaxed">FAQ answer content</p>
```
- **General:** `text-primary-600 leading-normal`
- **FAQ Answers:** `text-primary-600 leading-relaxed`
- **Color:** Secondary text color (600 shade)
- **Line Height:** Normal for general, relaxed for FAQ
- **Spacing:** Inherits from parent elements

---

## 5. PRIMARY CTA BUTTONS
**Consistent Styling Group**

### Content Items:
- "Start Free Trial" (appears in Header, Hero, CTA, Mobile menu)
- "Get Started" (Pricing cards - Starter, Professional)

### Tailwind Implementation:
```html
<!-- Header Context -->
<button class="btn btn-primary btn-sm">Start Free Trial</button>

<!-- Hero Context -->
<button class="btn btn-primary btn-lg">Start Free Trial</button>

<!-- Manual Implementation -->
<button class="bg-accent-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-accent-700 transition-colors">
  Start Free Trial
</button>
```
- **Component Class:** `btn btn-primary` with size variants
- **Manual Classes:** `bg-accent-600 text-white rounded-lg font-medium hover:bg-accent-700 transition-colors`
- **Sizes:** `btn-sm` (header), `btn-lg` (hero), `btn-md` (default)
- **States:** Hover and focus states included in component

---

## 6. SECONDARY CTA BUTTONS
**Consistent Styling Group**

### Content Items:
- "Watch Demo" (Hero)
- "Schedule Demo" (CTA)
- "Contact Support" (FAQ)
- Pricing card buttons (non-popular plans)

### Tailwind Implementation:
```html
<!-- Component Class -->
<button class="btn btn-outline btn-lg">Watch Demo</button>

<!-- Manual Implementation -->
<button class="border border-surface-300 text-accent-600 px-8 py-4 rounded-lg font-medium hover:bg-accent-50 transition-colors">
  Watch Demo
</button>
```
- **Component Class:** `btn btn-outline` with size variants
- **Manual Classes:** `border border-surface-300 text-accent-600 rounded-lg font-medium hover:bg-accent-50 transition-colors`
- **Sizes:** Match primary CTA context (`btn-sm`, `btn-lg`, etc.)
- **States:** Hover and focus states included in component

---

## 7. NAVIGATION LINKS
**Consistent Styling Group**

### Content Items:
- Header navigation: "Features", "Pricing", "Demo", "Docs"
- Mobile menu navigation (same items)
- Footer navigation (all categories and links)

### Styling Requirements:
- **Header:** text-wire-text-secondary
- **Mobile:** text-wire-text-primary (larger, more prominent)
- **Footer:** text-sm text-wire-text-secondary (smaller, less prominent)
- **Footer Categories:** font-semibold (hierarchy distinction)

---

## 8. TRUST INDICATORS & STATISTICS
**Consistent Styling Group**

### Content Items:
- Hero trust indicators: "50,000+ active users", "4.9/5 rating", "SOC 2 certified"
- Stats section numbers: "50,000+", "99.9%", "500+", "2M+"
- Stats labels: "Active Users", "Uptime SLA", etc.

### Styling Requirements:
- **Hero Indicators:** text-sm text-wire-text-secondary with accent dot icons
- **Stats Numbers:** text-3xl md:text-4xl font-bold text-wire-accent
- **Stats Labels:** text-wire-text-secondary
- **Icons:** Consistent accent color circles/dots

---

## 9. SOCIAL PROOF ELEMENTS
**Consistent Styling Group**

### Content Items:
- Company names: "Spotify", "Airbnb", "Shopify", "Stripe", "Notion", "Linear"
- Testimonial quotes (3 customer quotes)
- Customer attribution (names, roles, companies)
- Compliance badges: "SOC 2 Type II", "GDPR", etc.

### Styling Requirements:
- **Company Names:** text-xs text-wire-text-muted font-medium
- **Testimonial Quotes:** blockquote styling, text-wire-text-primary
- **Customer Names:** font-semibold
- **Customer Roles:** text-sm text-wire-text-secondary
- **Compliance Badges:** text-xs text-wire-text-secondary font-medium

---

## 10. PRICING CONTENT
**Consistent Styling Group**

### Content Items:
- Plan names: "Starter", "Professional", "Enterprise"
- Pricing: "$29", "Free", "Custom"
- Pricing periods: "/month", "/year"
- Feature lists (bullets + text)
- Savings indicators: "Save $58", "Save 20%"

### Styling Requirements:
- **Plan Names:** text-xl font-semibold mb-2
- **Pricing:** text-3xl font-bold
- **Periods:** text-wire-text-secondary
- **Features:** text-sm with accent bullet points
- **Savings:** text-sm text-wire-accent (accent color for emphasis)

---

## EXCEPTIONS - UNIQUE STYLING ELEMENTS

### 1. Brand Identity
- **"DesignFlow"** - Always font-semibold, consistent across all contexts
- **Logo placeholder** - Always w-8 h-8 bg-wire-accent rounded (header) / w-6 h-6 (footer)

### 2. CTA Section (Inverted Theme)
- **Background:** bg-wire-accent text-white
- **Text:** White text on accent background
- **Buttons:** Inverted styling (bg-white text-wire-accent)
- **Opacity:** text-lg opacity-90 for subtitle

### 3. Popular Pricing Card
- **Border:** border-wire-accent (instead of border-wire-border)
- **Background:** bg-wire-bg shadow-lg
- **Badge:** "Most Popular" with bg-wire-accent text-white
- **Button:** bg-wire-accent text-white (instead of border style)

### 4. Process Step Numbers
- **Styling:** w-16 h-16 bg-wire-accent text-white rounded-full
- **Typography:** text-xl font-bold
- **Content:** "01", "02", "03"

### 5. Testimonial Rating Stars
- **Visual:** 5 accent squares per testimonial (w-5 h-5 bg-wire-accent rounded-sm)
- **Layout:** Horizontal flex with mr-1 spacing

### 6. Mobile Menu Overlay
- **Overlay:** bg-black bg-opacity-50
- **Panel:** Fixed positioning with slide-out behavior
- **Close Button:** Rotated lines forming X

### 7. Billing Toggle Switch
- **Container:** w-12 h-6 bg-wire-border rounded-full
- **Toggle:** w-4 h-4 bg-white rounded-full positioned
- **Labels:** text-wire-text-secondary

### 8. Footer Copyright
- **Styling:** text-sm text-wire-text-secondary
- **Content:** "© 2024 DesignFlow. All rights reserved."

---

## STYLING CONSISTENCY RULES

### Typography Hierarchy
1. **H1 (Hero):** text-4xl md:text-5xl lg:text-6xl font-bold leading-tight
2. **H2 (Sections):** text-3xl md:text-4xl font-bold mb-4
3. **H3 (Features):** text-xl font-semibold mb-3
4. **H3 (Security):** text-lg font-semibold mb-2
5. **Body:** text-wire-text-secondary
6. **Small:** text-sm text-wire-text-secondary

### Color Usage
- **Primary Text:** `text-primary-950` (main headings, important content)
- **Secondary Text:** `text-primary-600` (descriptions, labels, body text)
- **Muted Text:** `text-primary-400` (company names, placeholders, subtle text)
- **Accent:** `text-accent-600` (stats numbers, savings, highlights, links)
- **White Text:** `text-white` (for inverted CTA section only)
- **Success:** `text-success-600` (positive indicators)
- **Warning:** `text-warning-600` (caution indicators)
- **Error:** `text-error-600` (error states, validation)

### Spacing Patterns
- **Section Spacing:** `py-16 md:py-24` (large sections - 4rem/6rem)
- **Compact Spacing:** `py-12 md:py-16` (stats, social proof - 3rem/4rem)
- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (most sections)
- **Text Container:** `max-w-2xl mx-auto` (subtitles - 42rem)
- **Narrow Container:** `max-w-4xl mx-auto` (CTA, FAQ - 56rem)
- **Grid Gaps:** `gap-6 md:gap-8` (1.5rem/2rem)
- **Card Padding:** `p-6 md:p-8` (1.5rem/2rem)

### Component Consistency
```html
<!-- Cards -->
<div class="card p-6 md:p-8">Content</div>
<!-- or manual -->
<div class="bg-surface border border-surface-200 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">Content</div>

<!-- Buttons -->
<button class="btn btn-primary btn-lg">Primary Action</button>
<button class="btn btn-outline btn-lg">Secondary Action</button>

<!-- Icons/Placeholders -->
<div class="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center">Icon</div>

<!-- Grid Layouts -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">Items</div>
```
- **Cards:** `card` component or manual border/shadow classes
- **Buttons:** Component classes with size variants
- **Icons:** `w-12 h-12 bg-accent-600 rounded-lg` (consistent 3rem sizing)
- **Grids:** Responsive with consistent gaps

---

## THEME SYSTEM & ADVANCED FEATURES

### 🌙 Dark Mode Implementation

#### Theme Toggle Setup
```html
<!-- Light Mode (Default) -->
<html>
  <body class="bg-surface text-primary-950">
    <!-- All content uses light theme -->
  </body>
</html>

<!-- Dark Mode -->
<html data-theme="dark">
  <body class="bg-dark-surface text-dark-primary">
    <!-- All content automatically switches to dark theme -->
  </body>
</html>
```

#### Dark Mode Component Examples
```html
<!-- Section with dark mode -->
<section class="py-16 md:py-24 bg-surface dark:bg-dark-surface">
  <h2 class="text-primary-950 dark:text-dark-primary">Section Title</h2>
  <p class="text-primary-600 dark:text-dark-primary opacity-80">Description text</p>
</section>

<!-- Card with dark mode -->
<div class="card dark:bg-dark-surface-elevated dark:border-dark-border">
  <h3 class="text-primary-950 dark:text-dark-primary">Card Title</h3>
</div>

<!-- Button with dark mode -->
<button class="btn btn-secondary dark:bg-dark-surface-elevated dark:text-dark-primary dark:border-dark-border">
  Secondary Action
</button>
```

### 🎭 Animation System

#### Entrance Animations
```html
<!-- Fade in animation -->
<div class="animate-fade-in">Content fades in</div>

<!-- Slide up animation -->
<div class="animate-slide-up">Content slides up</div>

<!-- Scale in animation -->
<div class="animate-scale-in">Content scales in</div>

<!-- Staggered animations -->
<div class="grid grid-cols-3 gap-6">
  <div class="animate-fade-in stagger-1">Item 1 (100ms delay)</div>
  <div class="animate-fade-in stagger-2">Item 2 (200ms delay)</div>
  <div class="animate-fade-in stagger-3">Item 3 (300ms delay)</div>
</div>
```

#### Interactive Transitions
```html
<!-- Smooth hover transitions -->
<button class="transition-all duration-200 ease-out hover:scale-105 hover:shadow-lg">
  Hover me
</button>

<!-- Color transitions -->
<div class="transition-colors duration-300 hover:bg-accent-50 hover:text-accent-700">
  Hover for color change
</div>

<!-- Transform transitions -->
<img class="transition-transform duration-500 hover:scale-110 hover:rotate-2" />
```

### 🎨 Advanced Visual Effects

#### Glass Morphism Effects
```html
<!-- Glass card -->
<div class="glass p-6 rounded-xl">
  <h3 class="text-white font-semibold mb-2">Glass Effect Card</h3>
  <p class="text-white opacity-90">Backdrop blur with transparency</p>
</div>

<!-- Glass navigation -->
<nav class="glass fixed top-0 w-full z-50 p-4">
  <div class="flex items-center justify-between">
    <!-- Navigation content -->
  </div>
</nav>
```

#### Gradient Backgrounds
```html
<!-- Primary gradient -->
<section class="gradient-primary text-white py-16">
  <h2 class="text-4xl font-bold mb-4">Gradient Section</h2>
</section>

<!-- Subtle surface gradient -->
<div class="gradient-surface p-8 rounded-xl">
  <p>Subtle gradient background</p>
</div>
```

### 🔄 Loading & Interactive States

#### Loading Components
```html
<!-- Spinner loading -->
<div class="flex items-center space-x-2">
  <div class="loading-spinner w-5 h-5"></div>
  <span>Loading...</span>
</div>

<!-- Pulse loading skeleton -->
<div class="space-y-3">
  <div class="loading-pulse h-4 w-full"></div>
  <div class="loading-pulse h-4 w-3/4"></div>
  <div class="loading-pulse h-4 w-1/2"></div>
</div>

<!-- Button loading state -->
<button class="btn btn-primary" disabled>
  <div class="loading-spinner w-4 h-4 mr-2"></div>
  Processing...
</button>
```

#### Form Validation States
```html
<!-- Success state -->
<div class="space-y-2">
  <input class="input input-success" value="valid@email.com" />
  <p class="text-success-600 text-sm">Email is valid</p>
</div>

<!-- Error state -->
<div class="space-y-2">
  <input class="input input-error" value="invalid-email" />
  <p class="text-error-600 text-sm">Please enter a valid email</p>
</div>
```

### 📱 Responsive Design Patterns

#### Mobile-First Responsive Typography
```html
<!-- Scales from mobile to desktop -->
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
  Responsive Headline
</h1>

<!-- Responsive spacing -->
<section class="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
  <!-- Content scales with screen size -->
</section>
```

#### Responsive Grid Patterns
```html
<!-- Features grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
  <!-- Responsive grid items -->
</div>

<!-- Testimonials grid -->
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
  <!-- Testimonial cards -->
</div>
```

### ♿ Accessibility Features

#### Focus Management
```html
<!-- Custom focus rings -->
<button class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2">
  Accessible Button
</button>

<!-- Skip navigation -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent-600 text-white px-4 py-2 rounded">
  Skip to main content
</a>
```

#### Screen Reader Support
```html
<!-- Proper semantic structure -->
<main id="main-content">
  <section aria-labelledby="features-heading">
    <h2 id="features-heading">Features</h2>
    <!-- Section content -->
  </section>
</main>

<!-- Loading states for screen readers -->
<div aria-live="polite" aria-busy="true">
  <span class="sr-only">Loading content...</span>
  <div class="loading-spinner w-6 h-6"></div>
</div>
```

### 🎯 Performance Optimizations

#### Reduced Motion Support
```html
<!-- Animations respect user preferences -->
<div class="animate-fade-in motion-reduce:animate-none">
  <!-- Animation disabled if user prefers reduced motion -->
</div>

<!-- Alternative for reduced motion -->
<div class="transition-transform motion-reduce:transition-none hover:scale-105 motion-reduce:hover:scale-100">
  <!-- Transform disabled for reduced motion users -->
</div>
```

#### High Contrast Mode
```html
<!-- Automatically adjusts for high contrast -->
<button class="btn btn-primary contrast-more:border-2 contrast-more:border-black">
  High Contrast Button
</button>
```

---

This consistency framework ensures that similar content types share visual patterns while maintaining clear hierarchy, comprehensive theme support, smooth animations, and full accessibility compliance for professional implementation.