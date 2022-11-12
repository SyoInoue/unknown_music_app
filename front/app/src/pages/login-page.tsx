import Auth from '../components/sub-page/Auth'
import Layout from '../components/common/Layout'
import Exit from '../components/common/Exit'
import { NextPage } from 'next'

const LoginPage: NextPage = () => {
  return (
    <Layout title='Login-Page'>
      <div className='container mx-auto mt-28 mb-12 rounded-xl bg-gray-900 px-28 py-28 text-center shadow-xl sm:max-w-lg sm:px-24'>
        <Auth />
        <Exit />
      </div>
    </Layout>
  )
}
export default LoginPage
