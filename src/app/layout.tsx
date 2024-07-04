import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import local from 'next/font/local';

const lato = local({
  src: [
    {
      path: '../../public/fonts/Lato-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Lato-LightItalic.ttf',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../../public/fonts/Lato-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Lato-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../public/fonts/Lato-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Lato-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
  ],
  variable: '--font-lato'
})

const firaCode = local({
  src: [
    {
      path: '../../public/fonts/FiraCode-VariableFont_wght.ttf', // Adjust the path to match your font file
    }
  ],
  variable: '--font-firacode'
});

export const metadata: Metadata = {
  title: "Theerat Punyasit's portfolio as a Full-Stack Developer",
  description: "I am a highly motivated person with good communication skills. Experienced in doing family’s medium-scale e-commerce business since young. Proficient in English. Can also work remotely & physically, Bangkok based.",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-primary">
      <body className={`${firaCode.variable} ${lato.variable} flex flex-col min-h-screen selection:bg-[#04008a] selection:text-white`}>
        <Header/>
        {children}
        <Analytics/>
        <Footer/>
      </body>
    </html>
  );
}
