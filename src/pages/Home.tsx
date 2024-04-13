// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import Travel from "../assets/image_2.jpg";
import { MdTravelExplore } from "react-icons/md";
// import { BiPlanet } from "react-icons/bi";
import Button from "../components/Button";
function Home() {
  return (
    <section className="header">
      <div className="navigation">
        
        <img src="/SKY_3.png" alt="" className="navigation__logo" />
        <ul className="navigation__list">
          <li className="navigation__item">Accueil</li>
          <li className="navigation__item">À Propos</li>
          <li className="navigation__item">Top Place</li>
          <li className="navigation__item">Contact</li>
        </ul>
        <div className="navigation__button">
        <Button title="Prendre rendez-vous" />
        </div>
        <div className="navigation__burger">
          <CiMenuBurger />
        </div>
      </div>
      <div className="navigation__menu">
        <ul className="navigation__menu--list">
        <li className="navigation__item--list">Accueil</li>
          <li className="navigation__item--list">À Propos</li>
          <li className="navigation__item--list">Top Place</li>
          <li className="navigation__item--list">Contact</li>
        </ul>
      </div>
      <div className="brief">
        <div className="brief__wrapper">
          <p className="brief__text">
            <span>
              <MdTravelExplore />
            </span>
            La destination des Skyline
          </p>
          <h1 className="brief__title">
            Les voyages ouvrent la voie à la création de souvenirs
          </h1>
          <p className="brief__description">
            Laissez-nous vous transporter grâce à nos forfaits de vacances
            fiables et très abordables. Votre imagination est votre seule limite
            avec cette nouvelle agence de voyage.
          </p>

          <Button title="Prendre rendez-vous" />
        </div>
        <div className="brief__wrapper">
          <img src={Travel} alt=""  className="brief__wrapper--image"/>
          <div className="brief__croch--left"></div>
          <div className="brief__croch--right"></div>
          {/* <div className="brief__aesthetic"></div> */}

        </div>
        <div className="brief__wrapper">
        </div>
      </div>
    </section>
  );
}

export default Home;
