import { ReactNode } from 'react'

export interface SidebarPropTypes {
  children: ReactNode
}

export type SidebarContextTypes = {
  open: boolean
  setOpenState: (value: boolean) => void
}
