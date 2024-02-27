export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-h-fit min-h-screen bg-black">
      <main>
        {children}
      </main>
    </div>
  )
}
