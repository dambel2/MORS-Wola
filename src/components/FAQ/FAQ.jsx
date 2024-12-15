import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="p-4 rounded-lg flex flex-col gap-4">
      <Accordion
        title="Jakie są godziny otwarcia chłodni?"
        answer="Chłodnia MORS Wola jest otwarta non-stop (24/7)"
      />
      <Accordion
        title="Czy oferujecie przechowywanie towarów dla klientów indywidualnych?"
        answer="Tak, chłodnia MORS Wola oferuje przechowywanie towarów zarówno dla klientów indywidualnych, jak i firm. Możliwe jest wynajęcie przestrzeni na krótki oraz długi okres."
      />
      <Accordion 
        title="Jakie produkty mogą być przechowywane w chłodni MORS Wola?" 
        answer="W chłodni MORS Wola można przechowywać różnorodne produkty wymagające obniżonych temperatur." />
        <Accordion 
        title="Czy chłodnia MORS Wola oferuje usługi dodatkowe?" 
        answer="Tak, oprócz przechowywania towarów, chłodnia MORS Wola oferuje również załadunek i rozładunek dostaw." />
        <Accordion 
        title="Jak mogę zarezerwować miejsce w chłodni MORS Wola?" 
        answer="Aby zarezerwować miejsce w chłodni MORS Wola, należy skontaktować się z biurem obsługi klienta przez formularz poniżej. Nasi pracownicy pomogą w ustaleniu szczegółów i dostosowaniu oferty do Twoich potrzeb." />
    </div>
  );
};

export default FAQ;