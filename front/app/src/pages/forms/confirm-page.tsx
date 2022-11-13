import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { inputState } from '../../components/forms/inputAtom'
import Layout from '../../components/common/Layout'
import axios from 'axios'
import { FormEventHandler } from 'react'
import { useRouter } from 'next/router'
import { NextPage } from 'next'

const ConfirmPage: NextPage = () => {
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
      <section className='container mx-auto mt-24 mb-10 flex w-[350px] max-w-md items-center justify-center rounded-xl bg-gray-900 shadow-xl sm:w-full sm:max-w-xl md:max-w-2xl'>
        <div className='px-7 text-center sm:px-0'>
          <form onSubmit={onSubmit}>
            <ul className='mx-auto mt-14 max-w-md px-10'>
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
            <div className='my-10 flex'>
              <div className='mx-auto mr-14 flex rounded border-0 bg-indigo-700 py-2 px-8 text-lg text-gray-100 hover:bg-indigo-600 focus:outline-none'>
                <Link href='./contact-form'>修正する</Link>
              </div>
              <button
                className='mx-auto flex rounded border-0 bg-indigo-700 py-2 px-8 text-lg text-gray-100 hover:bg-indigo-600 focus:outline-none'
                type='submit'
              >
                送信
              </button>
            </div>
          </form>
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

export default ConfirmPage
