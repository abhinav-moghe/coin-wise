import { type ReactNode } from "react";
import TopNavBar from "../../components/nav-bar/TopNavBar";
import SideNavBar from "../../components/nav-bar/SideNavBar";
import AccountsBar from "../../components/AccountsBar";
import BottomNavBar from "../../components/nav-bar/BottomNavBar";

import './MainLayout.css';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="bg-surface flex h-full flex-col lg:flex-row">
        <TopNavBar />
        <SideNavBar />

        <AccountsBar />

        <main className="mx-auto w-full max-w-5xl grow overflow-y-auto border border-dashed border-red-400 px-3 py-4 lg:px-10">
          {children}
        </main>

        <BottomNavBar />
      </div>
    </>
  );
};
export default MainLayout;