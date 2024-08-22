import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/app/components/Footer/page";




const myFont = localFont({


    src: "../public/HousttelySignature-GOonZ.ttf",
  variable: "--font-house",
});

export const metadata: Metadata = {
  title: "Fleet | The Vertical AI For Financial Services ",
  description: "El mejor aliado de los los bancos & Fintechs",
};

export default function RootLayout({
  children,
  }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body data-barba="wrapper">
      <div className="content_container">
        {children}
          <Footer/>
      </div>
      </body>
      </html>
  );
}