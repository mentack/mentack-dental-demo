
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

import type { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/get-dictionary'
import { treatments } from '@/lib/data'
import { PlaceHolderImages } from '@/lib/placeholder-images'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/icons'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  return {
    title: dictionary.metadata.treatments.title,
    description: dictionary.metadata.treatments.description,
  }
}

const getImage = (id: string) =>
  PlaceHolderImages.find(img => img.id === id)

export default async function TreatmentsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const pageDict = dictionary.treatments_page
  const commonDict = dictionary.common
  const heroImage = getImage('hero-treatments')

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center text-center">
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
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="container relative text-white">
          <h1 className="text-4xl font-bold md:text-6xl">{pageDict.heading}</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            {pageDict.subheading}
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map(treatment => {
              const Icon = Icons[treatment.icon]
              const treatmentImage = getImage(treatment.imagePlaceholder)
              return (
                 <Card key={treatment.slug} className="group flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="relative h-48 w-full">
                        {treatmentImage && <Image src={treatmentImage.imageUrl} alt={treatment.title[lang]} fill className="object-cover" data-ai-hint={treatmentImage.imageHint} />}
                    </div>
                    <CardHeader className="flex-row items-center gap-4">
                       <Icon className="h-8 w-8 text-primary shrink-0" />
                       <CardTitle className="text-xl">{treatment.title[lang]}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                        <p className="mt-2 text-muted-foreground flex-grow">{treatment.short[lang]}</p>
                        <Button className="mt-6 w-full" asChild>
                            <Link href={`/${lang}/treatments/${treatment.slug}`}>
                                {commonDict.view_details}
                            </Link>
                        </Button>
                    </CardContent>
                 </Card>
              )
            })}
          </div>
        </div>
      </section>

       {/* CTA Band */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Not sure which treatment is right for you?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Contact us for a personalized consultation with one of our experts.</p>
          <Button size="lg" className="mt-8" asChild>
            <Link href={`/${lang}/contact`}>{dictionary.navigation.bookAppointment}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
