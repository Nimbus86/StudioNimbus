import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-8 py-6 backdrop-blur-md border-b border-cyan-500/20">

      <Link
        to="/"
        className="text-cyan-400 hover:text-cyan-300"
      >
        Home
      </Link>

      <Link
        to="/image-remove"
        className="text-cyan-400 hover:text-cyan-300"
      >
        Image Background Remove
      </Link>

      <Link
        to="/video-remove"
        className="text-cyan-400 hover:text-cyan-300"
      >
        Video Background Remove
      </Link>

    </nav>
  );
}