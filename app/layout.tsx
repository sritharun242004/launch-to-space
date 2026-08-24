import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://launch-to-space.vercel.app"),
  title: {
    default: "Launch To Space - High-Altitude Balloon Missions | ToSpace",
    template: "%s | Launch To Space",
  },
  description:
    "Launch To Space by ToSpace provides high-altitude balloon missions from India for research payloads, technology demonstrations, education, product marketing and stratospheric content.",
  keywords: [
    "high altitude balloon India",
    "stratosphere mission",
    "near space payload",
    "space marketing India",
    "ToSpace",
    "Launch To Space",
    "Tamil Nadu aerospace",
    "Chennai space startup",
    "Karur aerospace",
  ],
  applicationName: "Launch To Space",
  authors: [{ name: "ToSpace Private Limited", url: "https://launch-to-space.vercel.app" }],
  creator: "ToSpace Private Limited",
  publisher: "ToSpace Private Limited",
  category: "Aerospace services",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Launch To Space",
    title: "Launch To Space - High-Altitude Balloon Missions from India",
    description:
      "Affordable access to 30-35 km for research, technology demonstrations, education, brands and stratospheric content.",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Launch To Space high-altitude balloon mission platform by ToSpace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Launch To Space - High-Altitude Balloon Missions",
    description: "Fly payloads, experiments and brand content to 30-35 km with ToSpace in India.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon",
    apple: "/icon",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Karur, Tamil Nadu, India",
    "geo.position": "10.9601;78.0766",
    ICBM: "10.9601, 78.0766",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Michroma&family=IBM+Plex+Sans:wght@200;300;400;500&family=IBM+Plex+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
