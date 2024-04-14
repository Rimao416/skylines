// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";
// import { CiMenuBurger } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Travel from "../assets/image_2.jpg";
import { MdTravelExplore } from "react-icons/md";
// import { BiPlanet } from "react-icons/bi";
import Button from "../components/Button";
import { useState } from "react";
function Home() {
  interface NavigationItemProps {
    to: string;
    text: string;
    index: number;
    activeIndex: number;
    onClick: (index: number) => void;
  }

  const NavigationItem: React.FC<NavigationItemProps> = ({
    to,
    text,
    index,
    activeIndex,
    onClick,
  }) => (
    <li
      className={`navigation__item ${index === activeIndex ? "active" : ""}`}
      onClick={() => onClick(index)}
    >
      <Link to={to}>
        {text} <span></span>
        <span></span>
      </Link>
    </li>
  );

  const [active, setActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const NavigationItemMenu: React.FC<NavigationItemProps> = ({
    to,
    text,
    index,
    activeIndex,
    onClick,
  }) => (
    <li
      className={`navigation__menu--item ${
        index === activeIndex ? "active" : ""
      }`}
      onClick={() => onClick(index)}
    >
      <Link to={to}>{text}</Link>
    </li>
  );
  return (
    <section className="header">
      <div className="navigation">
        <img src="/SKY_3.png" alt="" className="navigation__logo" />
        <ul className="navigation__list">
          <ul className="navigation__list">
            <NavigationItem
              to="#"
              text="Accueil"
              index={0}
              activeIndex={activeIndex}
              onClick={handleItemClick}
            />
            <NavigationItem
              to="#"
              text="À Propos"
              index={1}
              activeIndex={activeIndex}
              onClick={handleItemClick}
            />
            <NavigationItem
              to="#"
              text="Top Place"
              index={2}
              activeIndex={activeIndex}
              onClick={handleItemClick}
            />
            <NavigationItem
              to="#"
              text="Contact"
              index={3}
              activeIndex={activeIndex}
              onClick={handleItemClick}
            />
          </ul>
        </ul>
        <div className="navigation__button">
          <Button title="Prendre rendez-vous" />
        </div>
        <div className="navigation__burger" onClick={() => setActive(!active)}>
          <GiHamburgerMenu />
        </div>
      </div>
      <div className={`navigation__menu ${active ? "active" : ""}`}>
        <h3 className="navigation__menu--title">Menu</h3>
        <ul className="navigation__menu--list">
          <NavigationItemMenu
            to="#"
            text="Accueil"
            index={0}
            activeIndex={activeIndex}
            onClick={handleItemClick}
          />
          <NavigationItemMenu
            to="#"
            text="À Propos"
            index={1}
            activeIndex={activeIndex}
            onClick={handleItemClick}
          />
          <NavigationItemMenu
            to="#"
            text="Top Place"
            index={2}
            activeIndex={activeIndex}
            onClick={handleItemClick}
          />
          <NavigationItemMenu
            to="#"
            text="Contact"
            index={3}
            activeIndex={activeIndex}
            onClick={handleItemClick}
          />
        </ul>
        <div className="navigation__menu--footer">
          <Button title="Prendre rendez-vous" />
        </div>
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
          <img src={Travel} alt="" className="brief__wrapper--image" />
          <div className="brief__croch--left"></div>
          <div className="brief__croch--right"></div>
          {/* <div className="brief__aesthetic"></div> */}
        </div>
        <div className="brief__wrapper"></div>
      </div>
    </section>
  );
}

export default Home;
