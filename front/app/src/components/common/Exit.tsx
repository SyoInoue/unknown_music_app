import Link from 'next/link'

const Exit: React.FC = () => {
  return (
    <div className='flex justify-center'>
      <Link href='/'>
        <div className='flex cursor-pointer my-12 hover:text-gray-300'>
          <svg
            className='w-6 h-6 mr-6'
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
          <span>Back to main page</span>
        </div>
      </Link>
    </div>
  )
}
export default Exit
