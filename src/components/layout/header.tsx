
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import type { Locale } from '@/i18n.config'
import LanguageSwitcher from '@/components/language-switcher'
import type { Dictionary } from '@/lib/get-dictionary'

interface HeaderProps {
  lang: Locale
  dictionary: Dictionary['navigation']
}

export function Header({ lang, dictionary }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: `/${lang}`, label: dictionary.home },
    { href: `/${lang}/treatments`, label: dictionary.treatments },
    { href: `/${lang}/doctors`, label: dictionary.doctors },
    { href: `/${lang}/about`, label: dictionary.about },
    { href: `/${lang}/faq`, label: dictionary.faq },
    { href: `/${lang}/contact`, label: dictionary.contact },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-border' : 'bg-transparent',
        isMenuOpen ? 'bg-background' : ''
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-2" aria-label="Homepage">
          <Icons.logo className="h-8 w-8" />
          <span className="font-headline text-xl font-bold text-primary">
            Mentack
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href ? 'text-primary' : 'text-foreground/70'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher lang={lang} />
          <Button asChild>
            <Link href={`/${lang}/contact`}>{dictionary.bookAppointment}</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-lg font-medium transition-colors hover:text-primary',
                  pathname === item.href ? 'text-primary' : 'text-foreground'
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t mt-4">
              <LanguageSwitcher lang={lang} />
              <Button asChild className="flex-1 ml-4">
                <Link href={`/${lang}/contact`}>{dictionary.bookAppointment}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
