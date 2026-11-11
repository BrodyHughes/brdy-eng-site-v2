import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen text-white flex flex-col justify-center gap-8 px-4 md:px-6 py-6 overflow-hidden relative">
        {/* Background GIF */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/metallic-2.gif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Top nav - absolute positioned */}
        <nav className="absolute top-7 left-4 right-4 md:left-6 md:right-6 flex justify-between items-center z-10">
          <span className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] [-webkit-text-stroke:0.04em_currentColor] -ml-[0.04em] whitespace-nowrap">BRDY ENG.</span>
          <div className="flex -mr-2 font-mono text-label uppercase">
            <a
              href="#about"
              className="hidden md:block px-2 py-1 transition-colors hover:bg-indigo-800"
            >
              About
            </a>
            <a
              href="#work"
              className="hidden md:block px-2 py-1 transition-colors hover:bg-indigo-800"
            >
              Work
            </a>
            <a
              href="#contact"
              className="px-2 py-1 transition-colors hover:bg-indigo-800"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Center - MASSIVE type */}
        <h1 className="text-[clamp(3rem,15vw,12rem)] font-bold leading-[0.9] tracking-[-0.045em] -ml-[0.04em] max-w-full z-10">
          Software
          <br />
          Engineer
        </h1>

        {/* Bottom - tiny tagline */}
        <p className="font-mono text-label uppercase z-10">
          React Native / TypeScript / Performance
        </p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-white text-black py-6 px-4 md:px-6 flex flex-col justify-center gap-8 overflow-hidden"
      >
        <p className="font-mono text-label uppercase">About</p>
        <p className="text-title font-bold -ml-[0.06em] max-w-5xl">
          Mobile engineer building fast, smooth React Native apps.
        </p>
        <p className="text-lead max-w-3xl">
          5+ years shipping high-performance mobile apps. Previously at
          Rainbow, shipping features to hundreds of thousands of users.
          Passionate about smooth animations, clean architecture, and great UX.
        </p>
        <Link
          href="/about"
          className="font-mono text-label uppercase -ml-2 px-2 py-1 transition-colors hover:bg-indigo-800 hover:text-white inline-block w-fit"
        >
          Read More →
        </Link>
      </section>

      {/* Work Section */}
      <section
        className="min-h-screen bg-black text-white py-6 px-4 md:px-6 overflow-hidden flex flex-col justify-center gap-6"
        id="work"
      >
        <p className="font-mono text-label uppercase">Selected Work</p>
        {[
          { href: "/work/rhystic-buddy", title: "Rhystic Buddy", meta: "React Native / 2024 / MTG Companion App" },
          { href: "/work/cadence", title: "Cadence", meta: "React Native / 2025 / Habit Tracking App" },
          { href: "/work/open-source", title: "Open Source", meta: "Contributions / Web3 / Blockchain" },
        ].map((project) => (
          <article key={project.href} className="flex flex-col gap-5">
            <Link
              href={project.href}
              className="text-title font-bold ml-[calc(-0.5rem_-_0.06em)] px-2 transition-colors hover:bg-indigo-800 inline-block w-fit"
            >
              {project.title}
            </Link>
            <p className="font-mono text-label uppercase">{project.meta}</p>
          </article>
        ))}
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-white text-black py-6 px-4 md:px-6 flex flex-col justify-center gap-3 overflow-hidden"
      >
        <p className="font-mono text-label uppercase">Contact</p>
        <a
          href="mailto:eng@brdy.dev"
          className="text-title font-bold ml-[calc(-0.5rem_-_0.06em)] px-2 transition-colors hover:bg-indigo-800 hover:text-white inline-block w-fit"
        >
          eng@brdy.lol
        </a>
        <div className="flex gap-8 font-mono text-label uppercase">
          <a
            href="https://github.com/brodyhughes"
            className="-ml-2 px-2 py-1 transition-colors hover:bg-indigo-800 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </section>
    </>
  );
}
