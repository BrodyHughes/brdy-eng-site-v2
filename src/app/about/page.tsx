import Link from "next/link";
import Image from "next/image";

export default function About() {
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
          href="/"
          className="font-mono text-xs uppercase tracking-widest px-2 py-1 transition-colors hover:bg-indigo-800 hover:text-white"
        >
          Back
        </Link>
      </nav>

      {/* Header */}
      <section className="py-0 pr-6">
        <h1 className="text-[clamp(2rem,12vw,8rem)] font-black leading-[0.85] uppercase tracking-tighter">
          About
        </h1>
      </section>

      {/* Content */}
      <section className="py-8 pr-0">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image */}
          <div className="relative w-35 h-50 flex-shrink-0">
            <Image
              src="/about/profile.png"
              alt="Brody Hughes"
              fill
              className="object-contain object-left-top"
            />
          </div>

          {/* Bio */}
          <div className="max-w-2xl">
            <p className="text-xs leading-relaxed font-mono uppercase">
              Software engineer with 5+ years of experience building
              high-performance React + React Native applications. I specialize in
              creating smooth, 60 FPS experiences that feel native on both iOS
              and Android.
            </p>

            <p className="text-xs leading-relaxed font-mono uppercase mt-3">
              Currently building apps independently at brdy eng. Previously at
              Rainbow Wallet, where I shipped cross-platform features to 30k+
              weekly active users, built CI/CD pipelines that cut release time
              by 70%, and restructured E2E testing to reduce regressions by 50%.
            </p>

            <p className="text-xs leading-relaxed font-mono uppercase mt-3">
              I care deeply about performance optimization, clean typed
              architecture, and the small details that make apps feel great.
              When I&apos;m not coding, you&apos;ll find me playing Magic: The
              Gathering (which inspired Rhystic Buddy), climbing in my local 
              rock-climbing gym, or playing video games on my PC.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-0 pr-0">
        <h2 className="text-[clamp(2rem,12vw,8rem)] font-black leading-[0.85] uppercase tracking-tighter">
          Skills
        </h2>

        <div className="mt-8 grid grid-cols-1 pl-2 pb-12 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="font-black text-lg uppercase tracking-tight">
              Languages
            </h3>
            <p className="text-xs leading-relaxed font-mono uppercase mt-2">
              TypeScript / JavaScript (ES6+)
            </p>
          </div>

          <div>
            <h3 className="font-black text-lg uppercase tracking-tight">
              Mobile & Frontend
            </h3>
            <p className="text-xs leading-relaxed font-mono uppercase mt-2">
              React Native CLI / React (16-18) / React Navigation / Reanimated
              v3 / Gesture Handler / Styled Components
            </p>
          </div>

          <div>
            <h3 className="font-black text-lg uppercase tracking-tight">
              State Management
            </h3>
            <p className="text-xs leading-relaxed font-mono uppercase mt-2">
              Zustand / Redux Toolkit / TanStack Query / AsyncStorage
            </p>
          </div>

          <div>
            <h3 className="font-black text-lg uppercase tracking-tight">
              Data & Web3
            </h3>
            <p className="text-xs leading-relaxed font-mono uppercase mt-2">
              GraphQL / REST APIs / Ethereum & EVM / ERC-20 Tokens
            </p>
          </div>

          <div>
            <h3 className="font-black text-lg uppercase tracking-tight">
              Testing & Quality
            </h3>
            <p className="text-xs leading-relaxed font-mono uppercase mt-2">
              Jest / Vitest / Detox / Maestro / React Native Testing Library /
              ESLint / Prettier
            </p>
          </div>

          <div>
            <h3 className="font-black text-lg uppercase tracking-tight">
              DevOps & Release
            </h3>
            <p className="text-xs leading-relaxed font-mono uppercase mt-2">
              Git / GitHub / GitHub Actions CI/CD / Fastlane (iOS & Android)
            </p>
          </div>

          <div>
            <h3 className="font-black text-lg uppercase tracking-tight">
              Tooling
            </h3>
            <p className="text-xs leading-relaxed font-mono uppercase mt-2">
              VS Code / LLM Prompt Engineering / Figma-to-Code
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
