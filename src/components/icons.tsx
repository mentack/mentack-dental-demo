
import type { SVGProps } from 'react'
import {
  ShieldCheck,
  Cpu,
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Smile,
  Baby,
  Syringe,
  Wand2,
} from 'lucide-react'

export const Icons = {
  implant: (props: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22v-4" />
      <path d="M10 18h4" />
      <path d="M10 14h4" />
      <path d="M8 2h8l1 5-3 4-3-2-3 2-3-4z" />
    </svg>
  ), // clean dental shape
  whitening: (props: SVGProps<SVGSVGElement>) => <Sparkles {...props} />, // shining effect
  orthodontics: (props: SVGProps<SVGSVGElement>) => <Smile {...props} />, // aligned smile
  cosmetic: (props: SVGProps<SVGSVGElement>) => <Wand2 {...props} />, // makeover wand
  pediatric: (props: SVGProps<SVGSVGElement>) => <Baby {...props} />, // child-friendly
  rootcanal: (props: SVGProps<SVGSVGElement>) => <Syringe {...props} />, // treatment tool
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128Z"
        fill="hsl(var(--primary))"
      />
      <path
        d="M81.6552 90.6206C76.9655 94.2758 70.8965 96.5517 64.3448 96.5517C50.8276 96.5517 40 85.7241 40 72.2069C40 58.6896 50.8276 47.862 64.3448 47.862C70.8965 47.862 76.9655 50.1379 81.6552 53.7931"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="8"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M60.1379 31.4482L85.931 72.2068L60.1379 112.965"
        stroke="hsl(var(--primary-foreground))"
        strokeWidth="8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  shield: ShieldCheck,
  cpu: Cpu,
  heart: Heart,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  linkedin: Linkedin,
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
  clock: Clock,
  whatsapp: (props: SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path d="m16 2a14 14 0 0 0 -14 14a14 14 0 0 0 14 14a14.004 14.004 0 0 0 8.71-3.07l3.21 1.28a1 1 0 0 0 1.27-1.27l-1.28-3.21a14.004 14.004 0 0 0 3.07-8.71a14 14 0 0 0 -14-14zm0 2a12 12 0 0 1 12 12a12.003 12.003 0 0 1 -7.47 11.12a1 1 0 0 0 -.53.91v.11l.85 2.14l-2.14-.85h-.11a1 1 0 0 0 -.91.53a12.003 12.003 0 0 1 -11.12-7.47a12 12 0 0 1 11.31-16.36zm-4.5 7.41a1.5 1.5 0 0 0 -1.5 1.5v.18a5.5 5.5 0 0 0 2.22 4.38a7.51 7.51 0 0 0 5.22 2.09h.06a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0 -1.5-1.5h-.06a4.5 4.5 0 0 1 -3.13-1.25a2.5 2.5 0 0 1 -.81-1.82v-.18a1.5 1.5 0 0 0 -1.5-1.5z" />
    </svg>
  ),
}

export type IconKey = keyof typeof Icons
