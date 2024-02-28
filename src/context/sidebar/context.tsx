"use client"

import { createContext, ReactElement, useState } from 'react'
import { SidebarContextTypes, SidebarPropTypes } from './types'

export const SidebarContext = createContext<SidebarContextTypes>({
  open: true,
  setOpenState: () => {},
})

export const SidebarContextComponent = ({
  children,
}: SidebarPropTypes): ReactElement => {
  const [open, setOpen] = useState(true)

  const setOpenState = (value: boolean) => {
    setOpen(value)
  }

  return (
    <SidebarContext.Provider value={{ open, setOpenState }}>
      {children}
    </SidebarContext.Provider>
  )
}
