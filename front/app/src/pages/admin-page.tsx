import Layout from '../components/common/Layout'
import Image from 'next/image'
import Exit from '../components/common/Exit'
import { NextPage } from 'next'

const AdminPage: NextPage = () => {
  return (
    <Layout title='Admin-Page'>
      <section className='container mx-auto mt-28 mb-12 w-[350px] rounded-xl bg-gray-900 shadow-xl sm:w-full sm:max-w-lg sm:px-24'>
        <div className='mx-auto text-center'>
          <div className='mt-10'>
            <p className='text-xl font-bold text-white'>運営者情報</p>
          </div>
          <div className='mt-4 flex justify-center'>
            <Image
              className='rounded-full'
              src='/images/avatar.jpg'
              width='80'
              height='80'
              alt='Avatar'
            />
          </div>
          <div className='mt-4 text-center'>
            <p className='font-bold text-white'>名前</p>
            <p className='text-md mt-2 text-gray-200'>Syo</p>
            <p className='mt-3 font-bold text-white'>自己紹介</p>
            <ul className='text-md mt-2 text-gray-200'>
              <li>初めまして。翔と申します。</li>
              <li>たくさんアプリを使って頂いて、</li>
              <li>感想など頂けると嬉しいです。</li>
              <li>よろしくお願い致します！</li>
            </ul>
            <p className='mt-3 font-bold text-white'>メールアドレス</p>
            <p className='text-md mt-2 text-gray-200'>
              funnyfacee7777@gmail.com
            </p>
            <p className='mt-3 font-bold text-white'>誕生日</p>
            <p className='text-md mt-2 text-gray-200'>1993-03-29</p>
          </div>
          <Exit />
        </div>
      </section>
    </Layout>
  )
}
export default AdminPage
