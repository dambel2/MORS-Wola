import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 rounded-lg flex flex-col gap-4">
      <Accordion
        title="Jakie są godziny otwarcia chłodni?"
        answer="Chłodnia MORS Wola jest otwarta od poniedziałku do piątku w godzinach 6:00 - 22:00 oraz w weekendy od 7:00 do 20:00."
      />
      <Accordion
        title="Czy oferujecie przechowywanie towarów dla klientów indywidualnych?"
        answer="Tak, chłodnia MORS Wola oferuje przechowywanie towarów zarówno dla klientów indywidualnych, jak i firm. Możliwe jest wynajęcie przestrzeni na krótki oraz długi okres."
      />
      <Accordion 
        title="Jakie produkty mogą być przechowywane w chłodni MORS Wola?" 
        answer="W chłodni MORS Wola można przechowywać różnorodne produkty wymagające niskich temperatur, w tym mięso, ryby, owoce, warzywa, nabiał, a także farmaceutyki i inne wrażliwe na temperaturę produkty." />
        <Accordion 
        title="Czy chłodnia MORS Wola oferuje usługi dodatkowe, takie jak pakowanie lub transport?" 
        answer="Tak, oprócz przechowywania towarów, chłodnia MORS Wola oferuje usługi dodatkowe, takie jak pakowanie, etykietowanie oraz organizację transportu produktów do i z chłodni." />
        <Accordion 
        title="Jak mogę zarezerwować miejsce w chłodni MORS Wola?" 
        answer="Aby zarezerwować miejsce w chłodni MORS Wola, należy skontaktować się z biurem obsługi klienta pod numerem telefonu [wstaw numer telefonu] lub wysłać e-mail na adres [wstaw adres e-mail]. Nasi pracownicy pomogą w ustaleniu szczegółów i dostosowaniu oferty do Twoich potrzeb." />
    </div>
  );
};

export default FAQ;