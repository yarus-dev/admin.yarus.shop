import { Logo } from '@/components/logo';
import { Sidebar } from '@/components/sidebar';
import { Outlet } from 'react-router';
import { NavLink } from "react-router";


export function Layout() {
  return (
    <div className="min-h-screen flex">
      <Sidebar className="flex-none w-50 bg-zinc-100">
        <Sidebar.Header>
          <Logo />
        </Sidebar.Header>
        <NavLink to="/settings" end>
        settings
        </NavLink>
      </Sidebar>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
