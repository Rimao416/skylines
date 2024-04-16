import { ImMap2 } from "react-icons/im";
import { GrMap } from "react-icons/gr";
import { SlPlane } from "react-icons/sl";

export interface Goal {
    text: string;
  }
export interface CardData {
    icon: JSX.Element;
    title: string;
    description: string;
    goals: Goal[];
  }

export  const cardsData: CardData[] = [
    {
      icon: <GrMap />,
      title: "Les lieux de vos rêves",
      description: "La chose la plus importante à garder à l'esprit pour voyager en RDC est de quitter Kinshasa.",
      goals: [
        { text: "Randonnée dans les hautes montagnes" },
        { text: "Kinshasa : villes et villages de charme" },
        { text: "Kinshasa Lieux culturels et historiques" },
      ],
    },
    {
      icon: <SlPlane />,
      title: "Le transport le plus sûr",
      description:"L'avion, en revanche, est le moyen de transport le plus sûr, et ce pour plusieurs raisons",
      goals: [
        { text: "Les avions commerciaux les plus sûrs" },
        { text: "Les bus sont quatre fois plus sûrs" },
        { text: "Le train reste l'un des moyens les plus sûrs" },
      ],
    },
    {
      icon: <ImMap2 />,
      title: "Meilleur guide de voyage",
      description:"Découvrez, planifiez et réservez votre voyage idéal grâce à des conseils d'experts et des guides",
      goals: [
        { text: "Service clientèle peu fiable" },
        { text: "Une collection de guides 825" },
        { text: "Manuels de conversation" },
      ],
    },
  ];
  