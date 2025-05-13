import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion"

const faqItems = [
  {
    question: "Hvad skal jeg medbringe?",
    answer: "Du skal medbringe din frivillighedsattest, din førerkort, og din kørekort."
  },
  {
    question: "Hvor mange timer skal jeg arbejde?",
    answer: "En typisk vagt varer 6-8 timer."
  },
  {
    question: "Må man drikke alkohol under sin vagt?",
    answer: "Nej, man må ikke drikke alkohol under sin vagt."
  },
  {
    question: "Er der forsikring?",
    answer: "Ja, der er forsikring."
  },
  {
    question: "Må man overnatte som frivillig?",
    answer: "Nej, man må ikke overnatte som frivillig."
  },
  {
    question: "Hvad er tilmeldingskravene?",
    answer: "Du skal være 18 år gammel og have en gyldig førerkort."
  },
  {
    question: "Kan man ansøge om vennegruppe?",
    answer: "Nej, man kan ikke ansøge om vennegruppe."
  },
  {
    question: "Hvad er afbudspolitikken?",
    answer: "Ingen afbud"
  },
];

export default function FrivilligFAQ() {
  return (
    <div className="frivillig-accordion flex flex-col gap-4 p-10">
      <h3 className="text-2xl md:text-4xl font-bold mb-5 font-exposure">Praktisk information om at være frivillig</h3>
      <div className="frivillig-accordion-item">
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
} 