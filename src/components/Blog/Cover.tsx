'use client'
import ComboboxComponent from './ComboBox'
import { m, useScroll, useTransform } from 'framer-motion'
import LazyAnimations from '../Providers/LazyAnimations'

const Cover = () => {
  const { scrollY } = useScroll()
  const translateY = useTransform(scrollY, [0, 300], [0, 100])
  return (
    <LazyAnimations>
      <m.section
        className='md:min-h-[50vh] aspect-auto bg-white relative justify-center flex-col flex items-start gap-6 p-8 lg:min-h-[70vh] bg-main bg-cover bg-center min-h-44 h-auto sm:min-h-56 w-auto m-4 rounded-md'
        style={{ translateY }}
      >
        <h1 className='uppercase flex items-center w-full text-white text-lg sm:text-2xl md:text-5xl font-bold'>
          Fernanda&nbsp;
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='size-5 md:size-10 animate-color-pulse'
          >
            <path d='M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z' />
            <path d='M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z' />
          </svg>
          &nbsp;Familiar
        </h1>
        <div className='w-full max-w-96 md:w-full md:pt-20'>
          <ComboboxComponent />
        </div>
      </m.section>
    </LazyAnimations>
  )
}

export default Cover
