import Link from "next/link";
import Image from "next/image";

export default function RhysticBuddy() {
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
            Rhystic
            <br />
            Buddy
          </h1>

          <p className="font-mono pl-2 text-xs uppercase tracking-widest mt-8">
            React Native / 2024 / MTG Companion App
          </p>

          <p className="text-xs pl-2 leading-relaxed mt-12 max-w-2xl font-mono uppercase">
            A companion app for Magic: The Gathering players. Track life totals,
            manage commander damage, and keep your games running smoothly.
          </p>

          <div className="flex gap-8 font-mono text-xs uppercase tracking-widest mt-12">
            <a
              href="https://apps.apple.com/us/app/rhystic-buddy/id6748365114"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 transition-colors hover:bg-indigo-800 hover:text-white"
            >
              App Store
            </a>
            <a
              href="https://github.com/BrodyHughes/Rhystic_Buddy"
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
      <section className="py-24 overflow-x-auto">
        <div className="flex gap-6 pr-6 pl-2 w-max">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className="relative w-72 h-[620px] flex-shrink-0 bg-black rounded-3xl overflow-hidden"
            >
              <Image
                src={`/work/rhystic-buddy/screenshot-${num}.png`}
                alt={`Rhystic Buddy screenshot ${num}`}
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
