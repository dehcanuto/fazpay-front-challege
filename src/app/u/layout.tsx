import { Sidebar, TopHeader } from "@/components/organisms";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex h-screen bg-[#F5F7FB]">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopHeader />
          <main className="relative flex-1 overflow-x-hidden overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
