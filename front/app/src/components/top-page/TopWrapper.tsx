import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Image from 'next/image'

const TopWrapper: React.FC = () => {
  return (
    <div className='relative mx-3 overflow-hidden rounded-xl bg-gray-900 sm:mx-20'>
      <div className='z-10 mx-auto max-w-7xl'>
        <div className='relative bg-gray-900 pb-8 sm:pb-20 lg:pb-12'>
          <div className='relative px-4 pt-6 sm:px-6 lg:px-0'>
            <nav
              className='relative mx-auto flex items-center justify-center sm:h-12 lg:justify-start'
              aria-label='Global'
            >
              <div className='hidden sm:block md:space-x-8 lg:ml-8 lg:space-x-1 xl:ml-14 xl:space-x-3'>
                <AnchorLink
                  href='#TopContainer'
                  className='rounded bg-gray-900 px-3 py-2 text-center text-white hover:bg-gray-700 sm:text-xs lg:px-2 xl:px-3 xl:text-sm xl:font-medium'
                >
                  Unknown_Musicとは
                </AnchorLink>
                <AnchorLink
                  href='#gallery'
                  className='rounded bg-gray-900 px-3 py-2 text-center text-white hover:bg-gray-700 sm:text-xs lg:px-2 xl:px-3 xl:text-sm xl:font-medium'
                >
                  コンテンツ
                </AnchorLink>
                <Link href='/top-contents'>
                  <a className='mr-2 rounded bg-gray-900 px-3 py-2 text-center text-white hover:bg-gray-700 sm:text-xs lg:px-3 xl:px-4 xl:text-sm xl:font-medium'>
                    使ってみる
                  </a>
                </Link>
                <Link href='/login-page'>
                  <a className='rounded bg-indigo-600 px-3 py-2 text-center text-white hover:bg-indigo-700 sm:text-xs md:px-5 lg:px-4 xl:px-3 xl:text-sm xl:font-medium'>
                    ログイン
                  </a>
                </Link>
              </div>
            </nav>
          </div>
          <main className='mx-auto -mt-5 max-w-7xl px-4 sm:mt-5 sm:px-10 md:mt-16 lg:mt-5 lg:px-5 xl:mt-8'>
            <div className='text-center sm:container lg:justify-center lg:text-left xl:pl-10'>
              <h2 className='md:text-1xl font-medium tracking-tight text-gray-400 sm:text-5xl'>
                <div className='md:-pt-20 2xl:center inline-block pt-10 sm:pt-5 md:-mt-16 lg:ml-6 lg:-mt-5 lg:w-2/5 xl:ml-3'>
                  <Image
                    src='/images/logo_name.png'
                    width='400'
                    height='40'
                    objectFit='contain'
                  />
                </div>
                <br />
                <span className='mt-8 block text-2xl text-indigo-500 lg:ml-6 xl:ml-3 xl:inline-block'>
                  知られざる名曲を見つけよう
                </span>
              </h2>
              <p className='mt-5 text-base text-gray-200 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-8 md:mb-8 md:text-xl lg:mx-0 lg:ml-6 xl:ml-3'>
                大好きなあの曲に似た曲を見つけたい。
                <br />
                知らない名曲といっぱい出逢いたい。
                <br />
                音楽をより深く楽しむための無料アプリ。
              </p>
              <div className='mt-10 sm:mt-8 sm:-mb-10 sm:flex sm:justify-center lg:mb-0 lg:justify-start'>
                <div className='rounded-md shadow'>
                  <Link href='/login-page'>
                    <a className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base text-white hover:bg-indigo-700 sm:text-xs md:text-sm lg:ml-6 lg:px-1 xl:ml-1 xl:py-4 xl:px-10'>
                      アカウント登録で利用
                    </a>
                  </Link>
                </div>
                <div className='mt-3 sm:mt-0 sm:ml-3'>
                  <a
                    href='#'
                    className='flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base text-indigo-600 hover:bg-indigo-200 sm:text-xs md:text-sm lg:ml-6 lg:px-1 lg:px-5 xl:ml-1 xl:py-4 xl:px-10'
                  >
                    ゲストユーザーで利用
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className='absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
        <Image
          src='/images/main.jpg'
          alt='Main Photo'
          className='h-80 w-full object-cover sm:h-80 md:h-96 lg:h-full lg:w-full'
          layout='fill'
        />
      </div>
    </div>
  )
}
export default TopWrapper
