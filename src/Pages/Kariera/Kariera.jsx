import { NavLink, Link } from "react-router-dom";

const Kariera = () => {
  return (
    <div className="h-screen m-0 md:px-24 px-4 overflow-x-hidden w-full pt-16">
      <h1 className="text-4xl mb-12">Oferty Pracy</h1>
      <div className="border-2 border-[#37b1e0] md:w-[50%] flex-col md:px-12 md:py-8 px-6 py-4 mb-4">
        <h2 className="text-xl mb-6">Magazynier</h2>
        <div className="md:flex gap-8">
            <div className="mb-8 md:0">
                <h4 className="font-semibold mb-2 ">Twój zakres obowiązków:</h4>
                <ol className="list-disc">
                    <li>Kontrola oraz przyjęcie dostaw materiałów w magazynie głównym</li>
                    <li>Załadunki i rozładunki dostaw</li>
                </ol>
            </div>
            <div>
                <h4 className="font-semibold mb-2">Nasze wymagania:</h4>
                <ol className="list-disc">
                    <li>Doświadczenie zawodowe: - 2 letnie doświadczenie na stanowisku magazynier</li>
                    <li>Uprawnienia TDT lub UDT na wózki widłowe</li>
                </ol>
            </div>
        </div>
        <p className="text-[#e18a33]">Aplikuj przez formularz kontaktowy na stronie głównej</p>
      </div>

      <NavLink to={"/rodo"} className="underline">Zobacz wzór RODO dla pracownika</NavLink>
    </div>
  )
}

export default Kariera
