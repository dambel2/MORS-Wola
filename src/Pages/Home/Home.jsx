import { LuWarehouse, LuPackageOpen } from "react-icons/lu";
import { FaTemperatureFull } from "react-icons/fa6";
import Timeline from "../../components/Timeline/Timeline";
import miniOfertaData from "../../data/miniOfertaData";
import { useLayoutEffect, useEffect } from "react";
import './home.css';
import FAQ from "../../components/FAQ/FAQ"

const Home = () => {


    useEffect(() => {
        // Animacja pojawiania się tekstu
        const elements = document.querySelectorAll('.animate-text-left, .animate-text-right');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.style.transitionDelay = `${index * 0.5}s`; // Ustawienie opóźnienia
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1});
    
        elements.forEach(element => observer.observe(element));

        return () => observer.disconnect();
    }, []);

    useLayoutEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, []);

  return (
    <div className="">
        <main className=" md:pl-24 sm:pl-16 pl-12 h-full pt-12 sm:flex-row flex flex-col lg:pb-0 pb-32">
            <div className="sm:w-[50%] self-center h-full flex flex-col">
                <h1 className="text-5xl mb-4 lg:mb-8 leading-tight animate-text-left 2xl:text-7xl 2xl:leading-tight xl:text-6xl xl:leading-tight lg:text-5xl lg:leading-tight md:text-4xl md:leading-tight sm:text-3xl sm:leading-tight">Największa <span className="lg:border-b-6 xl:border-b-8  border-b-4 border-[#37b1e0]">Chłodnia</span> na Woli - MORS</h1>
                <h4 className="xl:text-lg font-medium lg:text-base md:text-sm text-md w-[75%] mb-8 sm:text-xs animate-text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates unde consequatur culpa deleniti? Sunt esse doloribus 
                    corporis in itaque, et numquam ducimus exercitationem aspernatur, amet ipsam voluptas possimus suscipit commodi.</h4>
                <div className="flex gap-4">
                    <button className="lg:px-8 lg:py-2 sm:px-4 sm:py-1 px-8 py-2 lg:text-base text-sm bg-[#37b1e0] text-white font-semibold hover:shadow-lg hover:shadow-gray-500/50 transition-shadow duration-300">O firmie</button>
                    <button className="lg:px-8 lg:py-2 sm:px-4 sm:py-1 px-8 py-2 border-[#e18a33] lg:text-base text-sm border-2 text-[#e18a33] font-semibold hover:shadow-lg hover:shadow-gray-500/50 transition-shadow duration-300">Kontakt</button>
                </div>
            </div>
            <img src="/src/assets/hero-anim.png" className="sm:w-[50%] h-[400px] sm:h-[350px] md:h-[450px] lg:h-[650px] animate-text-left z-[-1]"/>
        </main>

        <section className="md:px-24 sm:px-16 px-12 w-full sm:flex-row flex flex-col h-auto gap-16 relative lg:pb-64 pb-32 items-center">
            <img src="/src/assets/1.png" className="sm:w-[50%] h-[400px] sm:h-[350px] md:h-[450px] lg:h-full w-full animate-text-left order-2 sm:order-1" />
            <div className="sm:w-1/2 flex flex-col justify-center gap-8 sm:mb-0 mb-8 relative order-1 sm:order-2">
                <h2 className="text-5xl leading-tight animate-text-right font-semibold">Zachowaj świeżość z Chłodnią <span className="text-[#37b1e0]">MORS</span> Wola</h2>
                <div className="gap-4 flex flex-col font-medium animate-text-right">
                    <p className="xl:text-lg lg:text-base md:text-sm text-md sm:text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, 
                        excepturi dolorem iure sunt eius ipsa cum adipisci culpa laborum quam odit maxime ad. Maxime sunt illum ex nobis veritatis ut!
                    </p>   
                    <p className="xl:text-lg lg:text-base md:text-sm text-md sm:text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, 
                        excepturi dolorem iure sunt eius ipsa cum adipisci culpa laborum quam odit maxime ad. Maxime sunt illum ex nobis veritatis ut!
                    </p>
                    <p className="xl:text-lg lg:text-base md:text-sm text-md sm:text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, 
                        excepturi dolorem iure sunt eius ipsa cum adipisci culpa laborum quam odit maxime ad. Maxime sunt illum ex nobis veritatis ut!
                        laborum quam odit maxime ad. Maxime sunt illum ex nobis veritatis ut!
                    </p>
                </div>
                <img src="/src/assets/mors-img.png" className="absolute 2xl:right-[-300px] bottom-[-100px] xl:bottom-[-200px] lg:bottom-[-150px] sm:bottom-[-100px] 2xl:bottom-[-300px] sm:w-[300px] 2xl:w-[500px] xl:right-[-300px] xl:w-[400px] sm:right-[-150px] right-[-200px] w-[275px] z-[-1]" />
            </div>
            <div className="custom-shape-divider-bottom-1725034220 ">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </section>
        
        

        <section className="md:px-24 px-12 flex flex-col pb-24 bg-[#37b1e0] ">
            <h2 className="text-5xl text-center mt-12 self-center font-semibold text-white animate-text-left">Nasza Oferta</h2>
            <div className="mt-24 flex flex-col xl:flex-row gap-12 justify-center items-center">
                {miniOfertaData && miniOfertaData.map(({ id, title, description }) => {
                    const icons = {
                        1: FaTemperatureFull,
                        2: LuPackageOpen,
                        3: LuWarehouse
                    };
                    const Icon = icons[id];
                    return (
                        <div key={id} className="flex flex-col items-center bg-white max-w-[400px] h-[700px] px-4 py-8 rounded-lg shadow-md hover:shadow-2xl duration-300 transition-shadow">
                            <Icon size={200} className="text-[#e18a33] mb-8" />
                            <h5 className="mt-4 text-2xl font-semibold px-8 text-left animate-text-left">{title}</h5>
                            <p className="mt-4 text-md font-medium text-left px-8 leading-relaxed animate-text-left">{description}</p>
                            <button className="flex self-start ml-8 mt-8 border-[#e18a33] border-2 px-4 py-2 rounded gap-2 text-lg font-semibold hover:bg-orange-200 duration-300 animate-text-left">
                                Zobacz Więcej
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>

        <section className="bg-white md:px-24 px-12 pt-36 pb-24 relative">
            <div className="custom-shape-divider-top-1725040866">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
                <h2 className="xl:text-5xl text-4xl mb-24 font-semibold leading-tight xl:w-[65%] text-black mt-12 animate-text-right">Tradycja i Innowacja Od 1937: <span className="text-[#e18a33]">Nasza Droga do Doskonałości</span></h2>
                <Timeline />
            <div className="custom-shape-divider-bottom-1725172488">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                </svg>
            </div>
        </section>

        <section className="flex flex-col bg-[#37b1e0] pt-12 justify-center lg:px-24">
            <h2 className="lg:text-5xl text-4xl font-medium text-white text-center">FAQs - często zadawane pytania</h2>
            <div className="self-center my-24">
                <FAQ />
            </div>
        </section>
        
    </div>
    
  )
}

export default Home
