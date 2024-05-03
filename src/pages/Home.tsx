// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";
// import { CiMenuBurger } from "react-icons/ci";

import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import Travel from "../assets/image_2.jpg";
import Details_1 from "../assets/details_1.jpg";
import Details_2 from "../assets/details_2.jpg";
import { IoIosStar } from "react-icons/io";
import User_1 from "../assets/user_1.jpg";
import User_2 from "../assets/user_4.jpg";
import User_3 from "../assets/user_6.jpg";
import User_4 from "../assets/user_7.jpg";
import User_5 from "../assets/user_5.jpg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { MdTravelExplore } from "react-icons/md";
// import { BiPlanet } from "react-icons/bi";
import Button from "../components/Button";
import { useState } from "react";
import Features from "../components/Features";
import { cardsData } from "../constant/CardData";
import Card from "../components/Card";
import { GalleriesData } from "../constant/GalleryData";
import Gallery from "../components/Gallery";
import { PopularData } from "../constant/PopularData";
import Popular from "../components/Popular";
// import Card from "../components/Card";

interface titleProps {
  title: string;
  description?: string;
}

// const Gallery: React.FC<galleryProps> = ({ place, description, image }) => {
//   return (
//     <div className="gallery__box">
//       <img src={image} alt="" />
//       <h3>{place}</h3>
//       <p>{description}</p>
//     </div>
//   );
// };

const Title: React.FC<titleProps> = ({ title, description }) => {
  return (
    <div className="features__goals--title">
      <h1>{title}</h1>

      {description && <p>{description}</p>}
    </div>
  );
};

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
    <>
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
          <div
            className="navigation__burger"
            onClick={() => setActive(!active)}
          >
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
              fiables et très abordables. Votre imagination est votre seule
              limite avec cette nouvelle agence de voyage.
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
      <section className="features">
        <section className="features__about">
          <Features
            icon={<MdTravelExplore />}
            title="2m+ Tickets sold"
            description="Laissez-nous vous transporter à travers l’agence de voyage de vos souvenirs"
          />
          <Features
            icon={<MdTravelExplore />}
            title="1000+ hiking"
            description="Laissez-nous vous transporter à travers l’agence de voyage de vos souvenirs"
          />
          <Features
            icon={<MdTravelExplore />}
            title="4.9 Star reviews"
            description="Laissez-nous vous transporter à travers l’agence de voyage de vos souvenirs"
          />
        </section>
        <section className="features__goals">
          <Title title="Nous fournissons la meilleure solution pour vos vacances" />

          <div className="features__goals--card">
            {cardsData.map((data, index) => (
              <Card key={index} {...data} />
            ))}
          </div>
        </section>
      </section>
      <section className="gallery">
        <Title
          title="Galerie du tour du monde"
          description="Rendre les voyages accessibles à tous"
        />
        <div className="gallery__container">
          {GalleriesData.map((data, index) => (
            <Gallery key={index} {...data} />
          ))}
        </div>
        <div className="gallery__button">
          <Button title="Voir plus" />
        </div>
      </section>
      <section className="visits">
        <div className="visits__wrapper">
          <h1>Faire paraître le monde plus petit depuis</h1>
          <p className="visits__description">
            Faire paraître le monde plus petit depuis’ est votre portail vers
            l'exploration des merveilles de notre planète à travers des
            perspectives uniques. Plongez dans des récits captivants, des guides
            pratiques et des conseils inspirants qui vous rapprocheront des
            cultures, des destinations et des expériences les plus fascinantes
            du monde
          </p>
          <div className="visits__user">
            <div className="visits__user--images">
              <img src={User_1} alt="" className="visits__image" />
              <img src={User_2} alt="" className="visits__image" />
              <img src={User_3} alt="" className="visits__image" />
              <img src={User_4} alt="" className="visits__image" />
              <img src={User_5} alt="" className="visits__image" />
            </div>
            <div className="visits__user--text">
              <p className="visits__user--title">Nos Clients Satisfaits</p>
              <span className="visits__user--subtitle">
                <IoIosStar /> 4.9 (1000+ visites)
              </span>
            </div>
            {/* <p>lkjlj</p> */}
          </div>
          <div className="visits__button">
            <MdArrowOutward />
            <span>Voir plus</span>
          </div>
        </div>
        <div className="visits__wrapper">
          <img src={Details_1} alt="" className="details__wrapper--image" />
          <img src={Details_2} alt="" className="details__wrapper--image" />
        </div>
      </section>
      <section className="popular">
        <Title
          title="Les destinations les plus populaires"
          description="Découvrez les destinations les plus en vogue à travers le monde sur notre site dédié aux voyageurs passionnés."
        />
        <div className="popular__destination">
          <Splide
            aria-label="Popular destinations"
            options={{
              type: "loop",
              start: 1,
              gap: "3rem",
              perPage: 3,
              perMove: 1,
              pagination: false,
              arrows: false,
              // padding:"5rem",
            }}
          >
            {PopularData.map((data, index) => (
              <SplideSlide key={index}>
                {/* <div className="popularity">
                  <div className="popularity__card">
                    <h1>Usa</h1>
                    <p>1000/nuits</p>
                  </div>
                  <img src="https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="popularity__image" />
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ducimus molestiae vel saepe earum corporis. Molestias accusantium totam quae dolore deleniti. Doloremque magni dolor officiis sed. Labore itaque officiis amet?</p>
                </div> */}
                <Popular key={index} {...data} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
      <div
        className={`overlay ${active ? "active" : ""}`}
        onClick={() => setActive(false)}
      ></div>
    </>
  );
}

export default Home;
