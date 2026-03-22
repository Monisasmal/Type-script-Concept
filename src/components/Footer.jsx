import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t mt-16 py-6 border-b border-gray-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 flex gap-6 flex-wrap">

        {/* Left */}
        <p className="text-gray-600 text-sm">
          © 2026 React Mastery Guide. All rights reserved.
        </p>

        {/* Center Icons */}
        <div className="flex gap-6 text-xl text-gray-600">

          <a
            href="https://github.com/Monisasmal"
            target="_blank"
            className="hover:text-blue-600"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/manaswini-sasmal-b77a21162/"
            target="_blank"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://manaswini-portfolio.vercel.app/"
            target="_blank"
            className="hover:text-blue-600"
          >
            <FaGlobe />
          </a>

        </div>

        {/* Right */}
        <p className="text-gray-600 text-sm">
          Built with ❤️ by Manaswini
        </p>

      </div>
    </footer>
  );
}