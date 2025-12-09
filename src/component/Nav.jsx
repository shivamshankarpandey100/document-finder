import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        DocManager
      </Link>

      {/* Links */}
      <div className="flex gap-8 text-gray-700 font-medium">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-500"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/upload"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-500"
          }
        >
          Upload
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-500"
          }
        >
          Search
        </NavLink>

      </div>
    </nav>
  );
}
