
import Image from 'next/image'
import type { Metadata } from 'next'
import Link from 'next/link'

import type { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/get-dictionary'
import { PlaceHolderImages } from '@/lib/placeholder-images'
import { contactDetails } from '@/lib/data'
import { Icons } from '@/components/icons'
import { AppointmentForm } from '@/components/appointment-form'
import { Button } from '@/components/ui/button'

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dictionary = await getDictionary(lang)
  return {
    title: dictionary.metadata.contact.title,
    description: dictionary.metadata.contact.description,
  }
}

const getImage = (id: string) =>
  PlaceHolderImages.find(img => img.id === id)

export default async function ContactPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const pageDict = dictionary.contact_page
  const commonDict = dictionary.common
  const mapImage = getImage('contact-map')

  const details = [
    {
      icon: Icons.mapPin,
      label: pageDict.details.address,
      value: contactDetails.address,
    },
    {
      icon: Icons.phone,
      label: pageDict.details.phone,
      value: contactDetails.phone,
      href: `tel:${contactDetails.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Icons.clock,
      label: pageDict.details.hours,
      value: `${contactDetails.workingHours} (${pageDict.details.emergency})`,
    },
  ]

  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold md:text-5xl">{pageDict.heading}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{pageDict.subheading}</p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          <div className="bg-secondary/50 p-8 rounded-lg">
             <h2 className="text-2xl font-bold mb-6">{dictionary.navigation.bookAppointment}</h2>
             <AppointmentForm dictionary={pageDict.form} lang={lang} />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">{dictionary.footer.contact_us}</h2>
              <div className="space-y-4">
                {details.map(item => (
                  <div key={item.label} className="flex items-start gap-4">
                    <item.icon className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-bold">{item.label}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground hover:text-primary">{item.value}</a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
             <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full" asChild>
                    <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}>
                        <Icons.phone className="mr-2 h-5 w-5"/>
                        {commonDict.call_now}
                    </a>
                </Button>
                 <Button size="lg" variant="outline" className="w-full" asChild>
                    <a href={contactDetails.whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <Icons.whatsapp className="mr-2 h-5 w-5"/>
                        {commonDict.whatsapp_chat}
                    </a>
                </Button>
            </div>
            
             {mapImage && (
              <div className="relative h-64 w-full rounded-lg overflow-hidden border">
                <Image
                  src={mapImage.imageUrl}
                  alt={mapImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={mapImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
