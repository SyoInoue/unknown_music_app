import Layout from '../components/Layout'
import Contact from '../components/Contact'
import Exit from '../components/Exit'

const ContactForm: React.FC = () => {
  return (
    <Layout title='Contact-Form'>
      <div className='text-center bg-gray-900 shadow-xl rounded-xl mt-32 mb-16 md:max-w-2xl mx-auto container max-w-md'>
        <Contact />
        <Exit />
      </div>
    </Layout>
  )
}
export default ContactForm
