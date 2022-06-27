import React from 'react'

import {useParams} from 'react-router-dom'
import PageHeader from '../components/PageHeader/PageHeader';

import {category as cate} from '../api/tmdbApi'
import MovieGrid from '../components/MovieGrid/MovieGrid';
function Catalog() {

  const {category} = useParams()

  return (
    <div>
      <PageHeader>
        {category === cate.movie ? 'Movie' : 'TV Show'}
      </PageHeader>
      <div className='container'>
        <div className='section mb3'>
          <MovieGrid category={category} />
        </div>
      </div>
    </div>
  )
}

export default Catalog