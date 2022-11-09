import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { inputState } from '../../components/forms/inputAtom'
import Layout from '../../components/Layout'
import axios from 'axios'
import { FormEventHandler } from 'react'
import { useRouter } from 'next/router'

const ConfirmPage: React.FC = () => {
  const input = useRecoilValue(inputState)
  const router = useRouter()

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault() //formが持つデフォルトで現在のページのリロードをキャンセルする。
    axios
      .post('https://ssgform.com/s/ZFQC2IdITqsR', input, {
        headers: {
          'content-type': 'multipart/form-data', //axiosでフォーム送信する時に必要なheader情報
        },
      })
      .then(() => {
        router.push('/forms/contact-complete')
      })

      .catch((err) => {
        console.log('err:', err)
      })
  }

  return (
    <Layout title='Confirm-Page'>
      <section className='flex justify-center items-center mx-auto bg-gray-900 shadow-xl container rounded-xl mt-24 mb-10 max-w-md sm:max-w-xl md:max-w-2xl'>
        <div className='text-center px-14 sm:px-0'>
          <form onSubmit={onSubmit}>
            <ul className='mt-14 px-10 max-w-md mx-auto'>
              <li>
                <span>
                  <div>● お名前</div>
                  <div className=''>{input.name}</div>
                </span>
              </li>
              <li>
                <span>
                  <div className='mt-1'>● メール</div>
                  <div className=''>{input.email}</div>
                </span>
              </li>
              <li>
                <span>
                  <div className='mt-1'>● 本文</div>
                  <div className='break-words'>{input.text}</div>
                </span>
              </li>
            </ul>
            <div className='flex my-10'>
              <div className='flex mr-14 mx-auto text-gray-100 bg-indigo-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                <Link href='./contact-form'>修正する</Link>
              </div>
              <button
                className='flex mx-auto text-gray-100 bg-indigo-700 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                type='submit'
              >
                送信
              </button>
            </div>
          </form>
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

export default ConfirmPage
