import Link from "next/link";

export default function SubpageNav({ backHref }: { backHref: string }) {
  return (
    <nav className="pt-7 px-4 md:px-6 flex justify-between items-center">
      <Link
        href="/"
        className="text-3xl md:text-5xl font-extrabold tracking-[-0.03em] [-webkit-text-stroke:0.04em_currentColor] ml-[calc(-0.5rem_-_0.04em)] px-2 whitespace-nowrap transition-colors hover:bg-indigo-800 hover:text-white"
      >
        BRDY ENG.
      </Link>
      <Link
        href={backHref}
        className="font-mono text-label uppercase -mr-2 px-2 py-1 transition-colors hover:bg-indigo-800 hover:text-white"
      >
        Back
      </Link>
    </nav>
  );
}
