import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">
          TypeScript Guide
        </h1>

        <nav className="space-x-6 text-md font-bold">
          <Link href="/">Home</Link>
          <Link href="/concepts">Concepts</Link>
           {/* <Link href="/projects">Projects</Link> */}
        </nav>
      </div>
    </header>
  );
}