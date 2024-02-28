"use client"

import { useContext, useState } from "react";
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import Link from "next/link"
import { HiMenuAlt2, HiOutlineBell, HiSearch } from "react-icons/hi";

import { formatUserName } from "@/misc/formatters";
import { SidebarContext } from "@/context/sidebar/context";

const TopHeader = () => {
  const { push } = useRouter();
  const { setOpenState } = useContext(SidebarContext);
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
        push('/')
    },
  })

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-primary">
      <div className="flex items-center">
        <button onClick={() => setOpenState(true)} className="text-gray-500 focus:outline-none lg:hidden">
          <HiMenuAlt2 className="text-gray-500 text-2xl" />
        </button>
        <div className="relative mx-4 lg:mx-0">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <HiSearch className="text-gray-500 text-xl" />
          </span>
          <input className="w-32 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-indigo-600" type="text" placeholder="Buscar produto" />
        </div>
      </div>
      <div className="flex items-center">
        <button className="flex mx-4 text-gray-600 focus:outline-none">
          <HiOutlineBell className="text-gray-500 text-2xl" />
        </button>
        <div className="relative">
          <button onClick={() => setOpenSettings(!openSettings)} className="relative block w-8 h-8 bg-primary-100 overflow-hidden rounded-full focus:outline-none">
            {session && formatUserName(session.user.name)}
          </button>
          {openSettings && (
            <>
              <span onClick={() => setOpenSettings(false)} className="fixed inset-0 z-10 w-full h-full" />
              <div className="absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl">
                <Link href="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">
                  Meu Perfil
                </Link>
                <button type="button" onClick={() => signOut()} className="flex px-4 py-2 w-full text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">
                  Sair
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default TopHeader;