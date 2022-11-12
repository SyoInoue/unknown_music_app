import DialogAlerts from '../common/DialogAlerts'
import Exit from '../common/Exit'
import React, { useState } from 'react'

const MyProfile: React.FC = () => {
  const [digOpen, setDigOpen] = useState(false) //DialogState
  return (
    <main title='Profile-Page'>
      <section className='relative mt-16 py-10'>
        <div className='container mx-auto max-w-5xl px-4'>
          <div className='relative flex w-full min-w-0 flex-col break-words rounded-lg bg-gray-900 shadow-xl'>
            <div className='px-6'>
              <div className='flex flex-wrap justify-center'>
                <div className='mt-10 hidden w-full px-4 lg:order-3 lg:block lg:w-4/12 lg:self-center lg:text-right'>
                  <div className='mt-32 py-6 px-20 sm:mt-0'>
                    <button
                      className='hidden rounded bg-pink-500 px-4 py-4 text-xs font-bold uppercase text-white shadow-md shadow hover:border-pink-400 hover:bg-pink-400 hover:text-white lg:block'
                      type='button'
                      onClick={() => setDigOpen(true)}
                    >
                      マイページ編集
                    </button>
                    <DialogAlerts
                      open={digOpen}
                      close={() => setDigOpen(false)}
                    />
                  </div>
                </div>
                <div className='w-full px-4 lg:order-1 lg:w-4/12 lg:pt-14'>
                  <div className='flex justify-center py-4 pt-2 lg:pt-4'>
                    <div className='mr-4 p-3 text-center'>
                      <span className='text-blueGray-600 block text-xl font-bold uppercase tracking-wide'>
                        22
                      </span>
                      <span className='text-blueGray-400 text-xs'>
                        いいねした曲
                      </span>
                    </div>
                    <div className='mr-4 p-3 text-center'>
                      <span className='text-blueGray-600 block text-xl font-bold uppercase tracking-wide'>
                        10
                      </span>
                      <span className='text-blueGray-400 text-sm'>
                        後で聞く曲
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='-mt-3 text-center sm:mt-1'>
                <h3 className='text-blueGray-700 mb-2 mb-2 text-4xl font-semibold leading-normal'>
                  ユーザーネーム
                </h3>
                <div className='text-blueGray-400 mt-0 mb-2 text-sm font-bold uppercase leading-normal'>
                  <i className='fas fa-map-marker-alt text-blueGray-400 mr-2 text-lg'></i>
                  メールアドレス
                </div>
              </div>
              <div className='container mx-auto flex flex-col flex-wrap px-5 py-2'>
                <div className='mx-auto mb-10 flex flex-wrap'>
                  <a className='inline-flex w-1/2 items-center justify-center rounded-t border-b-2 px-4 py-3 leading-none tracking-wider hover:border-indigo-500  hover:bg-gray-100 hover:text-indigo-500 sm:w-auto sm:justify-start'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='mr-3 h-5 w-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                    </svg>
                    <p className='w-auto whitespace-nowrap px-4 text-sm'>
                      いいねした楽曲
                    </p>
                  </a>
                  <a className='inline-flex w-1/2 items-center justify-center rounded-t border-b-2 px-4 py-3 leading-none tracking-wider hover:border-indigo-500  hover:bg-gray-100 hover:text-indigo-500 sm:w-auto sm:justify-start'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='mr-3 h-5 w-5'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                    </svg>
                    <p className='w-auto whitespace-nowrap px-4 text-sm'>
                      後で聴く楽曲
                    </p>
                  </a>
                </div>
                <div className=' flex items-center justify-center'>
                  <div className='mb-8 h-80 w-full max-w-sm bg-gray-500'>
                    <div className='mt-36 text-center'>sample</div>
                  </div>
                </div>
                <div className='mb-3 flex w-full flex-col text-center'>
                  <p className='mx-auto text-base leading-relaxed md:w-1/2 lg:w-2/3'>
                    Whatever cardigan tote bag tumblr hexagon brooklyn
                    asymmetrical gentrify, subway tile poke farm-to-table.
                    Franzen you probably selfies heirloom prism food truck ugh
                    squid celiac humblebrag.
                  </p>
                </div>
                <Exit />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MyProfile
