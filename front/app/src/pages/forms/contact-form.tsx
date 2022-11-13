import Layout from '../../components/common/Layout'
import Contact from '../../components/forms/Contact'
import Exit from '../../components/common/Exit'
import { NextPage } from 'next'

const ContactForm: NextPage = () => {
  return (
    <Layout title='Contact-Form'>
      <div className='container mx-auto mt-24 mb-10 w-[350px] max-w-md rounded-xl bg-gray-900 text-center shadow-xl sm:w-full sm:max-w-xl md:max-w-2xl'>
        <Contact />
        <Exit />
      </div>
    </Layout>
  )
}
export default ContactForm
