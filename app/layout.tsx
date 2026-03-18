import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-urbanist',
  display: 'swap',
})

const BASE_URL = 'https://xybpohub.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'XyBPO Hub — Sales Operating System for BPO Call Centers',
    template: '%s | XyBPO Hub',
  },

  description:
    'XyBPO Hub is the AI-powered Sales Operating System for BPO call centers worldwide. Track every call, agent, and sale in real time. Subscription sales, lead gen, QA, MIS automation, payment processing — one platform for every market where BPOs operate.',

  keywords: [
    'BPO CRM',
    'call center software',
    'BPO sales platform',
    'sales tracking BPO',
    'subscription sales CRM',
    'lead generation BPO',
    'real-time MIS reporting',
    'agent performance dashboard',
    'BPO automation software',
    'outbound call center CRM',
    'inbound BPO software',
    'verifier upsell system',
    'BPO QA software',
    'call center AI',
    'BPO Philippines',
    'BPO India',
    'BPO call center UK',
    'call center USA',
    'BPO Australia',
    'BPO South Africa',
    'global BPO software',
    'offshore call center platform',
    'XyBPO Hub',
    'Xyvionix',
    'HIPAA BPO software',
    'BPO payment processing',
    'DNC validation software',
    'campaign management BPO',
  ],

  authors: [{ name: 'Xyvionix', url: BASE_URL }],
  creator: 'Xyvionix',
  publisher: 'Xyvionix',
  category: 'Business Software',

  // Open Graph — controls Facebook, LinkedIn, WhatsApp, Slack, Discord, Teams previews
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'XyBPO Hub',
    title: 'XyBPO Hub — The AI-Powered Sales OS for BPO Call Centers',
    description:
      'Go live with new campaigns in minutes. Track every call, agent, and sale in real time. Purpose-built for BPOs worldwide — subscription sales, lead generation, and outbound campaigns across every market.',
    images: [
      {
        url: `${BASE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: 'XyBPO Hub — Sales Operating System for BPO Call Centers',
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: 'summary_large_image',
    site: '@xybpohub',
    creator: '@xybpohub',
    title: 'XyBPO Hub — Sales OS for BPO Call Centers',
    description:
      'AI-powered BPO platform. Real-time dashboards, automated MIS, payment processing, QA, and API integrations — one platform for agents, verifiers, and campaign owners.',
    images: [
      {
        url: `${BASE_URL}/twitter-image.svg`,
        alt: 'XyBPO Hub — Sales OS for BPO Call Centers',
      },
    ],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verification (placeholders — replace with real codes)
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE',
  },

  // Alternate languages / regions
  alternates: {
    canonical: BASE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Xyvionix',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    sameAs: [
      'https://www.linkedin.com/company/xybpohub',
      'https://twitter.com/xybpohub',
      'https://www.facebook.com/xybpohub',
      'https://www.instagram.com/xybpohub',
      'https://www.youtube.com/@xybpohub',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      url: `${BASE_URL}/demo/`,
    },
  }

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'XyBPO Hub',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'AI-powered Sales Operating System for BPO call centers. Tracks agents, campaigns, subscriptions, payments, QA, and MIS in real time. Includes verifier upsell workflows, SIP call routing, live API transfer, and automated batch reporting.',
    url: BASE_URL,
    featureList: [
      'Real-time sales tracking',
      'Verifier upsell workflows',
      'AI-powered QA and call transcription',
      'Automated MIS reporting',
      'Live payment processing',
      'DNC / BIN / CNAM validation',
      'SIP-based call routing',
      'Live API and Webhook integration',
      'Campaign management',
      'Role-based access control',
      'HIPAA-ready infrastructure',
      'Multi-center dashboards',
    ],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Custom enterprise pricing — contact sales',
    },
    provider: {
      '@type': 'Organization',
      name: 'Xyvionix',
      url: BASE_URL,
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'XyBPO Hub',
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="en" className={urbanist.variable}>
      <head>
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

        {/* Social sharing — explicit meta fallbacks */}
        <meta property="og:image:secure_url" content={`${BASE_URL}/og-image.svg`} />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* LinkedIn specific */}
        <meta property="article:author" content="https://www.linkedin.com/company/xybpohub" />

        {/* WhatsApp / iMessage link previews */}
        <meta name="thumbnail" content={`${BASE_URL}/og-image.svg`} />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PQD85RH8');`,
          }}
        />
      </head>
      <body className="font-urbanist bg-warm-white text-navy antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQD85RH8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
