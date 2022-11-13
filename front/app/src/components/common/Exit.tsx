import Link from 'next/link'

const Exit: React.FC = () => {
  return (
    <div className='mx-auto flex justify-center'>
      <Link href='/'>
        <div className='my-12 flex cursor-pointer hover:text-gray-300'>
          <svg
            className='mr-6 h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M11 19l-7-7 7-7m8 14l-7-7 7-7'
            />
          </svg>
          <span className='nowrap'>Back to main page</span>
        </div>
      </Link>
    </div>
  )
}
export default Exit
