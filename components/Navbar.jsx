'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { useUser } from '@/context/UserContext'
import { useFavorite } from '@/context/FavoriteContext'

export default function Navbar () {
  const pathname = usePathname()
  //nambahin sapaan
  const { name, submitted } = useUser()
  const { favorites } = useFavorite()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/users', label: 'Users' },
    { href: '/services', label: 'Services' },
    { href: '/profile', label: 'Profile' },
    { href: '/contact', label: 'Contact' },
    { href: '/favorite', label: `Favorit (${favorites.length})` } 
  ]


  return (
    <header className='sticky top-4 z-50 mx-auto w-full max-w-4xl px-4'>
      <nav className='flex items-center justify-between gap-4 rounded-full border border-white/10 bg-foreground/20 px-4 py-2 shadow-lg shadow-black/20 backdrop-blur-xl'>
        <Link href='/' className='shrink-0 text-sm font-bold tracking-tight'>
          MyWebsite
        </Link>

        <div className='hidden items-center gap-1 text-sm text-muted-foreground sm:flex'>
          {links.map(link => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname?.startsWith(link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-3 py-1.5 transition-colors hover:text-foreground',
                  isActive && 'bg-foreground/10 text-foreground'
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
        {/* //Menampilkan sapaan */}
        <div className='flex items-center gap-4 text-sm text-muted-foreground'>
          {submitted && <span>Hi, <span className="font-semibold text-foreground">{name}</span> 👋</span>}
        </div>
        <Link
          href='/contact'
          className={cn(buttonVariants({ size: 'sm' }), 'rounded-full')}
        >
          Get in touch
        </Link>
      </nav>
    </header>
  )
}
