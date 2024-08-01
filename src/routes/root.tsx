import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
     <header>
                 <img src="src\assets\react.svg"></img>
                 <nav>
                      <ul>
                           <li><Link to="/">HOME</Link></li>
                           <li><Link to="/about">ABOUT</Link></li>
                           <li><Link to="/login">LOGIN</Link></li>
                      </ul>
                 </nav>
     </header> 
     <div>
          <div id="detail">
                <Outlet />
          </div>
     </div>
    </>
  );
}