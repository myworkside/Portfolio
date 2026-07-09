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

export const metadata: Metadata = {
  metadataBase: new URL("https://sumitmondal.dev"),
  title: "Sumit Mondal | Android Developer & Software Engineer",
  description:
    "Portfolio of Sumit Mondal — Android Developer & Software Engineer specializing in Kotlin, Jetpack Compose, and full-stack development. Building exceptional mobile experiences with modern technologies.",
  keywords: [
    "Sumit Mondal",
    "Android Developer",
    "Software Engineer",
    "Kotlin",
    "Jetpack Compose",
    "Full Stack Developer",
    "Portfolio",
    "Mobile App Developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Sumit Mondal" }],
  creator: "Sumit Mondal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sumitmondal.dev",
    siteName: "Sumit Mondal — Portfolio",
    title: "Sumit Mondal | Android Developer & Software Engineer",
    description:
      "Building exceptional mobile experiences with modern Android technologies. Explore my projects, skills, and professional journey.",
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
    title: "Sumit Mondal | Android Developer & Software Engineer",
    description:
      "Building exceptional mobile experiences with modern Android technologies.",
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
