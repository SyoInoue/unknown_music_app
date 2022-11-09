import Link from 'next/link'
import Layout from '../../components/Layout'
import { NextPage } from 'next'

const ContactComplete: NextPage = () => {
  setTimeout(() => {
    window.location.href = '/'
  }, 3 * 1000)
  return (
    <Layout title='Contact-Complete'>
      <section className='flex justify-center items-center mx-auto bg-gray-900 shadow-xl container rounded-xl mt-24 mb-10 max-w-md sm:max-w-xl md:max-w-2xl'>
        <div className='text-center px-14 sm:px-0'>
          <ul className='mt-14'>
            <li>
              <span>
                <p>お問い合わせありがとうございました。</p>
                <p>ページは3秒後にTopPageへ自動遷移します。</p>
                <p>
                  切り替わらない場合はこちらを
                  <Link href='/'>
                    <a className='underline hover:opacity-50'>クリック</a>
                  </Link>
                  してください。
                </p>
              </span>
            </li>
          </ul>
          <div className='mb-14'>
            <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center hidden sm:block'>
              <div className='text-gray-100'>funnyfacee7777@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactComplete
