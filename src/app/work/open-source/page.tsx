import Link from "next/link";

export default function OpenSource() {
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

      {/* Page content */}
      <section className="py-6 pr-6">
        <div className="max-w-4xl">
          <h1 className="text-[clamp(2rem,12vw,8rem)] font-black leading-[0.85] uppercase tracking-tighter">
            Open
            <br />
            Source
          </h1>

          <p className="font-mono pl-2 text-xs uppercase tracking-widest mt-2">
            Contributions to the community
          </p>
        </div>
      </section>

      {/* Contributions */}
      <section className="py-6 pr-6 pt-12">
        <article className="mb-12">
          <a
            href="https://github.com/rainbow-me/rainbow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-[clamp(1.5rem,8vw,6rem)] font-black leading-[0.85] uppercase tracking-tighter transition-colors hover:bg-indigo-800 inline-block">
              Rainbow
              <br />
              Wallet
            </h2>
          </a>
          <p className="font-mono pl-2 text-xs uppercase tracking-widest mt-2">
            React Native / Ethereum Wallet / 2M+ Users
          </p>
          <p className="text-xs pl-2 leading-relaxed mt-2 max-w-2xl font-mono uppercase">
            A fun, simple, and secure way to manage your Ethereum assets and
            explore web3.
          </p>
        </article>

        <article>
          <a
            href="https://github.com/rainbow-me/browser-extension"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-[clamp(1.5rem,8vw,6rem)] font-black leading-[0.85] uppercase tracking-tighter transition-colors hover:bg-indigo-800 inline-block">
              Rainbow
              <br />
              Extension
            </h2>
          </a>
          <p className="font-mono pl-2 text-xs uppercase tracking-widest mt-2">
            TypeScript / Browser Extension / Chrome & Firefox
          </p>
          <p className="text-xs pl-2 leading-relaxed mt-2 max-w-2xl font-mono uppercase">
            The Rainbow experience, now in your browser. Connect to dapps and
            manage your wallet seamlessly.
          </p>
        </article>
      </section>
    </div>
  );
}
