import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] }) // use .className directly

export const metadata: Metadata = {
  title: "Bryan Engle — Senior UX & Product Designer",
  description:
    "Portfolio of Bryan Engle: enterprise UX, design systems, and AI-driven product work.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Headlines: Momo Trust Display */}
        <link
          href="https://fonts.googleapis.com/css2?family=Momo+Trust+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* Use inter.className instead of @apply */}
      <body className={`${inter.className} antialiased bg-background text-foreground min-h-dvh`}>
        {children}
      </body>
    </html>
  )
}
