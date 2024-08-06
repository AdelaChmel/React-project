import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>      
     <nav className="navbar bg-base-100">
          <div className="navbar-start">
               <img src="src\assets\react.svg"></img>
               <Link to="/" className="ml-3">Company</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
               <li><Link to="/">HOME</Link></li>
               <li><Link to="/about">ABOUT</Link></li>
               <li>
               <details>
                    <summary><Link to="/">Drop down</Link></summary>
                    <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                    </ul>
               </details>
               </li>
               <li><Link to="/login">LOGIN</Link></li>
          </ul>
          </div>
          <div className="navbar-end">
               <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                         <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h8m-8 6h16" />
                         </svg>
                    </div>
                    <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/">Drop down</Link>
                         <ul className="p-2">
                              <li><a>Submenu 1</a></li>
                              <li><a>Submenu 2</a></li>
                         </ul>
                    </li>
                    <li><Link to="/login">LOGIN</Link></li>
                    </ul>
               </div>
          </div>
     </nav>
     <main id="detail">
          <Outlet />
     </main>
     <footer className="footer footer-center bg-base-300 text-base-content p-4">
          <aside>
               <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
          </aside>
     </footer>
    </>
  );
}