import { useSearchParams } from 'react-router-dom'
import { CardMovie } from '../components/CardMovie'
import { useFetchMovies } from '../hooks/useFetchMovies'
import useDocumentTitle from '../hooks/useDocumentTitle'

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get('q')
  const { data: movies } = useFetchMovies(apiPath, queryTerm)

  useDocumentTitle(`Search result for ${queryTerm} | Movies`)

  return (
    <main>
      <section className='py-7'>
        <p className='text-3xl text-gray-700 dark:text-white'>
          {movies.length === 0
            ? `No result found for '${queryTerm}'`
            : `Result for '${queryTerm}'`}
        </p>
      </section>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex flex-wrap justify-center xl:justify-start gap-4'>
          {movies?.map((movie) => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
