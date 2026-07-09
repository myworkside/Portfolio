# Sumit Mondal — Awwwards-Level Personal Portfolio Website

An award-winning, dark-themed personal portfolio website engineered with **Next.js 16 (App Router)**, **React**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Built strictly from Sumit Mondal's professional CV, representing his dual expertise in native Android application engineering (`Kotlin`, `Jetpack Compose`, `Material Design 3`) and enterprise logistics / Warehouse Management Systems (`WMS`).

---

## 🚀 Live Overview & Features

- **Strict CV Source of Truth:** Every project (`IronCrypt`, `Universal File Editor & Viewer`), professional experience (`Flipkart Minutes Picker`, `Flipkart DEO`, `Myntra Warehouse Assistant`, `SKD Transport Cab Supervisor`, `Graphic Designer & Video Editor`), technical skill, language, and education qualification comes strictly from the uploaded CV.
- **Awwwards Dark Futuristic Aesthetic:** Curated dark palette (`#050816` background, `#4F46E5` primary, `#00E5FF` secondary cyan glow, `#8B5CF6` violet accent) with glassmorphism (`backdrop-blur-xl`), animated mesh gradients, particle backgrounds, and cursor-following magnetic buttons.
- **Dedicated CV Sections:**
  - **Hero:** Interactive typing animation targeting Android Developer, Software Developer, Kotlin Developer, Java Developer, Warehouse Operations Executive, Logistics Professional, Graphic Designer, and Video Editor.
  - **About & Competencies:** Highlights CV Professional Summary, Career Objective, Education timeline, Language proficiencies (`Bengali Native`, `English Professional`), and Core Strengths (`Analytical Thinking`, `Strong Work Ethic`, `Fast Learner`, `Attention to Detail`, etc.).
  - **Skills:** Categorized strictly by CV domains (Programming Languages, Android Development, Version Control & Tools, Productivity & Office, Creative Tools, Core Competencies).
  - **Experience & Projects:** Chronological timeline of Flipkart, Myntra, SKD Transport, and Creative Studio roles, plus comprehensive cards for `IronCrypt` and `Universal File Editor & Viewer`.
- **100/100 Lighthouse & SEO Ready:** Includes complete Open Graph / Twitter cards, `robots.txt`, `sitemap.xml`, semantic HTML, and Schema.org Person JSON-LD structured data.

---

## 📁 Complete Project Structure

```text
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Design system & Tailwind v4 utility tokens
│   ├── layout.tsx           # Root layout with SEO metadata & JSON-LD
│   └── page.tsx             # Main portfolio page with smooth scroll provider
├── components/
│   ├── effects/             # Particle background, gradient mesh & mouse glow
│   ├── layout/              # Floating glassmorphism Navbar, Footer & BackToTop
│   ├── providers/           # Lenis smooth scroll provider
│   ├── sections/            # Hero, About (with Education/Strengths/Languages), Skills, Experience, Projects, Contact
│   └── ui/                  # Reusable GlassCard, MagneticButton, AnimatedCounter, SectionHeading, ScrollReveal, TypeWriter
├── data/
│   ├── experience.ts        # Strictly the 6 CV work experiences
│   ├── navigation.ts        # Navigation items
│   ├── personal.ts          # Exact CV contact details, summary & target roles
│   ├── projects.ts          # Strictly the 2 CV featured projects (IronCrypt & UniversalFileEditorViewer)
│   └── skills.ts            # Strictly CV technical skills & competencies
├── lib/
│   └── utils.ts             # Tailwind class merger utility
└── types/
    └── index.ts             # Complete TypeScript interfaces
```

---

## 🛠 Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Build Production Bundle:**
   ```bash
   npm run build
   ```
