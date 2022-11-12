import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DialogAlerts from './DialogAlerts'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false) //rightMenuState
  const [thisOpen, setThisOpen] = useState(false) //leftMenuState
  const [digOpen, setDigOpen] = useState(false) //DialogState

  //rightMenu関数
  const handleIsOpenClick = () => {
    {
      setIsOpen(!isOpen)
    }
  }
  //leftMenu関数
  const handleThisOpenClick = () => {
    {
      setThisOpen(!thisOpen)
    }
  }

  return (
    <nav className='fixed left-0 z-50 block w-full bg-gray-900 bg-opacity-95 shadow-2xl'>
      <div className='mx-auto md:mx-20 xl:mx-44'>
        <div className='relative flex h-16 items-center justify-between'>
          {/* ハンバーガーメニュー */}
          <div className='ml-6 block flex flex-row flex-col items-center sm:hidden'>
            <button
              type='button'
              className='bg-opacity-0 p-2 hover:opacity-70'
              id='main-menu'
              onClick={handleThisOpenClick}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </button>
            {thisOpen ? ( //こっから下はdiv要素が一つではないとうまく動かない
              <div className='absolute inset-x-0 ml-6 mt-14 block w-48 space-y-1 rounded-lg bg-gray-900 bg-opacity-95 px-2 pt-2 pb-3 shadow-md sm:hidden'>
                <Link href='/top-contents'>
                  <a className='block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-400 hover:text-gray-200'>
                    メインコンテンツ
                  </a>
                </Link>
                <Link href='/admin-page'>
                  <a className='block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-400 hover:text-gray-200'>
                    運営者情報
                  </a>
                </Link>
                <Link href='/terms-of-service'>
                  <a className='block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-400 hover:text-gray-200'>
                    利用規約
                  </a>
                </Link>
                <Link href='/forms/contact-form'>
                  <a className='block rounded-md px-3 py-2 text-base font-medium text-gray-200 hover:bg-gray-400 hover:text-gray-200'>
                    お問い合わせ
                  </a>
                </Link>
              </div>
            ) : undefined}
          </div>
          {/* PC用メニュー */}
          <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='mr-16 flex flex-shrink-0 items-center hover:opacity-70 sm:mr-0'>
              <div className='flex flex-shrink-0 flex-grow items-center lg:flex-grow-0'>
                <div className='flex w-full items-center justify-between md:w-auto'>
                  <span className='sr-only'>Workflow</span>
                </div>
              </div>
              <Link href='/'>
                <div className='block h-7 w-auto sm:ml-10'>
                  <Image
                    src='/images/logo.png'
                    alt='Workflow'
                    width='60'
                    height='30'
                    objectFit='contain'
                  />
                </div>
              </Link>
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                <Link href='/top-contents'>
                  <a
                    className='rounded-md px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white lg:text-sm'
                    aria-current='page'
                  >
                    メインコンテンツ
                  </a>
                </Link>
                <Link href='/admin-page'>
                  <a className='rounded-md px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white lg:text-sm'>
                    運営者情報
                  </a>
                </Link>
                <Link href='/terms-of-service'>
                  <a className='rounded-md px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white lg:text-sm'>
                    利用規約
                  </a>
                </Link>
                <Link href='/forms/contact-form'>
                  <a
                    href='#'
                    className='rounded-md px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-700 hover:text-white lg:text-sm'
                  >
                    お問い合わせ
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* ユーザーメニュー*/}
          <div className='absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-1'>
            <div className='relative z-30 ml-3 mr-10 md:mr-0'>
              <button
                type='button'
                className='flex rounded-full text-sm text-gray-200 hover:opacity-70 focus:outline-none'
                id='user-menu'
                aria-expanded='false'
                aria-haspopup='true'
                onClick={handleIsOpenClick}
              >
                <span className='sr-only'>Open user menu</span>
                <svg
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  ></path>
                </svg>
              </button>
              {isOpen ? (
                <div className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-gray-100 px-2 py-1 shadow-lg focus:outline-none'>
                  <Link href='/my-page'>
                    <a
                      className='block rounded-md px-3 py-2 text-sm text-gray-900 hover:bg-gray-300'
                      role='menuitem'
                    >
                      マイページ
                    </a>
                  </Link>
                  <button
                    onClick={() => setDigOpen(true)}
                    className='block rounded-md px-3 py-2 text-sm text-gray-900 hover:bg-gray-300'
                    role='menuitem'
                  >
                    プロフィール編集
                  </button>
                  <DialogAlerts
                    open={digOpen}
                    close={() => setDigOpen(false)}
                  />
                  <button
                    onClick={() => setDigOpen(true)}
                    className='block rounded-md px-3 py-2 text-sm text-gray-900 hover:bg-gray-300'
                    role='menuitem'
                  >
                    ログアウト
                  </button>
                </div>
              ) : undefined}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header
