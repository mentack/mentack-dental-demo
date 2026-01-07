
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { getDictionary } from '@/lib/get-dictionary'
import type { Locale } from '@/i18n.config'

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = lang as Locale
  const dictionary = await getDictionary(locale)

  return (
    <div className="flex min-h-screen flex-col">
      <Header lang={locale} dictionary={dictionary.navigation} />
      <main className="flex-grow">{children}</main>
      <Footer lang={locale} dictionary={dictionary} />
    </div>
  )
}
