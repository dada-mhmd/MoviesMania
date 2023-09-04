import { Link } from 'react-router-dom'
import notFoundImg from '../assets/notfound.png'
import { useEffect } from 'react'

export const NotFound = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | Movies`
  })

  return (
    <main>
      <section className='flex flex-col justify-center px-2 relative'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-3xl sm:text-4xl lg:text-7xl text-gray-700 dark:text-white font-bold my-10'>
            Oops, Not Found 404!
          </p>
          <div className='max-w-sm md:max-w-lg bg-slate-100 rounded-full animate-pulse'>
            <img src={notFoundImg} alt='not-found' className='rounded-full' />
          </div>
        </div>

        <div className='flex justify-center'>
          <Link to='/'>
            <button className='dark:text-white w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 py-2 mt-2 rounded'>
              Back To Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
