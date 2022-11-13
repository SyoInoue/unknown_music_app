import Layout from '../components/common/Layout'
import TopWrapper from '../components/top-page/TopWrapper'
import TopContainer from '../components/top-page/TopContainer'
import Container from '../components/top-page/Container'
import Gallery from '../components/top-page/Gallery'
import { NextPage } from 'next'
import ContainerObject from '../object/container-object'

const Home: NextPage = () => {
  return (
    <Layout title='UnknownMusic'>
      <div className='container flex flex-col items-center sm:max-w-7xl'>
        <div className='container mt-24'>
          <TopWrapper />
        </div>
        <div className='container mt-6'>
          <section id='TopContainer'>
            <TopContainer />
          </section>
          <section className='mb-6' id='container'>
            <Container container={ContainerObject} />
          </section>
        </div>
        <div className='container'>
          <section id='gallery'>
            <Gallery />
          </section>
        </div>
      </div>
    </Layout>
  )
}
export default Home
