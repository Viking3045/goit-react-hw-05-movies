import { NavLink } from "react-router-dom";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
export const SharedLayout = () => {
    return (
      <>
       <nav>
        <ul>
          <li>  <NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/movies">Movies</NavLink></li>
        </ul>
      </nav>
       <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      </>
         
  );
};