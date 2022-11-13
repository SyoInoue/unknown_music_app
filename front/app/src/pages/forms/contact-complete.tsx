import Link from 'next/link'
import Layout from '../../components/common/Layout'
import { NextPage } from 'next'

const ContactComplete: NextPage = () => {
  setTimeout(() => {
    window.location.href = '/'
  }, 3 * 1000)
  return (
    <Layout title='Contact-Complete'>
      <section className='container mx-auto mt-24 mb-10 flex w-[350px] max-w-md items-center justify-center rounded-xl bg-gray-900 shadow-xl sm:w-full sm:max-w-xl md:max-w-2xl'>
        <div className='px-14 text-center sm:px-0'>
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
            <div className='mt-8 hidden w-full border-t border-gray-200 p-2 pt-8 text-center sm:block'>
              <div className='text-gray-100'>funnyfacee7777@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ContactComplete
