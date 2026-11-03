
import type { Metadata } from "next";
import Script from "next/script";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LayoutWrapper from "./components/LayoutWrapper";
import ChatBase from "./components/ChatBase";
import { createPageMetadata } from "./seo";

const firaSans = Fira_Sans({
  weight: "400",
  variable: "--font-fira-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...createPageMetadata(
    "Wellranked | SEO & Digital Marketing Agency UK",
    "Grow your online visibility with SEO and digital marketing services from Wellranked. Improve search rankings, attract relevant traffic and generate more leads.",
    "/",
  ),
  title: {
    default: "Wellranked | SEO & Digital Marketing Agency UK",
    template: "%s",
  },
  metadataBase: new URL("https://wellranked.co.uk"),
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://wellranked.co.uk/#organization",
    name: "Wellranked",
    url: "https://wellranked.co.uk/",
    logo: "https://wellranked.co.uk/icon.png",
    sameAs: [
      "https://www.linkedin.com/company/wellranked-marketing-agency/",
      "https://www.instagram.com/wellrankedmarketing/",
    ],
  };

  return (
    <html
      lang="en"
      className={`${firaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />

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