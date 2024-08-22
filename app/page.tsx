
import "./globals.css";
import SearchPage from "@/app/components/Search/page";
import Header from "@/app/components/Header/page";
import Services from "@/app/components/Services/page";
import Plataforma from "@/app/components/Plataforma/page";

import Beneficios from "./components/Beneficios/page";
import Hiring from "./components/Hiring/page";
import Seguridad from "./components/Seguridad/page";
import Module from "./components/Module/page";
import Navbar from "@/app/components/Navbar/page";





export default function Home(){
  return (

    <div>
       <Navbar/>
          <Header/>
<SearchPage/>
<Services/>
<Plataforma/>
<Module/> 
<Beneficios/> 
<Seguridad/> 
<Hiring/> 


    </div>

  


  )
}

  