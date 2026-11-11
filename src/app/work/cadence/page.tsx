import Image from "next/image";
import SubpageNav from "../../components/SubpageNav";

export default function Cadence() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav backHref="/#work" />

      {/* Project content */}
      <section className="pt-24 pb-6 px-4 md:px-6 flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-title font-bold -ml-[0.06em]">Cadence</h1>
          <p className="font-mono text-label uppercase">
            React Native / 2025 / Habit Tracking App
          </p>
        </div>

        <p className="text-lead max-w-3xl">
          A beautiful habit tracker with a modern glassmorphic interface.
          Create calendars for each habit, track streaks, and visualize your
          progress. All data stays local on your device.
        </p>

        <div className="flex gap-6 font-mono text-label uppercase">
          <a
            href="https://github.com/BrodyHughes/cadence"
            target="_blank"
            rel="noopener noreferrer"
            className="-ml-2 px-2 py-1 transition-colors hover:bg-indigo-800 hover:text-white"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12 overflow-x-auto">
        <div className="flex gap-6 px-4 md:px-6 w-max">
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
