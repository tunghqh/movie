import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button/Button'
import Hero from '../components/Hero/Hero'
import MovieList from '../components/MovieList/MovieList'
import {category,movieType,tvType} from '../api/tmdbApi'

function Home() {
  return (
    <>
      <Hero />
      <div className='container'>
        <div className='section mb3'>
          <div className='section__header mb2'>
            <h2>Trending Movie</h2>
            <Link to='/movie'>
              <Button outline small>View more</Button>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
        <div className='section mb3'>
          <div className='section__header mb2'>
            <h2>Top Rate Movie</h2>
            <Link to='/movie'>
              <Button outline small>View more</Button>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
        <div className='section mb3'>
          <div className='section__header mb2'>
            <h2>Trending TV</h2>
            <Link to='/movie'>
              <Button outline small>View more</Button>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
        <div className='section mb3'>
          <div className='section__header mb2'>
            <h2>Top Rated TV</h2>
            <Link to='/movie'>
              <Button outline small>View more</Button>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  )
}

export default Home