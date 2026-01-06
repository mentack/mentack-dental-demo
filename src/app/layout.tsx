
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: {
    template: '%s | Mentack Dental',
    default: 'Mentack Dental Clinic | Premium Dental Care in Istanbul',
  },
  description:
    'Welcome to Mentack Dental Clinic. We offer a wide range of treatments from dental implants to cosmetic dentistry with a patient-focused approach.',
  openGraph: {
    title: 'Mentack Dental Clinic',
    description:
      'Premium dental care in Istanbul. State-of-the-art technology and expert dentists.',
    url: 'https://mentack-dental-demo.vercel.app', // Replace with your actual domain
    siteName: 'Mentack Dental',
    images: [
      {
        url: 'https://picsum.photos/seed/og-image/1200/630',
        width: 1200,
        height: 630,
        alt: 'Mentack Dental Clinic',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentack Dental Clinic',
    description: 'Premium Dental Care in Istanbul',
    images: ['https://picsum.photos/seed/og-image/1200/630'],
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
