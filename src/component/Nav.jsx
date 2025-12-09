// import { Link, NavLink } from "react-router-dom";

// export default function Nav() {
//   return (
//     <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      
//       {/* Logo */}
//       <Link to="/" className="text-2xl font-bold text-blue-600">
//         DocManager
//       </Link>

//       {/* Links */}
//       <div className="flex gap-8 text-gray-700 font-medium">

//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive
//               ? "text-blue-600 font-semibold"
//               : "hover:text-blue-500"
//           }
//         >
//           Home
//         </NavLink>

//         <NavLink
//           to="/upload"
//           className={({ isActive }) =>
//             isActive
//               ? "text-blue-600 font-semibold"
//               : "hover:text-blue-500"
//           }
//         >
//           Upload
//         </NavLink>

//         <NavLink
//           to="/search"
//           className={({ isActive }) =>
//             isActive
//               ? "text-blue-600 font-semibold"
//               : "hover:text-blue-500"
//           }
//         >
//           Search
//         </NavLink>

//       </div>
//     </nav>
//   );
// }

import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              DocManager
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/upload"
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              Upload
            </NavLink>

            <NavLink
              to="/search"
              className={({ isActive }) =>
                `px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}