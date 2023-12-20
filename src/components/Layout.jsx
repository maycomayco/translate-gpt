export default function Layout({ children }) {
  return (
    <main className="bg-slate-900 text-white">
      <div className="container mx-auto grid min-h-screen max-w-prose grid-rows-[60px_1fr_60px] gap-4">
        {children}
      </div>
    </main>
  )
}
