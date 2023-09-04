import { Link } from 'react-router-dom'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='bg-white shadow dark:bg-gray-800 my-0 w-full'>
      <div className='w-full mx-auto max-w-screen-xl p-6 md:flex md:items-center md:justify-between'>
        <span className='text-lg gap-x-2 text-gray-500 sm:text-center dark:text-gray-400'>
          © <span className='px-1'>{new Date().getFullYear()}</span>
          <Link to='/' className='hover:underline pr-1'>
            Movies
          </Link>
          All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 gap-x-3 text-lg font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <a
              href='https://www.github.com/dada-mhmd'
              target='_blank'
              className='mr-4 md:mr-6'
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/mohammad-aldada-0912a7207'
              target='_blank'
              className='mr-4 md:mr-6'
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
