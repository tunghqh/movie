import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import './Detail.scss'
import CastList from "./CastList";
import VideoList from "./VideoList";
import MovieList from '../../components/MovieList/MovieList'

function Detail() {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <div>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`
            }}
          ></div>
          <div className="mb3 movie-content container">
            <div className="movie-content__poster">
              <div className="movie-content__img" style={{backgroundImage: `url(${apiConfig.originalImage(
                item.poster_path || item.backdrop_path
              )})`}}></div>
            </div>
            <div className="movie-content__info">
              <h1 className="title">
                {item.title || item.name}
              </h1>
              <div className="genres">
                {
                  item.genres && item.genres.slice(0,5).map((gene,i)=>(
                    <span key={i}>{gene.name}</span>
                  ))
                }
              </div>
              <p className="overview">{item.overview}</p>
              <div className="cast">
                <div className="section__header">
                  <h2>Casts</h2>
                  <CastList id={item.id}  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="mb3 section">
              <VideoList id={item.id} />
            </div>
            <div className="section mb3">
              <div className="section__header mb2">
                <h2>Similar</h2>
              </div>
              <MovieList category={category} type='similar' id={item.id} />
            </div>
          </div>
        </div>
      )}
      
    </>
  );
}

export default Detail;
