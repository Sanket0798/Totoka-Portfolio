# Totoko - Premium Appliance Marketplace

A modern, responsive website for Totoko - a personalized appliance buying experience designed around customer needs. Built with React, featuring advanced scroll animations, interactive components, and a professional design system.

## 🚀 Key Features

### 🎯 Core Experience
- **Personalized Shopping**: Expert-guided appliance selection tailored to individual needs
- **Transparent Pricing**: No hidden costs, better deals negotiated for customers
- **Expert Consultation**: Professional guidance throughout the buying journey
- **Seamless Process**: From selection to installation with full support

### 🎨 Advanced Animations & Interactions
- **GSAP Scroll Hijacking**: Immersive full-screen scroll experiences
- **Horizontal Text Animations**: Large-scale text sliding effects
- **3D Carousel Components**: Interactive testimonials and timeline navigation
- **Smooth Scroll**: Lenis-powered smooth scrolling throughout the site
- **Intersection Observers**: Performance-optimized scroll-triggered animations
- **Framer Motion**: Smooth page transitions and micro-interactions

### 📱 Responsive Design
- **Mobile-First Approach**: Optimized for all device sizes
- **Adaptive Animations**: Different animation behaviors for mobile vs desktop
- **Touch-Friendly**: Optimized interactions for mobile devices
- **Progressive Enhancement**: Enhanced features for larger screens

## 🛠️ Tech Stack

### Core Framework
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool with HMR and optimized bundling
- **JavaScript (ES6+)** - Modern JavaScript features

### Styling & Design
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Design System** - Consistent spacing, colors, and typography
- **Responsive Grid** - Mobile-first responsive layouts
- **Custom Fonts** - Magnetik and Space Grotesk typography

### Animation Libraries
- **GSAP 3.12.2** - Professional-grade animations and scroll effects
- **Framer Motion 10.16.4** - React-specific animation library
- **Lenis 1.3.17** - Smooth scroll implementation
- **ScrollTrigger** - GSAP plugin for scroll-based animations

### UI Components & Icons
- **Lucide React** - Modern icon library
- **Tabler Icons** - Additional icon set
- **Custom UI Components** - Reusable component library

### Performance & Optimization
- **Code Splitting** - Automatic bundle optimization
- **Lazy Loading** - On-demand component loading
- **Performance Monitoring** - Built-in performance utilities
- **Error Boundaries** - Graceful error handling

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Quick Start
```bash
# Clone the repository
git clone <repository-url>
cd totoko-appliance-marketplace

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Scripts
```bash
npm run dev      # Start development server with hot reload
npm run build    # Build optimized production bundle
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality
```

## 🏗️ Project Architecture

```
src/
├── components/
│   ├── Features/                    # Feature showcase components
│   │   └── FeaturesGrid.jsx        # Three-column feature grid
│   ├── Hero/                        # Landing section
│   │   └── Hero.jsx                # Main hero with CTA
│   ├── Stats/                       # Statistics section
│   │   └── Stats.jsx               # Animated counters & brand logos
│   ├── Testimonials/               # Customer testimonials
│   │   └── TestimonialsCarousel.jsx # 3D carousel testimonials
│   ├── shared/                     # Reusable components
│   │   ├── BuyingAppliancesSection.jsx  # Horizontal scroll text
│   │   ├── ContactFormPopup.jsx    # Modal contact form
│   │   ├── ErrorBoundary.jsx       # Error handling wrapper
│   │   ├── Footer.jsx              # Site footer
│   │   ├── Header.jsx              # Navigation header
│   │   ├── HoverAccordion.jsx      # Process steps accordion
│   │   ├── ScrollProgress.jsx      # Scroll indicator
│   │   ├── TimelineCarousel.jsx    # Company timeline
│   │   └── WhatsAppButton.jsx      # Floating WhatsApp CTA
│   └── ui/                         # UI components
│       ├── BrandMarquee.jsx        # Animated brand logos
│       ├── resizable-navbar.jsx    # Responsive navigation
│       ├── spinning-text.jsx       # Circular rotating text
│       └── TextRevealCustom.jsx    # Text reveal animations
├── contexts/                       # React contexts
│   └── ContactFormContext.jsx     # Global form state management
├── hooks/                          # Custom React hooks
│   ├── useIntersectionObserver.js # Scroll visibility detection
│   ├── useScrollAnimations.js     # Scroll-based animations
│   └── useSmoothScroll.js         # Smooth scroll implementation
├── assets/                         # Static assets
│   ├── fonts/                     # Custom font files
│   │   └── magnetik-font/         # Magnetik font family
│   ├── Brand_Logos/               # Partner brand logos
│   ├── FeatureGrid/               # Feature section images
│   ├── TimeLine/                  # Timeline section images
│   └── testimonials/              # Customer photos
├── lib/                           # Utility libraries
│   └── utils.js                   # Helper functions
├── styles/                        # Global styles
│   └── index.css                  # Tailwind imports & custom CSS
├── utils/                         # Utility functions
│   └── performance.js             # Performance optimizations
├── App.jsx                        # Main application component
└── main.jsx                       # Application entry point
```

## 🎨 Design System

### Typography Hierarchy
```css
/* Primary Font - Magnetik */
font-family: 'Magnetik', system-ui, sans-serif;
/* Weights: 400, 500, 700 */

/* Secondary Font - Space Grotesk */
font-family: 'Space Grotesk', system-ui, sans-serif;
/* Used for: Technical content, captions */
```

### Color Palette
```css
/* Brand Colors */
--official-text: #211A37;     /* Primary text color */
--divider: #BAAB96;           /* Section dividers */

/* Primary Colors */
--primary-50: #f0f9ff;
--primary-500: #0ea5e9;
--primary-700: #0369a1;

/* Accent Colors */
--accent-400: #fb7185;
--accent-500: #f43f5e;
--accent-600: #e11d48;
```

### Container System
- **Max Width**: 1096px (xl breakpoint)
- **Responsive Padding**: 1rem (mobile) → 2rem (desktop)
- **Breakpoints**: 640px, 768px, 1024px, 1096px

### Animation Principles
- **Smooth Transitions**: 300-500ms duration
- **Easing**: Custom cubic-bezier curves
- **Performance**: GPU-accelerated transforms
- **Accessibility**: Respects prefers-reduced-motion

## 🎭 Key Sections & Components

### 1. Hero Section
- **Purpose**: First impression with clear value proposition
- **Features**: Gradient background, appliance imagery, dual CTAs
- **Animation**: Fade-in transitions, floating elements

### 2. Stats Section
- **Purpose**: Build credibility with social proof
- **Features**: Animated counters, rotating circular text, brand logos
- **Data**: 4.9★ Google Reviews, 10K+ customers, ₹8,500 avg savings

### 3. Scroll Hijacking Section (NEW)
- **Purpose**: Immersive brand messaging experience
- **Features**: Full-screen scroll control, progressive panel reveals
- **Technology**: GSAP ScrollTrigger with pinning

### 4. Features Grid
- **Purpose**: Highlight core service benefits
- **Layout**: Three-column responsive grid
- **Features**: 
  - Personalized Recommendations
  - Expert-Assisted Decisions
  - Better Deals, Negotiated For You

### 5. Buying Appliances Section
- **Purpose**: Dynamic visual transition element
- **Technology**: GSAP horizontal scroll animation
- **Behavior**: Large text slides across screen during scroll
- **Responsive**: Different animations for mobile vs desktop

### 6. Process Accordion
- **Purpose**: Explain service methodology
- **Interaction**: Expandable cards with hover effects
- **Content**: Four-step process explanation

### 7. Text Reveal Section
- **Purpose**: Detailed value proposition
- **Animation**: Progressive text reveal on scroll
- **Content**: Personalized experience messaging

### 8. Timeline Carousel
- **Purpose**: Company history and evolution
- **Features**: Interactive timeline (2011-2025)
- **Navigation**: Slide controls with year indicators

### 9. Testimonials Carousel
- **Purpose**: Customer social proof
- **Technology**: 3D carousel with smooth transitions
- **Features**: Customer photos, ratings, detailed reviews

## ⚡ Performance Optimizations

### Bundle Optimization
```javascript
// vite.config.js - Manual chunks for better caching
manualChunks: {
  animations: ['gsap', 'framer-motion', 'lenis']
}
```

### Code Splitting
- **Animation Libraries**: Separate chunk for GSAP/Framer Motion
- **Component Lazy Loading**: On-demand component imports
- **Route-Based Splitting**: Future-ready for multi-page expansion

### Runtime Performance
- **Intersection Observer**: Efficient scroll detection
- **RAF Throttling**: Smooth 60fps animations
- **Memory Management**: Proper cleanup of event listeners
- **Image Optimization**: Responsive images with proper formats

### Core Web Vitals Targets
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **FCP**: < 1.8s (First Contentful Paint)

## 📱 Responsive Behavior

### Mobile (< 768px)
- **Navigation**: Hamburger menu with slide-out drawer
- **Animations**: Simplified, performance-optimized
- **Text Sizing**: Scaled typography for readability
- **Touch Targets**: Minimum 44px for accessibility

### Tablet (768px - 1024px)
- **Layout**: Balanced grid systems
- **Navigation**: Horizontal menu with dropdowns
- **Animations**: Full feature set with optimizations

### Desktop (> 1024px)
- **Layout**: Full 1096px container width
- **Animations**: Complete GSAP scroll hijacking
- **Interactions**: Hover effects and advanced transitions
- **Typography**: Large-scale text treatments

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy with automatic optimizations
vercel --prod
```

### Build Configuration
```javascript
// Automatic optimizations included:
- Code splitting
- Asset compression
- Cache headers
- Image optimization
- Bundle analysis
```

### Environment Variables
```bash
# Create .env.local for local development
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

## 🔧 Configuration Files

### `tailwind.config.js`
- Custom design system tokens
- Component-specific utilities
- Animation keyframes
- Responsive breakpoints

### `vite.config.js`
- Build optimizations
- Path aliases (@/ for src/)
- Development server configuration
- Bundle splitting strategy

### `vercel.json`
- Deployment configuration
- Cache headers
- Redirect rules
- Build settings

## 🛡️ Error Handling & Accessibility

### Error Boundaries
- **Component-Level**: Graceful degradation for failed components
- **Global Boundary**: Fallback UI for critical errors
- **Development**: Detailed error information
- **Production**: User-friendly error messages

### Accessibility Features
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels
- **Motion Preferences**: Respects prefers-reduced-motion
- **Color Contrast**: WCAG AA compliant color ratios
- **Focus Management**: Visible focus indicators

## 🧪 Testing & Quality

### Code Quality
```bash
# ESLint configuration
npm run lint

# Recommended extensions:
- React Hooks rules
- React Refresh compatibility
- Import/export validation
```

### Performance Testing
- **Lighthouse**: Regular performance audits
- **Bundle Analyzer**: Monitor bundle size
- **Core Web Vitals**: Real user metrics

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** feature branch (`git checkout -b feature/amazing-feature`)
3. **Follow** coding standards (ESLint + Prettier)
4. **Test** across devices and browsers
5. **Commit** with conventional commits
6. **Push** and create Pull Request

### Coding Standards
- **Components**: PascalCase, single responsibility
- **Hooks**: camelCase with 'use' prefix
- **Files**: Match component names
- **Imports**: Absolute paths with @ alias

## 📊 Browser Support

### Supported Browsers
- **Chrome**: 90+ (Full feature support)
- **Firefox**: 88+ (Full feature support)  
- **Safari**: 14+ (Full feature support)
- **Edge**: 90+ (Full feature support)

### Progressive Enhancement
- **Core Features**: Work in all browsers
- **Advanced Animations**: Enhanced experience in modern browsers
- **Fallbacks**: Graceful degradation for older browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GSAP** - Professional animation library enabling scroll hijacking
- **Framer Motion** - React-optimized animation framework
- **Lenis** - Smooth scroll implementation
- **Tailwind CSS** - Utility-first styling approach
- **Vite** - Next-generation build tool
- **React** - Component-based architecture

---

**Built with ❤️ for Totoko**  
*Making appliance buying personal, expert-guided, and stress-free.*

**Live Demo**: [totoko-appliances.vercel.app](https://totoko-appliances.vercel.app)  
**Contact**: [hello@totoko.com](mailto:hello@totoko.com)