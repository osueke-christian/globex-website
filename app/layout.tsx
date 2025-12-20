import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['100','200','300','400','500','600','700','800','900'],
});
import localFont from 'next/font/local';


const interDisplay = localFont({
  src: [
    {
      path: '../fonts/InterDisplay-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/InterDisplay-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/InterDisplay-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/InterDisplay-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter-display',
  display: 'swap'
});


export const metadata: Metadata = {
  title: "Globex website",
  description: "GLOBEX sources and delivers three major product categories globally, which are construction Material/Cementitious and cementitious commodities, Fertilizer and agro-commodities.",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    type: "website",
    title: "Globex Website",
    description: "GLOBEX sources and delivers three major product categories globally, which are construction Material/Cementitious and cementitious commodities, Fertilizer and agro-commodities."
  },
  twitter: {
    card: "summary_large_image",
    title: "Globex  website",
    description: "GLOBEX sources and delivers three major product categories globally, which are construction Material/Cementitious and cementitious commodities, Fertilizer and agro-commodities."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interDisplay.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
