import Place_1 from "../assets/place.jpg"
import Place_2 from "../assets/place_2.jpg"
import Place_3 from "../assets/place_3.jpg"
export interface GalleryProps {
    image: string;
    place: string;
    description: string;
  }

export const GalleriesData:GalleryProps[]=[{
    image:Place_1,
    place:"Kinshasa",
    description:"kdsjflksdf"
},{
    image:Place_2,
    place:"Kinshasa",
    description:"kdsjflksdf"
},{
    image:Place_3,
    place:"Kinshasa",
    description:"kdsjflksdf"
}]