
import type { Metadata } from "next";
import Script from "next/script";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LayoutWrapper from "./components/LayoutWrapper";
import ChatBase from "./components/ChatBase";
import JsonLd from "./components/JsonLd";
import { createPageMetadata, organizationSchema, SITE_URL } from "./seo";

const firaSans = Fira_Sans({
  weight: "400",
  variable: "--font-fira-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...createPageMetadata(
    "Outsourced Marketing for UK Small Businesses | Wellranked",
    "Your outsourced marketing department. Expert SEO, content and social media for UK small businesses, without the cost of an in-house team.",
    "/",
  ),
  title: {
    default: "Outsourced Marketing for UK Small Businesses | Wellranked",
    template: "%s",
  },
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/icon.png",
  },
  verification: {
    google: "Dl5DN6rz9GJZpwsohJVoA9G9QDqMBxPVrvv2izXB5is",
    other: {
      "msvalidate.01": "F4C758473410B880B2F29795F3D18614",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${firaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <JsonLd data={organizationSchema} />

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6HKGZV9EW3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-6HKGZV9EW3');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){
                (c[a].q=c[a].q||[]).push(arguments)
              };
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "z0p81mzldw");
          `}
        </Script>

        <LayoutWrapper>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LayoutWrapper>

        <ChatBase />
      </body>
    </html>
  );
}