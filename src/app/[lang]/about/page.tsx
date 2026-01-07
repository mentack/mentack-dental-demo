
import Image from 'next/image'
import type { Metadata } from 'next'

import type { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/get-dictionary'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  return {
    title: dictionary.metadata.about.title,
    description: dictionary.metadata.about.description,
  }
}

const getImage = (id: string) =>
  PlaceHolderImages.find(img => img.id === id)

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const pageDict = dictionary.about_page
  const heroImage = getImage('hero-about')

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

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{pageDict.story_section.heading}</h2>
          <div className="prose lg:prose-lg mx-auto mt-6 text-muted-foreground">
            <p>{pageDict.story_section.content}</p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold md:text-4xl">{pageDict.facilities_section.heading}</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageDict.facilities_section.cards.map((card, index) => {
                const facilityImage = getImage(['facility-tech', 'facility-comfort', 'facility-sterilization'][index]);
                return (
                    <Card key={card.title} className="overflow-hidden">
                        {facilityImage &&
                        <div className="relative h-48 w-full">
                            <Image src={facilityImage.imageUrl} alt={card.title} fill className="object-cover" data-ai-hint={facilityImage.imageHint} />
                        </div>
                        }
                        <CardHeader>
                            <CardTitle>{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">{card.description}</p>
                        </CardContent>
                    </Card>
                )
            })}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold md:text-4xl">{pageDict.values_section.heading}</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pageDict.values_section.cards.map(card => (
              <div key={card.title} className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold">{card.title}</h3>
                  <p className="mt-1 text-muted-foreground">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
