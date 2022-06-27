import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { SwiperSlide,Swiper } from 'swiper/react'
import "swiper/css/bundle";

import tmdbApi,{ category } from '../../api/tmdbApi'

import './MovieList.scss'
import apiConfig from '../../api/apiConfig'
import MovieCart from '../MovieCart/MovieCart';

function MovieList(props) {
    const [items, SetItems] = useState([])

    useEffect(()=>{
        const getList = async () => {
            let response = null
            const params ={}

            if(props.type !== 'similar'){
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type,{params})
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type,{params})

                }
            }else {
                response = await tmdbApi.similar(props.category,props.id)
            }
            SetItems(response.results)
        }
        getList()
    },[])
  return (
    <div className='movie-list'>
        <Swiper
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={'auto'}
        >
            {
                items.map((item,i)=>(
                    <SwiperSlide key={i}>
                        <MovieCart item={item} category={props.category} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}
MovieList.propTypes ={
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}
export default MovieList