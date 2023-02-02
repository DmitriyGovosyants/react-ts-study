import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <div style={{padding: 30, display: 'flex', flexDirection: 'column'}}>
        <div style={{ marginBottom: 30 }} >
          <NavLink style={{ padding: 10, border: '4px solid red'}} to={'/'}>Home</NavLink>
        </div>
        <h2>
          Ulbi TV
        </h2>
        <div>
          <NavLink style={{padding: 10, border: '4px solid red', marginRight: 10}} to={'/ulbi-tv/events'}>Events</NavLink>
          <NavLink style={{padding: 10, border: '4px solid red', marginRight: 10}} to={'/ulbi-tv/users'}>Users</NavLink>
          <NavLink style={{padding: 10, border: '4px solid red'}} to={'/ulbi-tv/todos'}>Todos</NavLink>
        </div>
        <h2>
          webDev
        </h2>
        <div>
          <NavLink style={{ padding: 10, border: '4px solid red', marginRight: 10 }} to={'/webdev/base1'}>Base 1</NavLink>
          <NavLink style={{ padding: 10, border: '4px solid red', marginRight: 10 }} to={'/webdev/base2'}>Base 2</NavLink>
          <NavLink style={{ padding: 10, border: '4px solid red', marginRight: 10 }} to={'/webdev/function'}>Function</NavLink>
          <NavLink style={{ padding: 10, border: '4px solid red', marginRight: 10 }} to={'/webdev/object'}>Object</NavLink>
          <NavLink style={{ padding: 10, border: '4px solid red', marginRight: 10 }} to={'/webdev/class'}>Class</NavLink>
          <NavLink style={{ padding: 10, border: '4px solid red', marginRight: 10 }} to={'/webdev/generic'}>Generic</NavLink>
          <NavLink style={{padding: 10, border: '4px solid red', marginRight: 10}} to={'/webdev/utility'}>Utility</NavLink>
        </div>
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