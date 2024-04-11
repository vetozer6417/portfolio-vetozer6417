import type { Metadata } from "next";
import { Lato, Fira_Code  } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato'
});

const fira_code = Fira_Code({
  subsets: ['latin'],
  variable: '--font-firacode'
})

export const metadata: Metadata = {
  title: "Theerat Punyasit",
  description: "My Windows 98 Themed portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fira_code.variable} ${lato.variable} flex flex-col min-h-screen`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
