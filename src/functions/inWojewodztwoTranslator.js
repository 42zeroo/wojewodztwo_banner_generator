const inWojewodztwoTranslator = (wojName) => {
  switch (wojName) {
    case "Lubelskie":
      return "w wojewodztwie Lubelskim";
    case "Podlaskie":
      return "w wojewodztwie Podlaskim";
    case "Mazowieckie":
      return "w wojewodztwie Mazowieckim";
    case "Podkarpackie":
      return "w wojewodztwie Podkarpackim";
    case "Malopolskie":
      return "w wojewodztwie Małopolskim";
    case "Swietokrzyskie":
      return "w wojewodztwie Świętokrzyskim";
    case "Warminsko-Mazurskie":
      return "w wojewodztwie Warmińsko-Mazurskim";
    case "Kujawsko-Pomorskie":
      return "w wojewodztwie Kujawsko-Pomorskim";
    case "Pomorskie":
      return "w wojewodztwie Pomorskim";
    case "Zachodniopomorskie":
      return "w wojewodztwie Zachodniopomorskim";
    case "Lubuskie":
      return "w wojewodztwie Lubuskim";
    case "Dolnoslaskie":
      return "w wojewodztwie Dolnośląskim";
    case "Lodzkie":
      return "w wojewodztwie Łódzkim";
    case "Wielkopolskie":
      return "w wojewodztwie Wielkopolskim";
    case "Slaskie":
      return "w wojewodztwie Śląskim";
    case "Opolskie":
      return "w wojewodztwie Opolskim";
    case "Cala Polska":
      return "na terenie całego kraju";
    case "Polska Wschodnia":
      return "na terenie Polski Wschodniej";
    default:
      return "";
  }
};
export default inWojewodztwoTranslator;
