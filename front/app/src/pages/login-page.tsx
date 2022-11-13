import Auth from '../components/sub-page/Auth'
import Layout from '../components/common/Layout'
import Exit from '../components/common/Exit'
import { NextPage } from 'next'

const LoginPage: NextPage = () => {
  return (
    <Layout title='Login-Page'>
      <div className='container mx-auto mt-28 mb-12 w-[350px] rounded-xl bg-gray-900 text-center shadow-xl sm:w-full sm:max-w-lg sm:py-28 sm:px-24'>
        <Auth />
        <Exit />
      </div>
    </Layout>
  )
}
export default LoginPage
