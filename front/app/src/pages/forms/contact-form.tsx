import Layout from '../../components/Layout'
import Contact from '../../components/forms/Contact'
import Exit from '../../components/Exit'

const ContactForm: React.FC = () => {
  return (
    <Layout title='Contact-Form'>
      <div className='text-center bg-gray-900 shadow-xl rounded-xl mt-24 mb-10 mx-auto container max-w-md sm:max-w-xl md:max-w-2xl'>
        <Contact />
        <Exit />
      </div>
    </Layout>
  )
}
export default ContactForm
