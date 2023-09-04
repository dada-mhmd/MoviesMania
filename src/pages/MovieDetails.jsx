import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

export const MovieDetails = () => {
  const [movie, setMovie] = useState({})
  const { id } = useParams()

  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
    : 'https://via.placeholder.com/300x450'

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f849f962b81373113a4045c47441be63`
      )
      const json = await res.json()
      setMovie(json)
    }
    fetchMovie()
  }, [id])

  useDocumentTitle(`${movie?.title} | Movies`)

  return (
    <main>
      <section className='flex justify-around flex-wrap py-5'>
        <div className='max-w-sm'>
          <img className='rounded-md' src={image} alt={movie.title} />
        </div>

        <div className='max-w-2xl text-gray-700 text-lg dark:text-white'>
          <h1 className='text-4xl font-bold my-6 text-center lg:text-left'>
            {movie.title}
          </h1>
          <p className='my-4 text-center lg:text-left'>{movie.overview}</p>

          {/* genres */}
          <p className='my-7 flex justify-center md:justify-normal flex-wrap gap-2'>
            {movie.genres &&
              movie?.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className='mr-2 border border-gray-200 bg-slate-700 text-white dark:border-gray-600 py-2 px-4 rounded'
                >
                  {genre.name}
                </span>
              ))}
          </p>

          {/*rating star */}
          <div className='flex items-center justify-center sm:justify-normal'>
            <svg
              className='w-4 h-4 text-yellow-300 mr-1'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 22 20'
            >
              <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
            </svg>
            <p className='ml-2 text-gray-900 dark:text-white'>
              {movie.vote_average}
            </p>
            <span className='w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400' />
            <span className='text-gray-900 dark:text-white'>
              {movie.vote_count} reviews
            </span>
          </div>

          <div className='flex flex-col items-center justify-center sm:justify-start sm:items-start'>
            <p className='my-4'>
              <span className='mr-2 font-bold'>Runtime:</span>
              <span>{movie.runtime} min</span>
            </p>
            <p className='my-4'>
              <span className='mr-2 font-bold'>Budget:</span>
              <span>${movie.budget}</span>
            </p>
            <p className='my-4'>
              <span className='mr-2 font-bold'>Revenue:</span>
              <span>{movie.revenue}</span>
            </p>
            <p className='my-4'>
              <span className='mr-2 font-bold'>Release Date:</span>
              <span>{movie.release_date}</span>
            </p>
            <p className='my-4'>
              <span className='mr-2 font-bold'>IMDB Code:</span>
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target='_blank'
                rel='noreferrer'
              >
                {movie.imdb_id}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
