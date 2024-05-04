// import React from 'react'
// import { IoSearchSharp } from "react-icons/io5";
// import { CiMenuBurger } from "react-icons/ci";

import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import Travel from "../assets/image_2.jpg";
import Travel_2 from "../assets/image_3.jpg";
import Travel_3 from "../assets/image_4.jpg";
import Travel_4 from "../assets/image_5.jpg";
import Travel_5 from "../assets/image_6.jpg";
import Details_1 from "../assets/details_1.jpg";
import Details_2 from "../assets/details_2.jpg";
import { IoIosStar } from "react-icons/io";
import User_1 from "../assets/user_1.jpg";
import User_2 from "../assets/user_4.jpg";
import User_3 from "../assets/user_6.jpg";
import User_4 from "../assets/user_7.jpg";
import User_5 from "../assets/user_5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
import { FaqData } from "../constant/faqData";
import Faq from "../components/Faq";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
// import Card from "../components/Card";

interface titleProps {
  title: string;
  description?: string;
}

const Title: React.FC<titleProps> = ({ title, description }) => {
  return (
    <div className="features__goals--title">
      <h1>{title}</h1>

      {description && <p>{description}</p>}
    </div>
  );
};

function Home() {
  const [open, setOpen] = useState<number | null>(null);
  const Toggle = (i: number) => {
    // setActive(!active);
    console.log(`Toggle clicked for question index: ${i}`);
    if (open === i) {
      setOpen(null);
    } else {
      setOpen(i);
    }
  };
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
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              effect={"slide"}
              speed={2000}
              autoplay={{
                delay: 1000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
                stopOnLastSlide: true,
                // disableOnInteraction: false,
              }}
              loop={true}
              modules={[EffectFade, Autoplay, Pagination]}
              className="brief__background"
            >
              <SwiperSlide>
                <img src={Travel} alt="" className="brief__wrapper--image" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={Travel_2} alt="" className="brief__wrapper--image" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={Travel_3} alt="" className="brief__wrapper--image" />
              </SwiperSlide>

              <SwiperSlide>
                <img src={Travel_4} alt="" className="brief__wrapper--image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Travel_5} alt="" className="brief__wrapper--image" />
              </SwiperSlide>
            </Swiper>
            <div className="brief__croch--left"></div>
            <div className="brief__croch--right"></div>
          </div>

          {/* <div className="brief__aesthetic"></div> */}
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
          <Swiper
            spaceBetween={40}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {PopularData.map((data, index) => (
              <SwiperSlide>
                <Popular key={index} {...data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="faq">
        <Title title="FAQ" description="Foire aux questions" />
        {FaqData.map((data, index) => (
          <Faq
            key={index}
            {...data}
            onClick={() => Toggle(index)}
            open={open === index}
          />
        ))}
      </section>
      <div
        className={`overlay ${active ? "active" : ""}`}
        onClick={() => setActive(false)}
      ></div>
    </>
  );
}

export default Home;
