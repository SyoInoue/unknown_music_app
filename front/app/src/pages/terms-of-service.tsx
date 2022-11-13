import Exit from '../components/common/Exit'
import Layout from '../components/common/Layout'
import Service from '../components/sub-page/Service'
import { NextPage } from 'next'
import ServiceObject from '../object/service-object'

const TermsOfService: NextPage = () => {
  return (
    <Layout title='Terms-Of-Service'>
      <section className='flex pt-28'>
        <div className=''>
          <div className='mx-auto flex w-[350px] max-w-sm flex-wrap sm:mt-10 sm:w-full sm:max-w-screen-sm lg:-mt-3'>
            <div className='mb-16 mt-5 w-full rounded-[20px] bg-gray-900 px-4 shadow-md sm:-mt-3'>
              <div className='mx-auto my-6 max-w-[510px] text-center lg:mb-6 lg:mt-5'>
                <span className='text-primary mb-2 block text-lg font-semibold text-gray-100'>
                  Terms Of Service
                </span>
                <h2 className='text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]'>
                  利用規約
                </h2>
                <p className='text-body-color mx-10 text-sm text-gray-100'>
                  この利用規約（以下、「本規約」といいます。）は、（以下、「当サービス」といいます。）
                  <br></br>
                  がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。
                  <br></br>
                  登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
                </p>
              </div>
            </div>
          </div>
          <div className='mx-10 flex flex-wrap sm:mx-0 sm:-mt-5'>
            <Service service={ServiceObject} />
          </div>
          <Exit />
        </div>
      </section>
    </Layout>
  )
}
export default TermsOfService
