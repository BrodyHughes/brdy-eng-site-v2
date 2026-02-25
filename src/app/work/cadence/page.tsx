import Link from "next/link";
import Image from "next/image";

export default function Cadence() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top nav */}
      <nav className="py-6 pl-1 pr-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-5xl font-black tracking-tighter pr-2 py-1 transition-colors hover:bg-indigo-800 hover:text-white"
        >
          BRDY ENG.
        </Link>
        <Link
          href="/#work"
          className="font-mono text-xs uppercase tracking-widest px-2 py-1 transition-colors hover:bg-indigo-800 hover:text-white"
        >
          Back
        </Link>
      </nav>

      {/* Project content */}
      <section className="py-6 pr-6">
        <div className="max-w-4xl">
          <h1 className="text-[clamp(2rem,12vw,8rem)] font-black leading-[0.85] uppercase tracking-tighter">
            Cadence
          </h1>

          <p className="font-mono pl-2 text-xs uppercase tracking-widest mt-2">
            React Native / 2025 / Habit Tracking App
          </p>

          <p className="text-xs pl-2 leading-relaxed mt-2 max-w-2xl font-mono uppercase">
            A beautiful habit tracker with a modern glassmorphic interface.
            Create calendars for each habit, track streaks, and visualize your
            progress. All data stays local on your device.
          </p>

          <div className="flex gap-8 font-mono text-xs uppercase tracking-widest mt-2">
            <a
              href="https://github.com/BrodyHughes/cadence"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 transition-colors hover:bg-indigo-800 hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12 overflow-x-auto">
        <div className="flex gap-6 pr-6 pl-2 w-max">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className="relative w-72 h-[620px] flex-shrink-0 bg-black rounded-3xl overflow-hidden"
            >
              <Image
                src={`/work/cadence/screenshot-${num}.png`}
                alt={`Cadence screenshot ${num}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
