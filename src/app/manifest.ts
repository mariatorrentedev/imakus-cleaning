import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Imakus Cleaning Solutions',
    short_name: 'Imakus',
    description: 'Professional commercial cleaning and detailing services for businesses across South Florida to North Carolina. OSHA & EPA compliant.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/images/imakus-logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/images/imakus-logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['business', 'services'],
    lang: 'en-US',
  }
}
