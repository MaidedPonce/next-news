interface PaginationProps {
  page: number
  prevPage: () => void
  nextPage: () => void
}

const Pagination = ({ page, prevPage, nextPage }: PaginationProps) => {
  return (
    <div className='flex items-center gap-6 w-full justify-center my-6'>
      <button
        onClick={prevPage}
        className='bg-brand rounded-full w-12 flex items-center justify-center h-12 p-4 text-white font-bold'
      >
        -
      </button>
      <button className='bg-brand rounded-full w-12 flex items-center justify-center h-12 p-4 text-white font-bold'>
        {page}
      </button>
      <button
        onClick={nextPage}
        className='bg-brand rounded-full w-12 flex items-center justify-center h-12 p-4 text-white font-bold'
      >
        +
      </button>
    </div>
  )
}

export default Pagination