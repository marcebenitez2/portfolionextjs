import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Marcelo Benitez - Fullstack Developer | React, Node.js, Next.js",
  description: "Soy Marcelo Benitez, desarrollador fullstack especializado en React, Node.js, y Next.js. Creo soluciones a medida para web y mobile con un enfoque en rendimiento, escalabilidad y diseño atractivo.",
  keywords: "Fullstack developer, React, Next.js, Node.js, desarrollo web, soluciones a medida, portafolio de desarrollador, SEO, aplicaciones web",
  authors: [{ name: "Marcelo Benitez" }],
  robots: "index, follow",
  openGraph: {
    title: "Marcelo Benitez - Fullstack Developer",
    description: "Portafolio de Marcelo Benitez. Desarrollador fullstack especializado en tecnologías modernas como React y Next.js.",
    type: "website",
    url: "https://tu-dominio.com",
    images: [
      {
        url: "https://tu-dominio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marcelo Benitez - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tuTwitterHandle",
    title: "Marcelo Benitez - Fullstack Developer",
    description: "Descubre mi trabajo como desarrollador fullstack especializado en React, Node.js y Next.js.",
    images: ["https://tu-dominio.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
