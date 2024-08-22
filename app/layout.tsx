import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import SearchPage from "@/app/components/Search/page";
import Header from "@/app/components/Header/page";
import Navbar from "@/app/components/Navbar/page";
import Services from "@/app/components/Services/page";
import Plataforma from "@/app/components/Plataforma/page";

import Footer from "@/app/components/Footer/page";
import Beneficios from "./components/Beneficios/page";
import Hiring from "./components/Hiring/page";
import Seguridad from "./components/Seguridad/page";
import Module from "./components/Module/page";





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
          <Navbar/>
          <Header/>
          <SearchPage/>
          <Services/>
          <Plataforma/>
          <Module/> 
          <Beneficios/> 
          <Seguridad/> 
          <Hiring/> 
          <Footer/>
      </div>
      </body>
      </html>
  );
}