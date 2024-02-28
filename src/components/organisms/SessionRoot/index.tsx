"use client"

import { SessionProvider } from 'next-auth/react'
import { SidebarContextComponent } from '@/context/sidebar/context';

const SessionRoot = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <SessionProvider>
          <SidebarContextComponent>
            {children}
          </SidebarContextComponent>
        </SessionProvider>
    )
}

export default SessionRoot;