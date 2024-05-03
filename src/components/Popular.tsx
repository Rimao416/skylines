import { PopularData } from "../constant/PopularData";
import { MdArrowOutward } from "react-icons/md";


const Truncate = (str: string, n: number) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};
const Popular:React.FC<PopularData>=({image,place,description,salary})=>{ 
  return (
    <div className="popularity">
      <div className="popularity__card">
        <h1>{place}</h1>
        <p>{salary}/nuits</p>
      </div>
      <img src={image} alt="" className="popularity__image"/>
      <p className="popularity__description">{Truncate(description,250)}</p>
      <div className="popularity__button">
      <MdArrowOutward />
            <span>Voir plus</span>
      </div>

    </div>
  );
}

export default Popular;
