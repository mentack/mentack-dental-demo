
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { getDictionary } from '@/lib/get-dictionary'
import type { Locale } from '@/i18n.config'

export default async function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="flex min-h-screen flex-col">
      <Header lang={lang} dictionary={dictionary.navigation} />
      <main className="flex-grow">{children}</main>
      <Footer lang={lang} dictionary={dictionary} />
    </div>
  )
}
