import Link from 'next/link'
import Image from 'next/image'

const Gallery: React.FC = () => {
  return (
    <section className='body-font container hidden text-gray-600 sm:block'>
      <div className='mx-auto flex flex-wrap py-6'>
        <div className='mx-auto w-8/12'>
          <div className='relative mb-4 flex w-full flex-wrap py-32 px-10'>
            <Image
              alt='gallery'
              src='/images/signup_image.jpeg'
              className='absolute inset-0 block h-full w-full rounded-xl object-cover object-center shadow-2xl'
              layout='fill'
              objectFit='contain'
            />
            <div className='absolute top-14 left-14 h-60 w-9/12 rounded-xl bg-gray-100 opacity-70 sm:left-10 sm:top-14 sm:ml-4 sm:h-60 md:top-14 md:ml-7 lg:top-16 lg:ml-12 xl:ml-20'></div>
            <div className='relative z-10 w-full text-center'>
              <h2 className='title-font mb-2 text-xl font-medium text-indigo-700'>
                アカウント登録
              </h2>
              <p className='hidden leading-relaxed text-gray-700 lg:block'>
                アカウントを登録して無料でサービスを使ってみよう!!
              </p>
              <Link href='/login-page'>
                <a className='mt-3 inline-flex items-center rounded bg-indigo-800 px-3 py-2 text-center text-sm font-medium text-white hover:bg-indigo-900'>
                  Let&apos;s Go
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeWidth='2'
                    className='ml-2 h-4 w-4'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 md:px-2'>
              <div className='relative mb-4 flex w-full flex-wrap py-32 px-10 md:px-10 md:py-24'>
                <Image
                  alt='gallery'
                  className='absolute inset-0 h-full w-full rounded-xl object-cover object-center shadow-2xl md:block'
                  src='/images/locate_image.jpeg'
                  layout='fill'
                  objectFit='contain'
                />
                <div className='absolute left-14 top-14 h-60 w-9/12 rounded-xl bg-gray-100 opacity-70 sm:left-14 md:top-12 md:left-7 md:h-48 lg:top-12 lg:left-10 lg:h-60 xl:top-16 xl:left-14'></div>
                <div className='relative z-10 w-full text-center'>
                  <h2 className='title-font mb-2 text-xl font-medium text-indigo-700 xl:mt-4'>
                    楽曲を見つける
                  </h2>
                  <p className='hidden leading-relaxed text-gray-700 lg:block'>
                    普段出会えない
                    <br />
                    珠玉の一曲に出会おう!!
                  </p>
                  <Link href='/top-contents'>
                    <a className='mt-3 inline-flex items-center rounded bg-indigo-800 px-3 py-2 text-center text-sm font-medium text-white hover:bg-indigo-900'>
                      Learn More
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeWidth='2'
                        className='ml-2 h-4 w-4'
                        viewBox='0 0 24 24'
                      >
                        <path d='M5 12h14M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2 md:px-2'>
              <div className='relative mb-4 flex w-full flex-wrap py-32 px-10 md:px-10 md:py-24'>
                <Image
                  alt='gallery'
                  className='absolute inset-0 h-full w-full rounded-xl object-cover object-center shadow-2xl md:block'
                  src='/images/post_image.jpeg'
                  layout='fill'
                  objectFit='contain'
                />
                <div className='absolute left-14 top-14 h-60 w-9/12 rounded-xl bg-gray-100 opacity-70 sm:left-14 md:top-12 md:left-7 md:h-48 lg:top-12 lg:left-10 lg:h-60 xl:top-16 xl:left-14'></div>
                <div className='relative z-10 w-full text-center'>
                  <h2 className='title-font mb-2  text-xl font-medium text-indigo-700 xl:mt-4'>
                    楽曲を分析する
                  </h2>
                  <p className='hidden leading-relaxed text-gray-700 lg:block'>
                    曲がもつ様々な
                    <br />
                    パラメーターを確認してみよう!!
                  </p>
                  <Link href='/top-contents'>
                    <a className='mt-3 inline-flex items-center rounded bg-indigo-800 px-3 py-2 text-center text-sm font-medium text-white hover:bg-indigo-900'>
                      Learn More
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeWidth='2'
                        className='ml-2 h-4 w-4'
                        viewBox='0 0 24 24'
                      >
                        <path d='M5 12h14M12 5l7 7-7 7'></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Gallery
