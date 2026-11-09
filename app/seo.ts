import type { Metadata } from "next";

export const SITE_URL = "https://wellranked.co.uk";
const SITE_NAME = "Wellranked";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_URL = `${SITE_URL}/icon.png`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
        caption: SITE_NAME,
      },
      image: LOGO_URL,
      description:
        "Wellranked is the outsourced marketing department for UK small businesses, providing SEO, content marketing and social media management.",
      slogan: "The Outsourced Marketing Department for UK Small Businesses",
      email: "hello@wellranked.co.uk",
      telephone: "+442046345657",
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      knowsAbout: [
        "Search Engine Optimisation",
        "Local SEO",
        "Content Marketing",
        "Social Media Marketing",
        "Small Business Marketing",
      ],
      sameAs: [
        "https://www.linkedin.com/company/wellranked-marketing-agency/",
        "https://www.instagram.com/wellrankedmarketing/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: "en-GB",
      publisher: { "@id": ORGANIZATION_ID },
    },
  ],
};

export function createLocalBusinessSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    parentOrganization: { "@id": ORGANIZATION_ID },
    image: LOGO_URL,
    logo: LOGO_URL,
    description:
      "Outsourced marketing department for UK small businesses: SEO, local SEO, content marketing and social media management.",
    telephone: "+442046345657",
    email: "hello@wellranked.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "235 Tonge Moor Road",
      addressLocality: "Bolton",
      addressRegion: "Greater Manchester",
      postalCode: "BL2 2HR",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    sameAs: [
      "https://www.linkedin.com/company/wellranked-marketing-agency/",
      "https://www.instagram.com/wellrankedmarketing/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Outsourced Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO for Small Businesses",
            description:
              "Technical, on-page and local SEO to help UK small businesses improve search visibility.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Content Marketing",
            description:
              "Blog posts, website copy and guides written to attract and convert customers.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Management",
            description:
              "Planning, creating and scheduling social content for small businesses.",
          },
        },
      ],
    },
  };
}

export function createHomePageSchema(title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: title,
        description,
        inLanguage: "en-GB",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORGANIZATION_ID },
      },
      createLocalBusinessSchema(),
    ],
  };
}

export function createBreadcrumbSchema(name: string, pathname: string) {
  const breadcrumbItems = [
    { name: "Home", pathname: "/" },
    { name, pathname },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.pathname, `${SITE_URL}/`).toString(),
    })),
  };
}

export function createPageMetadata(
  title: string,
  description: string,
  pathname: string,
): Metadata {
  const socialImage = `${SITE_URL}/icon.png`;

  return {
    title,
    description,
    keywords: [
      "outsourced marketing department",
      "outsourced marketing for small businesses",
      "small business marketing agency UK",
      "marketing agency for SMEs",
      "fractional marketing team",
      "SEO for small businesses UK",
      "digital marketing services UK",
      "local SEO UK",
      "content marketing for small businesses",
      "social media management UK",
      "Wellranked",
    ],
    alternates: {
      canonical: pathname,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
    openGraph: {
      title,
      description,
      url: pathname,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      images: [{ url: socialImage, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
