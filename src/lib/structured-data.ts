export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Imakus Cleaning Solutions",
  "image": "https://www.imakuscleaning.com/og-image.png",
  "@id": "https://www.imakuscleaning.com",
  "url": "https://www.imakuscleaning.com",
  "telephone": "786-571-7725",
  "email": "steam@imakus.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Miami",
    "addressRegion": "FL",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.7617,
    "longitude": -80.1918
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.linkedin.com/in/imakussteamsolutions/"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Miami"
    },
    {
      "@type": "City",
      "name": "Fort Lauderdale"
    },
    {
      "@type": "City",
      "name": "West Palm Beach"
    },
    {
      "@type": "City",
      "name": "Tampa"
    },
    {
      "@type": "City",
      "name": "Orlando"
    },
    {
      "@type": "City",
      "name": "Jacksonville"
    },
    {
      "@type": "City",
      "name": "Savannah"
    },
    {
      "@type": "City",
      "name": "Charleston"
    },
    {
      "@type": "City",
      "name": "Charlotte"
    },
    {
      "@type": "City",
      "name": "Raleigh"
    }
  ],
  "serviceType": [
    "Commercial Cleaning",
    "Kitchen Detailing",
    "Floor Maintenance",
    "Window Cleaning",
    "Escalator Detailing",
    "High Altitude Cleaning",
    "Industrial Vacuum Services"
  ]
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Imakus Cleaning Solutions",
  "url": "https://www.imakuscleaning.com",
  "logo": "https://www.imakuscleaning.com/images/imakus-logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "786-571-7725",
    "contactType": "customer service",
    "email": "steam@imakus.com",
    "availableLanguage": ["English", "Spanish"]
  }
});
