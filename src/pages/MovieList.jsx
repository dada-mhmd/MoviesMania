import { useEffect } from 'react'
import { CardMovie } from '../components/CardMovie'
import { useFetchMovies } from '../hooks/useFetchMovies'

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetchMovies(apiPath)

  useEffect(() => {
    document.title = `${title} | Movies`
  })

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex flex-wrap justify-center sm:justify-evenly gap-4'>
          {movies?.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
