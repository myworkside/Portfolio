import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/myworkside"),
  title: "Sumit Mondal | Android Application Developer & Warehouse Operations Specialist",
  description:
    "Portfolio of Sumit Mondal — Results-driven professional with experience in Android application development, warehouse operations, logistics, transportation management, and data processing.",
  keywords: [
    "Sumit Mondal",
    "Android Application Developer",
    "Kotlin",
    "Java",
    "Warehouse Operations",
    "Logistics",
    "Warehouse Management Systems",
    "WMS",
    "IronCrypt",
    "Universal File Editor & Viewer",
  ],
  authors: [{ name: "Sumit Mondal", url: "https://linkedin.com/in/sumitwork" }],
  creator: "Sumit Mondal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/myworkside",
    siteName: "Sumit Mondal — Portfolio",
    title: "Sumit Mondal | Android Application Developer & Warehouse Operations Specialist",
    description:
      "Results-driven professional with experience in Android application development, warehouse operations, logistics, transportation management, and data processing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sumit Mondal Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Mondal | Android Application Developer & Warehouse Operations Specialist",
    description:
      "Results-driven professional with experience in Android application development, warehouse operations, logistics, transportation management, and data processing.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#050816" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sumit Mondal",
              jobTitle: "Android Application Developer & Warehouse Operations Specialist",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Itachuna, Hooghly",
                addressRegion: "West Bengal",
                addressCountry: "India",
              },
              telephone: "+91 7432838409",
              email: "mondalsumit6966@gmail.com",
              url: "https://github.com/myworkside",
              sameAs: [
                "https://github.com/myworkside",
                "https://linkedin.com/in/sumitwork",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text font-sans overflow-x-hidden">
        {/* Skip to content for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
