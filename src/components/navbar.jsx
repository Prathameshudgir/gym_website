// import React, { useState } from 'react';



// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-blue-600 shadow-md">
//       <div className="container mx-auto px-4 sm:px-6 lg:">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <img
//               className="h-23 w-32"
//               src="/src/assets/bg.png"
//               alt="Logo"
//             />
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-4">
//             <a
//               to="/"
//               className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Home
//             </a>
//             <a
//               to="/about"
//               className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               About
//             </a>
//             <a
//               to="/service"
//               className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Services
//             </a>
//             <a
//               to="/contact"
//               className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Contact
//             </a>
//             <a
//               to="/membership"
//               className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
//             >
//               Membership
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
//             >
//               <svg
//                 className="h-6 w-6"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden text-center">
//           <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
//             <a
//               to="/"
//               className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Home
//             </a>
//             <a
//               to="/about"
//               className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               About
//             </a>
//             <a
//               to="/service"
//               className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Services
//             </a>
//             <a
//               to="/contact"
//               className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Contact
//             </a>
//             <a
//               to="/membership"
//               className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
//             >
//               Membership
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-23 w-32"
              src="/src/assets/bg.png"
              alt="Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/membership"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              Membership
            </NavLink>

            <NavLink
              to="/login"
              className="text-white px-4 py-2 bg-green-500 rounded-md text-sm font-medium hover:bg-green-600"
            >
              Login
            </NavLink>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-center">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `text-white block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/membership"
              className={({ isActive }) =>
                `text-white block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-700"
                }`
              }
            >
              Membership
            </NavLink>

            <NavLink
              to="/login"
              className="text-white block px-4 py-2 bg-green-500 rounded-md text-base font-medium hover:bg-green-600"
            >
              Login
            </NavLink>


          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
