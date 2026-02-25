# brdy eng. Site v2 - Design Plan

## Project Overview
Personal portfolio site for a software engineer (brdy eng.) specializing in React Native and TypeScript.

## Design Direction: Modern Brutalist

### Core Principles
1. **Typography IS the design** - Massive, viewport-filling text
2. **Pure black & white** - No grays, no accent colors. Maximum contrast
3. **Minimal content** - Say more with less
4. **White space as design element** - Let things breathe
5. **No decorative elements** - No shadows, no borders, no rounded corners

### Visual References
- Heller Design Studio: Giant condensed type filling viewport
- 10011: Massive numbers/letters as primary visual
- Utrecht: Clean white space, simple hierarchy
- On Practices: Experimental, type-forward

---

## Typography System

### Fonts
- **Display**: Waves Signal (in `/public/fonts/`) - ONLY for "brdy eng." logo text
- **Headlines**: Inter or system sans - Heavy weight (800-900), used MASSIVE
- **Body/Labels**: Monospace - Small, uppercase, tracking-wide

### Scale
- Hero text: `15vw` to `25vw` (viewport-filling)
- Section titles: `10vw` to `15vw`
- Body text: `14px-16px`
- Labels: `11px-12px` uppercase monospace

---

## Color Palette

```css
--black: #000000;
--white: #ffffff;
```

That's it. No other colors.

---

## Page Structure

### 1. Hero Section (100vh)
- Full viewport height
- Stacked massive text: "SOFTWARE" / "ENGINEER" or similar
- Logo (brdy-logo.png) small in corner
- Minimal nav: just "Work" and "Contact" links, tiny monospace
- No description text - let the type speak

### 2. Work Section
- White background, black text (or inverted)
- Each project is a GIANT text block:
  ```
  RHYSTIC
  BUDDY
  ```
  With tiny monospace details below: "React Native / 2024 / 5-star reviews"
- Maybe 2 projects max
- Projects stack vertically, each taking significant viewport space

### 3. Contact Section
- Black background, white text
- Email as GIANT text: "hello@brdy.dev" at 10vw+
- Tiny links below: GitHub
- Simple. Direct.

---

## Components Needed

### 1. Layout (`src/app/layout.tsx`)
- Import Inter font (weight 900)
- Set up CSS variables for fonts
- Black background default or white

### 2. Globals (`src/app/globals.css`)
- @font-face for Waves Signal
- Reset styles
- Font utility classes
- No Tailwind theme extensions needed - keep it raw

### 3. Page (`src/app/page.tsx`)
- Three sections: Hero, Work, Contact
- No separate component files needed - keep it simple
- Use Framer Motion sparingly for subtle entrance animations

---

## Specific Styling Notes

### Hero
```jsx
<section className="h-screen bg-white text-black flex flex-col justify-between p-6">
  {/* Top nav */}
  <nav className="flex justify-between items-center">
    <Logo /> {/* Small, 32px */}
    <div className="flex gap-8 font-mono text-xs uppercase tracking-widest">
      <a href="#work">Work</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  {/* Center - MASSIVE type */}
  <h1 className="text-[20vw] font-black leading-[0.85] uppercase tracking-tighter">
    Software<br/>Engineer
  </h1>

  {/* Bottom - tiny tagline */}
  <p className="font-mono text-xs uppercase tracking-widest">
    React Native / TypeScript / Performance
  </p>
</section>
```

### Work
```jsx
<section id="work" className="min-h-screen bg-black text-white p-6">
  <article className="mb-32">
    <h2 className="text-[15vw] font-black leading-[0.85] uppercase tracking-tighter">
      Rhystic<br/>Buddy
    </h2>
    <p className="font-mono text-xs uppercase tracking-widest mt-8">
      React Native / 2024 / MTG Companion App
    </p>
  </article>

  <article>
    <h2 className="text-[15vw] font-black leading-[0.85] uppercase tracking-tighter">
      Rainbow<br/>Wallet
    </h2>
    <p className="font-mono text-xs uppercase tracking-widest mt-8">
      React Native / 2023 / Ethereum Wallet
    </p>
  </article>
</section>
```

### Contact
```jsx
<section id="contact" className="min-h-screen bg-white text-black p-6 flex flex-col justify-center">
  <a href="mailto:eng@brdy.dev" className="text-[8vw] font-black leading-[0.9] hover:opacity-50 transition-opacity">
    ENG@BRDY.DEV
  </a>
  <div className="flex gap-8 font-mono text-xs uppercase tracking-widest mt-12">
    <a href="https://github.com">GitHub</a>
  </div>
</section>
```

---

## Animation (Minimal)

- Page load: Subtle fade-in for hero text (0.5s delay, 0.8s duration)
- Scroll: Optional parallax or reveal for work section
- Hover: Opacity change only (no scale, no movement)
- Keep it subtle - the type is the hero, not the animation

---

## Files to Create/Modify

1. `src/app/globals.css` - Font face, reset, utilities
2. `src/app/layout.tsx` - Font setup, metadata
3. `src/app/page.tsx` - All sections in one file
4. `src/components/Logo.tsx` - Just the logo image

---

## Assets Available

- `/public/brdy-logo.png` - The logo image
- `/public/fonts/WavesSignal-Regular.otf` - Display font
- `/public/fonts/WavesSignal-Regular.ttf` - Display font

---

## Key Reminders

1. **Go bigger** - When in doubt, make the text bigger
2. **Remove, don't add** - If something feels decorative, remove it
3. **Black and white only** - No grays, no colors
4. **Monospace for small text** - Creates nice contrast with massive sans
5. **No rounded corners** - Keep it sharp
6. **No shadows** - Keep it flat
7. **No borders** - Use color blocks instead
