import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <div>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/users'}>Users</NavLink>
        <NavLink to={'/todos'}>Todos</NavLink>
      </div>
      <main>
        <Suspense fallback={<div>Loading.....</div>}>
          <Outlet/>
        </Suspense>
      </main>
    </>
  )
};

export default SharedLayout;