import SubpageNav from "../../components/SubpageNav";

const contributions = [
  {
    href: "https://github.com/rainbow-me/rainbow",
    title: "Rainbow Wallet",
    meta: "React Native / Ethereum Wallet / 2M+ Users",
    description:
      "A fun, simple, and secure way to manage your Ethereum assets and explore web3.",
  },
  {
    href: "https://github.com/rainbow-me/browser-extension",
    title: "Rainbow Extension",
    meta: "TypeScript / Browser Extension / Chrome & Firefox",
    description:
      "The Rainbow experience, now in your browser. Connect to dapps and manage your wallet seamlessly.",
  },
];

export default function OpenSource() {
  return (
    <div className="min-h-screen bg-white text-black">
      <SubpageNav backHref="/#work" />

      {/* Page content */}
      <section className="pt-24 pb-6 px-4 md:px-6 flex flex-col gap-5">
        <h1 className="text-title font-bold -ml-[0.06em]">Open Source</h1>
        <p className="font-mono text-label uppercase">
          Contributions to the community
        </p>
      </section>

      {/* Contributions */}
      <section className="pt-16 pb-24 px-4 md:px-6 flex flex-col gap-16">
        {contributions.map((item) => (
          <article key={item.href} className="flex flex-col gap-5">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[clamp(2rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.035em] font-bold ml-[calc(-0.5rem_-_0.06em)] px-2 w-fit transition-colors hover:bg-indigo-800 hover:text-white"
            >
              {item.title}
            </a>
            <p className="font-mono text-label uppercase">{item.meta}</p>
            <p className="text-lead max-w-3xl">{item.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
