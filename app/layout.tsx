import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ClientLayout from "./ClientLayout" // We'll render our Client Component here

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hamshine Electronics & Energy Systems",
  description:
    "Leading provider of solar energy solutions and installations in West Bengal. We offer high-quality solar panels, inverters, and complete solar system installations.",
  keywords:
    "solar energy, solar panels, solar installations, renewable energy, solar power, solar solutions, Kolkata, West Bengal",
  openGraph: {
    title: "Hamshine Electronics & Energy Systems",
    description: "Leading provider of solar energy solutions and installations in West Bengal",
    url: "https://hamshineelectronics.co.in",
    siteName: "Hamshine Electronics & Energy Systems",
    images: [
      {
        url: "https://hamshineelectronics.co.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hamshine Electronics & Energy Systems",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamshine Electronics & Energy Systems",
    description: "Leading provider of solar energy solutions and installations in West Bengal",
    images: ["https://hamshineelectronics.co.in/og-image.jpg"],
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
  verification: {
    google: "verification_token",
    yandex: "verification_token",
    yahoo: "verification_token",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 
          Render the client layout here so all browser-based code 
          (window, document, etc.) stays on the client side.
        */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
