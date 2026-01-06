
'use client'

import { usePathname, useRouter } from 'next/navigation'
import type { Locale } from '@/i18n.config'
import { Button } from '@/components/ui/button'

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const router = useRouter()
  const pathName = usePathname()

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const toggleLanguage = () => {
    const newLocale = lang === 'en' ? 'tr' : 'en'
    if (typeof window !== 'undefined') {
      localStorage.setItem('mentack-lang', newLocale)
    }
    router.push(redirectedPathName(newLocale))
  }

  return (
    <Button variant="ghost" size="sm" onClick={toggleLanguage}>
      {lang === 'en' ? 'TR' : 'EN'}
      <span className="sr-only">Change language</span>
    </Button>
  )
}
