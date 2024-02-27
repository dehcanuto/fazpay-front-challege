"use client"

import { SessionProvider } from 'next-auth/react'

const SessionRoot = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <SessionProvider>
          {children}
        </SessionProvider>
    )
}

export default SessionRoot;