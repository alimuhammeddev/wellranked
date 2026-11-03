import type { Metadata } from "next";

export function createPageMetadata(
  title: string,
  description: string,
  pathname: string,
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url: pathname,
      siteName: "Wellranked",
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
