
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'

import type { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/get-dictionary'
import { treatments, type Treatment } from '@/lib/data'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type Props = {
  params: { slug: string; lang: Locale }
}

export async function generateStaticParams() {
  return treatments.map(treatment => ({
    slug: treatment.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const treatment = treatments.find(t => t.slug === params.slug)
  const dictionary = await getDictionary(params.lang)

  if (!treatment) {
    return {}
  }

  const title = dictionary.metadata.treatment_detail.title.replace(
    '{treatmentName}',
    treatment.title[params.lang]
  )
  const description =
    dictionary.metadata.treatment_detail.description.replace(
      '{treatmentName}',
      treatment.title[params.lang]
    )

  return { title, description }
}

const getImage = (id: string) =>
  PlaceHolderImages.find(img => img.id === id)

export default async function TreatmentDetailPage({ params }: Props) {
  const { lang, slug } = params
  const treatment = treatments.find(
    t => t.slug === slug
  ) as Treatment | undefined
  const dictionary = await getDictionary(lang)
  const pageDict = dictionary.treatment_detail_page

  if (!treatment) {
    notFound()
  }

  const heroImage = getImage(treatment.imagePlaceholder)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] w-full flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative text-white">
          <h1 className="text-4xl font-bold md:text-6xl">
            {treatment.title[lang]}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg opacity-90">
            {treatment.short[lang]}
          </p>
        </div>
      </section>

      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Accordion type="multiple" defaultValue={['item-1', 'item-2', 'item-3', 'item-4']} className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-2xl font-bold">{pageDict.what_it_is}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2">
                  {treatment.sections.what_it_is[lang]}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-2xl font-bold">{pageDict.who_it_is_for}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2">
                   {treatment.sections.who_it_is_for[lang]}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-2xl font-bold">{pageDict.how_it_works}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2">
                   {treatment.sections.how_it_works[lang]}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-2xl font-bold">{pageDict.aftercare}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2">
                   {treatment.sections.aftercare[lang]}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              {/* Timeline */}
              <div className="border rounded-lg p-6 bg-secondary/50">
                <h3 className="text-xl font-bold mb-4">{treatment.timeline.title[lang]}</h3>
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                  {treatment.timeline.steps.map((step, index) => (
                    <li key={index} className="mb-6 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -left-3 ring-8 ring-background text-primary-foreground">
                        {index + 1}
                      </span>
                      <h4 className="font-semibold">{step.name[lang]}</h4>
                      <p className="text-sm text-muted-foreground">{step.description[lang]}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* CTA Box */}
              <div className="border rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold">Ready to start?</h3>
                <p className="mt-2 text-muted-foreground">Request a personalized plan for your {treatment.title[lang]} treatment.</p>
                <Button size="lg" className="w-full mt-6" asChild>
                  <Link href={`/${lang}/contact?treatment=${treatment.slug}`}>{pageDict.cta_button}</Link>
                </Button>
              </div>

              <div className="text-center">
                 <Link href={`/${lang}/treatments`} className="text-sm text-primary hover:underline">
                    &larr; {pageDict.back_link}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
