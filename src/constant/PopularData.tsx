import France from "../assets/france.jpg";
import Istanbul from "../assets/istanbul.jpg";
import Japon from "../assets/japon.jpg";
import London from "../assets/london.jpg";
import Pekin from "../assets/pekin.jpg";
import South from "../assets/south_afrika.jpg";
import Usa from "../assets/usa.jpg";
import Canada from "../assets/canada.jpg";

export interface PopularData {
    id: number;
  image: string;
  place: string;
  description: string;
  salary: number;
}

export const PopularData: PopularData[] = [
  {
    id: 1,
    image: France,
    place: "France",
    description: "La France, pays emblématique situé en Europe occidentale, est réputée pour sa riche histoire, sa culture dynamique et sa gastronomie renommée. D'un point de vue géographique, la France offre une grande diversité, allant des magnifiques côtes méditerranéennes et atlantiques aux majestueuses montagnes des Alpes et des Pyrénées, sans oublier les vastes plaines agricoles du centre du pays.",
    salary: 700,
  },
  {
    id: 2,
    image: Istanbul,
    place: "Istanbul",
    description: "Istanbul, anciennement connue sous le nom de Byzance puis de Constantinople, est une ville extraordinaire située à cheval entre l'Europe et l'Asie, sur le détroit du Bosphore. Cette position géographique unique en fait l'une des villes les plus fascinantes et multiculturelles au monde, imprégnée d'histoire, de diversité et d'une énergie vibrante.",
    salary: 800,
  },
  {
    id: 3,
    image: Japon,
    place: "Japon",
    description: "Le Japon est un pays fascinant situé dans l'Est de l'Asie, réputé pour sa culture riche et unique, sa technologie de pointe, sa cuisine délicieuse, ses paysages variés et son mélange harmonieux de tradition et de modernité.",
    salary: 1500,
  },
  {
    id: 4,
    image: London,
    place: "Royaume-Uni",
    description: "Le Royaume-Uni, situé en Europe du Nord-Ouest, est composé de quatre nations distinctes : l'Angleterre, l'Écosse, le Pays de Galles et l'Irlande du Nord. C'est un pays riche en histoire, en culture et en paysages diversifiés, offrant une multitude d'expériences aux visiteurs.",
    salary: 1200,
  },
  {
    id: 5,
    image: Pekin,
    place: "Chine",
    description: "La Chine possède l'une des civilisations les plus anciennes du monde, avec une histoire riche remontant à des milliers d'années. Des dynasties impériales telles que les Qin, les Han, les Tang et les Qing ont laissé un héritage culturel remarquable, visible à travers les palais impériaux, les temples bouddhistes et les sculptures anciennes. La Grande Muraille de Chine, un symbole emblématique du pays, témoigne de l'ingéniosité et de la puissance de l'ancienne Chine.",
    salary: 900,
  },
  {
    id: 6,
    image: South,
    place: "Afrique du Sud",
    description: "L'Afrique du Sud est réputée pour sa diversité géographique. Vous y trouverez des montagnes majestueuses, notamment la chaîne de Drakensberg, des plaines infinies parsemées de savanes où vivent les Big Five (lion, léopard, éléphant, buffle et rhinocéros), des déserts arides comme le Kalahari, et des côtes spectaculaires bordées par l'océan Atlantique et l'océan Indien.",
    salary: 700,
  },
  {
    id: 7,
    image: Usa,
    place: "Etats-Unis",
    description: "Les États-Unis sont vastes et offrent une variété de paysages époustouflants. À l'ouest, vous trouverez les majestueuses montagnes des Rocheuses et de la Sierra Nevada, ainsi que des parcs nationaux emblématiques tels que le Grand Canyon et le parc national de Yellowstone. À l'est, il y a des villes dynamiques, des forêts verdoyantes et des plages ensoleillées en Floride et en Californie.",
    salary: 800,
  },
  {
    id: 8,
    image: Canada,
    place: "Canada",
    description: "Les grandes villes canadiennes sont dynamiques et accueillantes. Toronto, la plus grande ville, est une métropole multiculturelle avec une scène artistique florissante, des quartiers ethniques animés et la célèbre Tour CN. Montréal, une ville francophone, est connue pour son architecture historique, sa gastronomie raffinée et son festival de jazz renommé. Vancouver, nichée entre les montagnes et l'océan, offre un style de vie en plein air exceptionnel.",
    salary: 1500,
  },
];
