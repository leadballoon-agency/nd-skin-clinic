export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "ND Skin Clinic",
    "alternateName": "ND Skin Clinic Manchester",
    "url": "https://ndskinclinic.co.uk",
    "sameAs": [
      "https://co2laser.co"
    ],
    "logo": "https://co2laser.co/images/logo.png",
    "image": "https://co2laser.co/images/home1.jpg",
    "description": "Professional CO2 laser treatment clinic in Prestwich, Manchester specializing in acne scar treatment, pigmentation removal, stretch marks reduction, and anti-aging treatments.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "245 Bury Old Road",
      "addressLocality": "Prestwich",
      "addressRegion": "Greater Manchester",
      "postalCode": "M25 1JE",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "53.5258",
      "longitude": "-2.2794"
    },
    "telephone": "+44 7476 989450",
    "priceRange": "££",
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-17:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CO2 Laser Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "CO2 Laser Treatment",
            "description": "Professional fractional CO2 laser treatment for skin resurfacing"
          },
          "price": "450",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "CO2 Laser with PRP",
            "description": "CO2 laser treatment enhanced with PRP therapy"
          },
          "price": "500",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "PRP For Free Deal",
            "description": "Two CO2 laser sessions with FREE PRP enhancement"
          },
          "price": "700",
          "priceCurrency": "GBP",
          "validThrough": "2025-12-31"
        }
      ]
    },
    "medicalSpecialty": [
      "Dermatology",
      "Aesthetic Medicine",
      "Laser Therapy"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "CO2 Laser Skin Resurfacing",
        "description": "Fractional CO2 laser treatment for acne scars, wrinkles, and skin rejuvenation"
      },
      {
        "@type": "MedicalProcedure",
        "name": "PRP Therapy",
        "description": "Platelet Rich Plasma therapy for enhanced healing and skin regeneration"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Acne Scar Treatment",
        "description": "Specialized CO2 laser treatment for acne scar reduction"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Pigmentation Treatment",
        "description": "Laser treatment for sun damage and pigmentation removal"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Stretch Mark Reduction",
        "description": "CO2 laser treatment for stretch mark improvement"
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ND Skin Clinic CO2 Laser",
    "alternateName": "CO2 Laser Manchester",
    "url": "https://co2laser.co",
    "description": "Professional CO2 laser treatment for acne scars, pigmentation, stretch marks & wrinkles in Manchester",
    "publisher": {
      "@type": "Organization",
      "name": "ND Skin Clinic"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://co2laser.co/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CO2 Laser Treatment Manchester",
    "description": "Professional fractional CO2 laser treatment for acne scars, pigmentation, stretch marks, and wrinkles",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "ND Skin Clinic",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "245 Bury Old Road",
        "addressLocality": "Prestwich",
        "addressRegion": "Greater Manchester",
        "postalCode": "M25 1JE",
        "addressCountry": "GB"
      },
      "telephone": "+44 7476 989450"
    },
    "areaServed": [
      "Manchester",
      "Prestwich",
      "Bury",
      "Salford",
      "Bolton",
      "Oldham",
      "Rochdale",
      "Greater Manchester"
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://co2laser.co",
      "serviceSmsNumber": "+44 7476 989450"
    },
    "category": "Medical Treatment",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CO2 Laser Treatment Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Single CO2 Laser Session",
          "price": "450",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "name": "CO2 Laser with PRP Enhancement",
          "price": "500",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "name": "PRP For Free Deal - 2 Sessions",
          "price": "700",
          "priceCurrency": "GBP",
          "description": "Save £300 - Two CO2 laser sessions with FREE PRP enhancement"
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}