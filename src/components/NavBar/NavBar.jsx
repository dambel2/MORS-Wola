import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import DropdownLink from "./DropdownLink";

        
const NavBar = () => {

  const [open, setOpen] = useState(false)

  //Funkcja do togglowania hamburger menu
  function toggle(){
      setOpen(!open)
  }

  return (
    <div className="">

      <div className="pt-2.5 flex bg-[#37b1e0] lg:px-24 md:px-4  pb-2.5 justify-center text-white">

        <div className="flex md:gap-8 sm:gap-4 gap-2 md:text-lg sm:text-sm text-xs justify-center">
          <div className="flex md:gap-2 gap-1 items-center">
            <FaLocationDot />
            <p>Warszawa, Wola</p>
          </div>
          <div className="flex md:gap-2 gap-1 items-center">
            <FaPhoneVolume />
            <p>22 836 74 04</p>
          </div>
          <div className="flex md:gap-2 gap-1 items-center">
            <MdEmail />
            <p>administracja@morswola.pl</p>
          </div>
        </div>
      </div>

      <div className="2xl:px-64 md:px-32 sm:px-8 px-4 pt-12 flex justify-between items-center gap-24">
        
        <div className="flex gap-20">
        <Link to="/"><img src="/logo-morswola.jpg" className="w-[100px] sm:h-[50px] sm:w-[200px] h-[25px]"/></Link>
        <div className="xl:flex items-center font-semibold text-md gap-4 2xl:gap-8 hidden">
          <NavItem linkToPage={"/"}>Strona Główna</NavItem>
          <NavItem linkToPage={"/kariera"} ><p className="">Kariera</p></NavItem>
        </div>
        </div>
        <div className='xl:hidden flex'>
          <button onClick={toggle}>{open ? <FiX className="w-8 h-8" />: <FiAlignJustify className="w-8 h-8" />}</button>
        </div>
        <a href="#contact"className="hidden px-8 py-2 bg-[#e18a33] font-semibold text-white xl:flex items-center gap-2 hover:shadow-lg hover:shadow-gray-500/50 transition-shadow duration-300">
          Kontakt
          <FaRegArrowAltCircleRight />
        </a>
      </div>
      {open && (
        <div className='flex basis-full flex-col items-center xl:hidden gap-4 pt-8'>
          <NavItem linkToPage={"/"}>Strona Główna</NavItem>
          <NavItem linkToPage={"/kariera"} ><p className="">Kariera</p></NavItem>
        </div>
    )}
    </div>
  )
}

const OnasContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl border-[#e18a33] border-2">
      <div className="mb-3 space-y-3">
        <NavLink to="/onas/ofirmie" className="block text-sm hover:underline">
          O firmie
        </NavLink>
        <NavLink to="/onas/status-przedsiebiorcy" className="block text-sm hover:underline">
          Status przedsiębiorcy
        </NavLink>
        <NavLink to="/onas/ogloszenia" className="block text-sm hover:underline">
          Ogłoszenia spółki MORS Wola
        </NavLink>
      </div>
    </div>
  );
};

const KarieraContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl border-[#e18a33] border-2">
      <div className="mb-3 space-y-3">
        <NavLink to="/kariera/praca" className="block text-sm hover:underline">
          Oferty pracy
        </NavLink>
        <NavLink to="/kariera/rodo-praca" className="block text-sm hover:underline">
          Klauzula RODO dla kandydatów do pracy
        </NavLink>
      </div>
    </div>
  );
};


const NavItem = ({ children, linkToPage }) => {
  return (
    <NavLink to={linkToPage}><p className="text-md font-semibold cursor-pointer group transition-all duration-300 ease-in-out relative"><span 
    className="bg-left-bottom bg-gradient-to-r from-[#e18a33] to-[#e18a33] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-300 ease-out pb-[6px]"
    >{children}</span></p></NavLink>
  )
}



export default NavBar
