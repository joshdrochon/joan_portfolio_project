import type { Metadata } from "next";
import { Geist, Geist_Mono, Just_Me_Again_Down_Here, Indie_Flower, Cormorant_Garamond, Caveat, Open_Sans, Merriweather, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const justMeAgainDownHere = Just_Me_Again_Down_Here({
  variable: "--font-just-me",
  subsets: ["latin"],
  weight: "400",
});

const indieFlower = Indie_Flower({
  variable: "--font-indie-flower",
  subsets: ["latin"],
  weight: "400",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["700"],
  style: ["italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["700"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300"],
  style: ["italic"],
});

export const metadata: Metadata = {
  title: "Joan Miguel — UX Designer",
  description: "Portfolio of Joan Miguel, UX Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${justMeAgainDownHere.variable} ${indieFlower.variable} ${cormorantGaramond.variable} ${caveat.variable} ${openSans.variable} ${merriweather.variable} ${roboto.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
