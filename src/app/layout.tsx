import type { Metadata, Viewport } from "next";
import { Audiowide, Bebas_Neue, Montserrat } from "next/font/google";
import { profile, siteUrl } from "@/data/profile";
import "./globals.css";

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.positioning,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.positioning,
    type: "website",
    images: [{ url: "/bg/hero.webp", width: 1728, height: 1117, alt: `${profile.name} portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Pk_ige",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0620",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${audiowide.variable} ${bebas.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-space-950 text-white">{children}</body>
    </html>
  );
}
