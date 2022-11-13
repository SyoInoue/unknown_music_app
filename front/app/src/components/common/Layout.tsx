import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { MyComponentProps } from './types/CommonTypeProps'

//Layoutコンポーネントの作成。全体のlayout。引数にchildren, title
const Layout: React.FC<MyComponentProps> = ({
  children,
  title = 'Unknown Music',
}) => {
  return (
    <div className='mx-auto flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-600 to-purple-900 font-mono text-white'>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <section id='header'>
          <Header />
        </section>
      </header>
      <main className='flex max-w-screen-sm flex-1 sm:w-screen sm:max-w-screen-xl'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default Layout
