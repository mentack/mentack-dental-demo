
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

import type { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/get-dictionary'
import { doctors } from '@/lib/data'
import { PlaceHolderImages } from '@/lib/placeholder-images'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  return {
    title: dictionary.metadata.doctors.title,
    description: dictionary.metadata.doctors.description,
  }
}

const getImage = (id: string) =>
  PlaceHolderImages.find(img => img.id === id)

export default async function DoctorsPage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const pageDict = dictionary.doctors_page
  const heroImage = getImage('hero-doctors')

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

      {/* Doctors Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {doctors.map(doctor => {
              const docImage = getImage(doctor.imagePlaceholder)
              return (
                <Card key={doctor.id} className="flex flex-col overflow-hidden">
                  <CardContent className="p-6 text-center">
                    {docImage && (
                      <Avatar className="h-40 w-40 mx-auto mb-4 border-4 border-primary/20">
                        <AvatarImage
                          src={docImage.imageUrl}
                          alt={doctor.name}
                          data-ai-hint={docImage.imageHint}
                        />
                        <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <h3 className="text-2xl font-bold">{doctor.name}</h3>
                    <p className="text-primary mt-1">{doctor.title[lang]}</p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {doctor.specialties.map(spec => (
                        <Badge key={spec.en} variant="secondary">
                          {spec[lang]}
                        </Badge>
                      ))}
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      {doctor.bio[lang]}
                    </p>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 mt-auto">
                    <Button className="w-full" asChild>
                      <Link href={`/${lang}/contact?doctor=${doctor.id}`}>
                        {pageDict.book_with_doctor}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold md:text-4xl">{pageDict.our_approach_section.heading}</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pageDict.our_approach_section.points.map(point => (
              <div key={point.title} className="p-6 bg-background rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-primary">{point.title}</h3>
                <p className="mt-2 text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
