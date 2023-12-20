export default function Layout({ children }) {
  return (
    <main className="px-2">
      <div className="container mx-auto grid min-h-screen max-w-prose grid-rows-[60px_1fr_60px] gap-8">
        {children}
      </div>
    </main>
  )
}
