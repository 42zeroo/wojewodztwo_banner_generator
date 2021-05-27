const inWojewodztwoTranslator = (wojName) => {
  switch (wojName) {
    case "Lubelskie":
      return "Lubelskim";
    case "Podlaskie":
      return "Podlaskim";
    case "Mazowieckie":
      return "Mazowieckim";
    case "Podkarpackie":
      return "Podkarpackim";
    case "Malopolskie":
      return "Małopolskim";
    case "Swietokrzyskie":
      return "Świętokrzyskim";
    case "Warminsko-Mazurskie":
      return "Warmińsko-Mazurskim";
    case "Kujawsko-Pomorskie":
      return "Kujawsko-Pomorskim";
    case "Pomorskie":
      return "Pomorskim";
    case "Zachodniopomorskie":
      return "Zachodniopomorskim";
    case "Lubuskie":
      return "Lubuskim";
    case "Dolnoslaskie":
      return "Dolnośląskim";
    case "Lodzkie":
      return "Łódzkim";
    case "Wielkopolskie":
      return "Wielkopolskim";
    case "Slaskie":
      return "Śląskim";
    case "Opolskie":
      return "Opolskim";
    default:
      return "";
  }
};
export default inWojewodztwoTranslator;
