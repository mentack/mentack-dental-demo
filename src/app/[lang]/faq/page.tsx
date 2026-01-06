
import type { Metadata } from 'next'

import type { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/get-dictionary'
import { faqs } from '@/lib/data'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dictionary = await getDictionary(lang)
  return {
    title: dictionary.metadata.faq.title,
    description: dictionary.metadata.faq.description,
  }
}

export default async function FaqPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const pageDict = dictionary.faq_page

  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold md:text-5xl">{pageDict.heading}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{pageDict.subheading}</p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map(faq => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-lg text-left font-bold">
                  {faq.question[lang]}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer[lang]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
