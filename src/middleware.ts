
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n.config'

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocales = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0])
    for (const locale of preferredLocales) {
      if (i18n.locales.includes(locale.split('-')[0] as any)) {
        return locale.split('-')[0]
      }
    }
  }
  return i18n.defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
