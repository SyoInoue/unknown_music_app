import Auth from '../components/Auth'
import Layout from '../components/Layout'
import Exit from '../components/Exit'

const LoginPage: React.FC = () => {
  return (
    <Layout title='Login-Page'>
      <div className='text-center bg-gray-900 shadow-xl rounded-xl sm:px-24 px-28 py-28 mt-28 mb-12 sm:max-w-lg mx-auto container'>
        <Auth />
        <Exit />
      </div>
    </Layout>
  )
}
export default LoginPage
