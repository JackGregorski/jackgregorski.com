export default function Navbar() {
  return  (
    <nav className="sticky top-0 z-50 bg-black border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-extrabold animate-text-pulse">
        Jack Gregorski
      </div>
      <ul className="flex gap-6 text-sm text-gray-300">
        <li>
          <a href="#about" className="hover:text-pink-400 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-purple-400 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
