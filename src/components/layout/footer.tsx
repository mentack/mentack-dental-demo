
import Link from 'next/link'
import { Icons } from '@/components/icons'
import { contactDetails } from '@/lib/data'
import type { Locale } from '@/i18n.config'
import type { Dictionary } from '@/lib/get-dictionary'

interface FooterProps {
  lang: Locale
  dictionary: Dictionary
}

export function Footer({ lang, dictionary }: FooterProps) {
  const year = new Date().getFullYear()
  const nav = dictionary.navigation
  const common = dictionary.common

  const navItems = [
    { href: `/${lang}/treatments`, label: nav.treatments },
    { href: `/${lang}/doctors`, label: nav.doctors },
    { href: `/${lang}/about`, label: nav.about },
    { href: `/${lang}/faq`, label: nav.faq },
    { href: `/${lang}/contact`, label: nav.contact },
  ]

  const socialLinks = [
    { href: '#', icon: Icons.facebook, label: 'Facebook' },
    { href: '#', icon: Icons.instagram, label: 'Instagram' },
    { href: '#', icon: Icons.twitter, label: 'Twitter' },
    { href: '#', icon: Icons.linkedin, label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href={`/${lang}`} className="flex items-center gap-2">
              <Icons.logo className="h-8 w-8" />
              <span className="font-headline text-xl font-bold text-primary">
                Mentack
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {dictionary.metadata.home.description}
            </p>
          </div>

          <div>
            <h3 className="font-headline font-bold mb-4">{dictionary.footer.quick_links}</h3>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline font-bold mb-4">{dictionary.footer.contact_us}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Icons.mapPin className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{contactDetails.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Icons.phone className="h-5 w-5 shrink-0 text-primary" />
                <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary">
                  {contactDetails.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icons.clock className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{contactDetails.workingHours}</span>
              </li>
            </ul>
          </div>

           <div>
            <h3 className="font-headline font-bold mb-4">{dictionary.footer.social_media}</h3>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {dictionary.footer.copyright.replace('{year}', year.toString())}
          </p>
          <p className="text-xs text-muted-foreground/50 mt-4 md:mt-0">
            This is a demo website. All content is for illustrative purposes.
          </p>
        </div>
      </div>
    </footer>
  )
}
