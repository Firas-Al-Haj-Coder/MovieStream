import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2030 <Link to="/" className="hover:underline">Moviestream</Link>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mr-4 hover:underline md:mr-6">Instagram</a>
        </li>
        <li>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="mr-4 hover:underline md:mr-6">YouTube</a>
        </li>
        <li>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        </li>
      </ul>
    </footer>
  );
}