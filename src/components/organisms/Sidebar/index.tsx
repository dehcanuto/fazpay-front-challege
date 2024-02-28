"use client"

import { useContext } from "react";
import { LogoLink, NavLink } from "@/components/atoms";
import { SidebarContext } from "@/context/sidebar/context";

const Sidebar = () => {
  const { open, setOpenState } = useContext(SidebarContext);
    return (
      <>
        {open && (
          <>
            <div onClick={() => setOpenState(false)} className="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden" />
            <div className="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0">
              <LogoLink />
              <nav className="mt-10 space-y-3">
                <NavLink url="/u" label="Produtos" />
                <NavLink url="/u" label="Cadastrar" />
              </nav>
            </div>
          </>
        )}
      </>
    )
}

export default Sidebar;