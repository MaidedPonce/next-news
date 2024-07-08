import React from 'react'
import ComboboxComponent from './ComboBox'

const Cover = () => {
  return (
    <section className='md:min-h-[50vh] relative justify-center flex-col flex items-start gap-6 p-8 lg:min-h-[70vh] bg-main bg-cover bg-center min-h-44 h-auto sm:min-h-56 w-auto m-4 rounded-md'>
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
      {/* <input
        type='text'
        className='rounded-full h-8 w-[40%] pl-5 max-w-96 md:w-full md:h-10 focus:outline-none focus:ring-2 focus:ring-brand focus:shadow-brand focus:shadow'
        placeholder='Buscar...'
      /> */}
      <ComboboxComponent />
    </section>
  )
}

export default Cover
