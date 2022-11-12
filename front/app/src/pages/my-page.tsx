import Layout from '../components/common/Layout'
import MyProfile from '../components/sub-page/MyProfile'
import { NextPage } from 'next'

const MyPage: NextPage = () => {
  return (
    <Layout title='My-Page'>
      <div className='container mx-auto'>
        <MyProfile />
      </div>
    </Layout>
  )
}
export default MyPage
