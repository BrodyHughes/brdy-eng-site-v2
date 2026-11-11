import Image from "next/image";
import SubpageNav from "../components/SubpageNav";

const skills = [
  { title: "Languages", items: "TypeScript / JavaScript (ES6+)" },
  {
    title: "Mobile & Frontend",
    items:
      "React Native CLI / React (16-18) / React Navigation / Reanimated v3 / Gesture Handler / Styled Components",
  },
  {
    title: "State Management",
    items: "Zustand / Redux Toolkit / TanStack Query / AsyncStorage",
  },
  {
    title: "Data & Web3",
    items: "GraphQL / REST APIs / Ethereum & EVM / ERC-20 Tokens",
  },
  {
    title: "Testing & Quality",
    items:
      "Jest / Vitest / Detox / Maestro / React Native Testing Library / ESLint / Prettier",
  },
  {
    title: "DevOps & Release",
    items: "Git / GitHub / GitHub Actions CI/CD / Fastlane (iOS & Android)",
  },
  {
    title: "Tooling",
    items: "VS Code / LLM Prompt Engineering / Figma-to-Code",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav backHref="/" />

      {/* Header */}
      <section className="pt-24 px-4 md:px-6">
        <h1 className="text-title font-bold -ml-[0.06em]">About</h1>
      </section>

      {/* Content */}
      <section className="py-12 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="relative w-35 h-50 flex-shrink-0">
            <Image
              src="/about/profile.png"
              alt="Brody Hughes"
              fill
              className="object-contain object-left-top"
            />
          </div>

          <div className="max-w-3xl flex flex-col gap-6">
            <p className="text-lead">
              Software engineer with 5+ years of experience building
              high-performance React + React Native applications. I specialize
              in creating smooth, 60 FPS experiences that feel native on both
              iOS and Android.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Currently building apps independently at brdy eng. Previously at
              Rainbow Wallet, where I shipped cross-platform features to 30k+
              weekly active users, built CI/CD pipelines that cut release time
              by 70%, and restructured E2E testing to reduce regressions by 50%.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
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
      <section className="pt-12 pb-24 px-4 md:px-6">
        <h2 className="text-title font-bold -ml-[0.06em]">Skills</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {skills.map((skill) => (
            <div key={skill.title} className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-bold tracking-[-0.02em]">
                {skill.title}
              </h3>
              <p className="font-mono text-label uppercase leading-relaxed">
                {skill.items}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
