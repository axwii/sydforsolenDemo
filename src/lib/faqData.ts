export interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategoryData {
  id: string;
  title: string;
  questions: FaqItemData[];
}

export const faqData: FaqCategoryData[] = [
  {
    id: "hvor-hvornar",
    title: "HVOR & HVORNÅR",
    questions: [
      { id: "hvor-finder-sted", question: "HVOR FINDER FESTIVALEN STED?", answer: "Festivalen finder sted i Valbyparken." },
      { id: "hvornar-finder-sted", question: "HVORNÅR FINDER FESTIVALEN STED?", answer: "Festivalen finder sted den 7., 8., og 9. august 2025." },
    ],
  },
  {
    id: "billetsalg",
    title: "BILLETSALG",
    questions: [
      { id: "hvornar-starter-billetsalg", question: "HVORNÅR STARTER BILLETSALGET?", answer: "Information om billetsalg vil blive annonceret her på siden og på vores sociale medier." },
      { id: "hvilke-billettyper", question: "HVILKE BILLETTYPER FINDES DER?", answer: "Vi tilbyder dagsbilletter og partoutbilletter. Følg med for specifikke typer og priser." },
      { id: "hvad-koster-billet", question: "HVAD KOSTER EN BILLET?", answer: "Priserne varierer afhængigt af billettype og købstidspunkt. Se venligst den officielle billetsalgsside for aktuelle priser." },
    ],
  },
  {
    id: "festivalpladsen",
    title: "FESTIVALPLADSEN",
    questions: [
      { id: "hvad-ma-jeg-have-med", question: "HVAD MÅ JEG HAVE MED PÅ PLADSEN?", answer: "Du må medbringe små tasker, solcreme, og en tom vandflaske til opfyldning. Store tasker, professionelt kameraudstyr, og egne mad- og drikkevarer er ikke tilladt." },
      { id: "kan-man-overnatte", question: "KAN MAN OVERNATTE PÅ PLADSEN?", answer: "Nej, der er ikke mulighed for overnatning på selve festivalpladsen." },
      { id: "skal-jeg-have-billet-med", question: "SKAL JEG HAVE MIN BILLET MED FOR AT KOMME IND?", answer: "Ja, din billet (enten printet eller på mobil) skal fremvises ved indgangen." },
      { id: "kan-man-forlade-pladsen", question: "KAN MAN FORLADE PLADSEN OG KOMME IGEN?", answer: "Ja, med et gyldigt armbånd kan du forlade og genindtræde på festivalpladsen." },
      { id: "hvordan-kommer-man-til-festivalen", question: "HVORDAN KOMMER MAN TIL FESTIVALEN?", answer: "Vi opfordrer til at bruge offentlig transport eller cykel. Nærmere information om transportmuligheder vil blive offentliggjort." },
      { id: "ma-jeg-medbringe-mad-drikke", question: "MÅ JEG MEDBRINGE MAD OG DRIKKE?", answer: "Nej, medbragt mad og drikke er ikke tilladt. Der vil være et bredt udvalg af madboder og barer på pladsen." },
      { id: "er-born-velkommen", question: "ER BØRN VELKOMMEN PÅ PLADSEN?", answer: "Ja, børn er velkomne. Børn under 12 år har gratis adgang ifølge med en voksen med gyldig billet. Vi anbefaler dog ikke at medbringe helt små børn pga. lydniveauet." },
      { id: "hvilke-betalingsmidler", question: "HVILKE BETALINGSMIDLER KAN JEG BRUGE PÅ PLADSEN?", answer: "De fleste gængse betalingskort og MobilePay accepteres på festivalpladsen." },
      { id: "er-der-pant", question: "ER DER PANT PÅ DRIKKEVARER PÅ PLADSEN?", answer: "Ja, der vil være pant på krus og flasker for at minimere affald." },
      { id: "er-der-affaldssortering", question: "ER DER AFFALDSSORTERING?", answer: "Ja, vi har fokus på bæredygtighed og opfordrer alle til at benytte vores affaldssorteringsstationer." },
    ],
  },
  {
    id: "frivillig",
    title: "FRIVILLIG",
    questions: [
      { id: "kan-man-vaere-frivillig", question: "KAN MAN VÆRE FRIVILLIG?", answer: "Ja, vi elsker vores frivillige! Information om tilmelding som frivillig vil blive lagt op på vores hjemmeside." },
    ],
  },
  {
    id: "glemte-sager",
    title: "GLEMTE SAGER",
    questions: [
      { id: "fundet-mistet-noget", question: "JEG HAR FUNDET/MISTET NOGET, HVAD GØR JEG?", answer: "Glemte sager kan indleveres og efterlyses i informationen på festivalpladsen. Efter festivalen vil glemte sager blive overdraget til politiets hittegodskontor." },
    ],
  },
  {
    id: "saerlige-behov",
    title: "SÆRLIGE BEHOV",
    questions: [
      { id: "er-festivalen-handicapvenlig", question: "ER FESTIVALEN HANDICAPVENLIG?", answer: "Ja, vi bestræber os på at gøre festivalen så tilgængelig som muligt. Der vil være handicaptoiletter og dedikerede områder. Kontakt os for specifikke behov." },
    ],
  },
  {
    id: "sikkerhed",
    title: "SIKKERHED",
    questions: [
      { id: "hvordan-er-sikkerheden", question: "HVORDAN ER SIKKERHEDEN PÅ PLADSEN?", answer: "Vi har professionelt sikkerhedspersonale og samaritter til stede under hele festivalen for at sikre en tryg oplevelse for alle." },
    ],
  },
];
