import DialogAlerts from './DialogAlerts'
import Exit from './Exit'
import React, { useState } from 'react'

const Profile: React.FC = () => {
  const [digOpen, setDigOpen] = useState(false) //DialogState
  return (
    <main className='profile-page'>
      <section className='relative py-16 bg-blueGray-200 mt-20'>
        <div className='container mx-auto px-4 max-w-5xl'>
          <div className='relative flex flex-col min-w-0 break-words bg-gray-900 w-full mb-6 shadow-xl rounded-lg'>
            <div className='px-6'>
              <div className='flex flex-wrap justify-center'>
                <div className='hidden lg:block w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center mt-10'>
                  <div className='py-6 px-20 mt-32 sm:mt-0'>
                    <button
                      className='hidden lg:block bg-pink-500 uppercase text-white font-bold shadow-md shadow text-xs px-4 py-4 rounded hover:bg-pink-400 hover:border-pink-400 hover:text-white'
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
                <div className='w-full lg:w-4/12 px-4 lg:order-1 lg:pt-14'>
                  <div className='flex justify-center py-4 lg:pt-4 pt-2'>
                    <div className='mr-4 p-3 text-center'>
                      <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                        22
                      </span>
                      <span className='text-xs text-blueGray-400'>
                        いいねした曲
                      </span>
                    </div>
                    <div className='mr-4 p-3 text-center'>
                      <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                        10
                      </span>
                      <span className='text-sm text-blueGray-400'>
                        後で聞く曲
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-center sm:mt-1 -mt-3'>
                <h3 className='text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2'>
                  ユーザーネーム
                </h3>
                <div className='text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase'>
                  <i className='fas fa-map-marker-alt mr-2 text-lg text-blueGray-400'></i>
                  メールアドレス
                </div>
              </div>
              <div className='container px-5 py-2 mx-auto flex flex-wrap flex-col'>
                <div className='flex mx-auto flex-wrap mb-10'>
                  <a className='px-4 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 inline-flex items-center leading-none hover:bg-gray-100  hover:border-indigo-500 hover:text-indigo-500 tracking-wider rounded-t'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='w-5 h-5 mr-3'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
                    </svg>
                    <p className='text-sm px-4 w-auto whitespace-nowrap'>
                      いいねした楽曲
                    </p>
                  </a>
                  <a className='px-4 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 inline-flex items-center leading-none hover:bg-gray-100  hover:border-indigo-500 hover:text-indigo-500 tracking-wider rounded-t'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='w-5 h-5 mr-3'
                      viewBox='0 0 24 24'
                    >
                      <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                    </svg>
                    <p className='text-sm px-4 w-auto whitespace-nowrap'>
                      後で聴く楽曲
                    </p>
                  </a>
                </div>
                <div className=' flex justify-center items-center'>
                  <div className='bg-gray-500 max-w-sm w-full h-80 mb-8'>
                    <div className='text-center mt-36'>sample</div>
                  </div>
                </div>
                <div className='flex flex-col text-center w-full mb-3'>
                  <p className='lg:w-2/3 md:w-1/2 mx-auto leading-relaxed text-base'>
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

export default Profile
