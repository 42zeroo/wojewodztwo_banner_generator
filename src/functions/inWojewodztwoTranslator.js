const inWojewodztwoTranslator = (wojName) => {
  switch (wojName) {
    case "Lubelskie":
      return "w województwie lubelskim";
    case "Podlaskie":
      return "w województwie podlaskim";
    case "Mazowieckie":
      return "w województwie mazowieckim";
    case "Podkarpackie":
      return "w województwie podkarpackim";
    case "Malopolskie":
      return "w województwie małopolskim";
    case "Swietokrzyskie":
      return "w województwie świętokrzyskim";
    case "Warminsko-Mazurskie":
      return "w województwie warmińsko-mazurskim";
    case "Kujawsko-Pomorskie":
      return "w województwie kujawsko-pomorskim";
    case "Pomorskie":
      return "w województwie pomorskim";
    case "Zachodniopomorskie":
      return "w województwie zachodniopomorskim";
    case "Lubuskie":
      return "w województwie lubuskim";
    case "Dolnoslaskie":
      return "w województwie dolnośląskim";
    case "Lodzkie":
      return "w województwie łódzkim";
    case "Wielkopolskie":
      return "w województwie wielkopolskim";
    case "Slaskie":
      return "w województwie śląskim";
    case "Opolskie":
      return "w województwie opolskim";
    case "Cala Polska":
      return "na terenie całego kraju";
    case "Polska Wschodnia":
      return "na terenie Polski Wschodniej";
    default:
      return "";
  }
};
export default inWojewodztwoTranslator;
