import React, { useState, useEffect, useRef } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";


import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import { useNavigate } from "react-router-dom";

import "./Hero.scss";
import apiConfig from "../../api/apiConfig";
import Button from "../Button/Button";
import Modal, { ModalContent } from "../Modal/Modal";

function Hero() {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 4));
        console.log(response);
      } catch {
        console.log("error");
      }
    };
    getMovies();
  }, []);

  return (
    <div className="hero">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{delay: 3000}}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, i) => (
        <TrailerModal key={i} id={item.id} />
      ))}
    </div>
  );
}
const HeroSlideItem = (props) => {
  let navigate = useNavigate();

  const item = props.item;

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_slider`);

    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videoSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc);

    } else {
      modal.querySelector(".modal__content").innerHTML = "No trailer";
    }

    modal.classList.toggle("active");
  };

  return (
    <div
      className={`hero-side-item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="slider__item-content container">
        <div className="item__content-info">
          <h2>{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button
              primary
              rounded
              onClick={() => {
                navigate( + item.id);
              }}
            >
              Watch now
            </Button>
            <Button outline rounded onClick={setModalActive}>
              Watch Trailer
            </Button>
          </div>
        </div>
        <div className="item__content-poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};
const TrailerModal = () => {

    const iframeRef = useRef(null);

    const onClose = () => {
      iframeRef.current.setAttribute("src", "");
    };
    return (
      <Modal active={false} id="modal_slider">
        <ModalContent onClose={onClose}>
          <iframe
            ref={iframeRef}
            width="100%"
            height="500px"
            title="Trailer"
          ></iframe>
        </ModalContent>
      </Modal>
    );
  }

export default Hero;
