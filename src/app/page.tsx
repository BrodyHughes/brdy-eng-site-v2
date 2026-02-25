import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen text-white flex flex-col justify-center py-6 pr-6 overflow-hidden relative">
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
        <nav className="absolute top-7 left-2 right-6 flex justify-between items-center z-10">
          <span className="text-5xl font-black tracking-tighter -ml-1">BRDY ENG.</span>
          <div className="flex font-mono text-xs uppercase tracking-widest">
            <a
              href="#about"
              className="px-2 py-1 transition-colors hover:bg-indigo-800"
            >
              About
            </a>
            <a
              href="#work"
              className="px-2 py-1 transition-colors hover:bg-indigo-800"
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
        <h1 className="text-[clamp(3rem,17vw,12rem)] font-black leading-[0.85] uppercase tracking-tighter max-w-full z-10">
          Software
          <br />
          Engineer
        </h1>

        {/* Bottom - tiny tagline */}
        <p className="pl-2 font-mono text-xs uppercase tracking-widest z-10">
          React Native / TypeScript / Performance
        </p>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-white text-black py-6 pr-6 flex flex-col justify-center overflow-hidden"
      >
        <h2 className="text-[clamp(2rem,14vw,11rem)] font-black leading-[0.85] uppercase tracking-tighter">
          About
        </h2>
        <p className="pl-2 font-mono text-xs uppercase max-w-2xl">
          Mobile engineer with 5+ years building high-performance React Native
          apps. Previously at Rainbow, shipping features to hundreds of thousands of users.
          Passionate about smooth animations, clean architecture, and great UX.
        </p>
        <Link
          href="/about"
          className="font-mono text-xs uppercase tracking-widest px-2 py-1 transition-colors hover:bg-indigo-800 inline-block w-fit"
        >
          Read More →
        </Link>
      </section>

      {/* Work Section */}
      <section
        className="min-h-screen bg-black text-white py-6 pr-6 overflow-hidden flex flex-col justify-center"
        id="work"
      >
        <article className="mb-6">
          <Link href="/work/rhystic-buddy">
            <h2 className="text-[clamp(2rem,14vw,11rem)] font-black leading-[0.85] uppercase tracking-tighter transition-colors hover:bg-indigo-800 inline-block">
              Rhystic
              <br />
              Buddy
            </h2>
          </Link>
          <p className="pl-2 font-mono text-xs uppercase tracking-widest">
            React Native / 2024 / MTG Companion App
          </p>
        </article>

        <article className="mb-6">
          <Link href="/work/cadence">
            <h2 className="text-[clamp(2rem,14vw,11rem)] font-black leading-[0.85] uppercase tracking-tighter transition-colors hover:bg-indigo-800 inline-block">
              Cadence
            </h2>
          </Link>
          <p className="pl-2 font-mono text-xs uppercase tracking-widest">
            React Native / 2025 / Habit Tracking App
          </p>
        </article>

        <article>
          <Link href="/work/open-source">
            <h2 className="text-[clamp(2rem,14vw,11rem)] font-black leading-[0.85] uppercase tracking-tighter transition-colors hover:bg-indigo-800 inline-block">
              Open
              <br />
              Source
            </h2>
          </Link>
          <p className="font-mono pl-2 text-xs uppercase tracking-widest">
            Contributions / Web3 / Blockchain
          </p>
        </article>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-white text-black py-6 pr-6 flex flex-col justify-center overflow-hidden"
      >
        <a
          href="mailto:eng@brdy.dev"
          className="text-[clamp(1.5rem,7vw,6rem)] font-black leading-[0.9] transition-colors hover:bg-indigo-800 inline-block w-fit"
        >
          ENG@BRDY.LOL
        </a>
        <div className="flex gap-8 font-mono text-xs uppercase tracking-widest mt-0">
          <a
            href="https://github.com/brodyhughes"
            className="px-2 py-1 transition-colors hover:bg-indigo-800"
          >
          GitHub
          </a>
        </div>
      </section>
    </>
  );
}
