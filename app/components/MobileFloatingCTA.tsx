'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileFloatingCTA() {
  const pathname = usePathname()

  if (pathname === '/kontakt') return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div
        className="px-4 pb-5 pt-10"
        style={{
          background:
            'linear-gradient(to top, #FDFAF6 60%, rgba(253,250,246,0.85) 80%, transparent)',
        }}
      >
        <Link
          href="/kontakt"
          className="block w-full text-center py-4 rounded-full font-semibold text-sm shadow-md transition-all duration-200 active:scale-[0.98]"
          style={{
            backgroundColor: '#2C3E35',
            color: '#FDFAF6',
            fontFamily: 'var(--font-dm-sans)',
            letterSpacing: '0.03em',
          }}
        >
          Zapytaj o termin
        </Link>
      </div>
    </div>
  )
}
