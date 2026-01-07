
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Star } from 'lucide-react'

import type { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/get-dictionary'
import { treatments, doctors, testimonials } from '@/lib/data'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import clinicBanner from '../../../public/clinicbanner.png'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons, IconKey } from '@/components/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}): Promise<Metadata> {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  return {
    title: dictionary.metadata.home.title,
    description: dictionary.metadata.home.description,
  }
}

const getImage = (id: string) =>
  PlaceHolderImages.find(img => img.id === id)

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const homeDict = dictionary.home_page
  const commonDict = dictionary.common

  const TrustBadge = ({ title, icon }: { title: string; icon: IconKey }) => {
    const Icon = Icons[icon]
    return (
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" />
        <span className="text-sm font-medium">{title}</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] w-full">
        <Image
          src={clinicBanner}
          alt="Clinic banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <div className="container relative flex h-full flex-col items-start justify-end pb-24 text-left text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold md:text-6xl">
              {homeDict.hero.heading}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              {homeDict.hero.subheading}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href={`/${lang}/contact`}>{homeDict.hero.primary_cta}</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-black" asChild>
                <Link href={`/${lang}/treatments`}>{homeDict.hero.secondary_cta}</Link>
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
              {homeDict.trust_badges.map(badge => (
                <TrustBadge
                  key={badge.title}
                  title={badge.title}
                  icon={badge.icon as IconKey}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold md:text-4xl">
              {homeDict.treatments_section.heading}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {homeDict.treatments_section.subheading}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map(treatment => {
              const Icon = Icons[treatment.icon]
              return (
                <Card key={treatment.slug} className="group flex flex-col overflow-hidden text-center transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <CardTitle className="text-xl">
                      {treatment.title[lang]}
                    </CardTitle>
                    <p className="mt-2 text-muted-foreground flex-grow">
                      {treatment.short[lang]}
                    </p>
                    <Button variant="link" className="mt-4" asChild>
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

      {/* Why Us Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">{homeDict.why_us_section.heading}</h2>
              <p className="mt-4 text-muted-foreground">{homeDict.why_us_section.subheading}</p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {homeDict.why_us_section.points.map(point => (
                  <div key={point.title}>
                    <h3 className="text-lg font-bold">{point.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                <Image src={getImage('why-us-background')?.imageUrl || ''} alt="Dentist working" fill className="object-cover" data-ai-hint="dentist working" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Doctors Section */}
       <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold md:text-4xl">{homeDict.doctors_section.heading}</h2>
            <p className="mt-4 text-muted-foreground">{homeDict.doctors_section.subheading}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
             {doctors.map(doctor => {
                const docImage = getImage(doctor.imagePlaceholder);
                return (
                 <Card key={doctor.id} className="text-center overflow-hidden">
                    <CardContent className="p-6">
                        {docImage &&
                          <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-primary/20">
                            <AvatarImage src={docImage.imageUrl} alt={`Dr. ${doctor.name}`} data-ai-hint={docImage.imageHint} />
                            <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        }
                        <h3 className="text-xl font-bold">{doctor.name}</h3>
                        <p className="text-primary">{doctor.title[lang]}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{doctor.specialties.map(s => s[lang]).join(', ')}</p>
                    </CardContent>
                 </Card>
                );
             })}
          </div>
        </div>
       </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold md:text-4xl">{homeDict.testimonials_section.heading}</h2>
            <p className="mt-4 text-muted-foreground">{homeDict.testimonials_section.subheading}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map(testimonial => {
              const testImage = getImage(testimonial.imagePlaceholder);
              return (
                <Card key={testimonial.id}>
                    <CardContent className="p-6 text-center">
                        {testImage &&
                            <Avatar className="h-20 w-20 mx-auto mb-4">
                                <AvatarImage src={testImage.imageUrl} alt={testimonial.name} data-ai-hint={testImage.imageHint} />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        }
                        <div className="flex justify-center mb-2">
                            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-accent fill-accent" />)}
                        </div>
                        <blockquote className="italic text-muted-foreground">"{testimonial.quote[lang]}"</blockquote>
                        <p className="mt-4 font-bold">{testimonial.name}</p>
                        <p className="text-sm text-primary">{testimonial.treatment[lang]}</p>
                    </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{homeDict.cta_band.heading}</h2>
          <p className="mt-4 max-w-2xl mx-auto opacity-80">{homeDict.cta_band.subheading}</p>
          <Button size="lg" variant="accent" className="mt-8" asChild>
            <Link href={`/${lang}/contact`}>{homeDict.cta_band.cta}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
