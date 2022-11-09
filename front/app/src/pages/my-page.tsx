import Layout from '../components/Layout'
import Profile from '../components/Profile'
import { NextPage } from 'next'

const MyPage: NextPage = () => {
  return (
    <Layout title='My-Page'>
      <div className='container mx-auto'>
        <Profile />
      </div>
    </Layout>
  )
}
export default MyPage
