import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div 
    className='relative h-[1200px] lg:h-[800px]'
    style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
    <div className='relative h-[calc(100vh+1200px)] lg:h-[calc(100vh+800px)] -top-[100vh]'>
        <div className='h-[1200px] lg:h-[800px] sticky top-[calc(100vh-800px)]'>
          <div className='bg-[#e18a33] py-8 px-12 h-full w-full flex flex-col justify-between'>
            <div>
              <div className='lg:flex lg:flex-row grid grid-rows-3 grid-flow-col shrink-0 gap-20'>
              <div className='flex flex-col gap-2'>
                  <h3 className='mb-2 uppercase text-[#ffffff80]'>Nawigacja</h3>
                  <p className="cursor-pointer hover:text-gray-700">Strona Główna</p>
                  <p className="cursor-pointer hover:text-gray-700">O nas</p>
                  <p className="cursor-pointer hover:text-gray-700">Oferta</p>
                  <p className="cursor-pointer hover:text-gray-700">Bezpieczeństwo</p>
                  <p className="cursor-pointer hover:text-gray-700">Praca</p>
                  <p className="cursor-pointer hover:text-gray-700">Kontakt</p>
              </div>
              <div className='flex flex-col gap-2'>
                  <h3 className='mb-2 uppercase text-[#ffffff80]'>Informacje</h3>
                  <p><span className="font-semibold">Lokalizacja:</span> Warszawa, Wola</p>
                  <p><span className="font-semibold">Telefon:</span> +48 123 456 789</p>
                  <p><span className="font-semibold">Email:</span> mors@wola.pl</p>
              </div>
              <div className='flex flex-col gap-2'>
                  <h3 className='mb-2 uppercase text-[#ffffff80]'>O Nas</h3>
                  <NavLink to="/onas/ofirmie" className="cursor-pointer hover:text-gray-700">O Firmie</NavLink>
                  <NavLink to="/onas/status-przedsiebiorcy" className="cursor-pointer hover:text-gray-700">Status Przedsiębiorcy</NavLink>
                  <NavLink to="/onas/ogloszenia" className="cursor-pointer hover:text-gray-700">Ogłoszenia spółki MORS Wola</NavLink>
                  <a href="" className="cursor-pointer hover:text-gray-700">BIP</a>
              </div>
              <div className='flex flex-col gap-2'>
                  <h3 className='mb-2 uppercase text-[#ffffff80]'>Kariera</h3>
                  <NavLink to="/kariera/praca" className="cursor-pointer hover:text-gray-700">Oferty pracy</NavLink>
                  <NavLink to="/kariera/praca-rodo" className="cursor-pointer hover:text-gray-700">Klauzula RODO dla kandydatów do pracy</NavLink>
              </div>
              
              <div className='flex flex-col gap-2'>
                  <h3 className='mb-2 uppercase text-[#ffffff80]'>Social Media</h3>
                  <FaFacebookF className="cursor-pointer hover:text-gray-700"/>
                  <FaXTwitter className="cursor-pointer hover:text-gray-700"/>
                  <FaLinkedinIn className="cursor-pointer hover:text-gray-700"/>
              </div>
            </div>
          </div>
          <div className='flex justify-between flex-col'>
            <h1 className='sm:text-[14vw] text-[20vw] leading-[0.8] mt-10 pb-4 items-start'>MORS <span className="text-[25vw] sm:text-[14vw]">Wola</span></h1>
            <div className="flex justify-between pt-2">
              <p>© {new Date().getFullYear()} Chłodnia MORS Wola. Wszelkie prawa Zastrzeżone.</p>
              <p>Projekt i Wykonanie: <span className="underline cursor-pointer">4M Studio</span></p>
            </div>
          </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Footer
