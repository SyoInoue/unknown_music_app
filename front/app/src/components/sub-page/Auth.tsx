//Authは認証。
//必要なモジュールのインポート
import { useState } from 'react' //ReactHooksのuseState(コンポーネントが内部で保持する「状態」)
import { useRouter } from 'next/router' //next.jsからuseRouter
import Cookie from 'universal-cookie' //universal-cookieからCookie
import Image from 'next/image'
import DialogAlerts from '../common/DialogAlerts'

//取得したJWTトークンをCookieに格納する。
const cookie = new Cookie()

const Auth: React.FC = () => {
  const router = useRouter() //useRouterの実行。routerは関数の中からページ遷移をしたい場合に使うことができる
  const [email, setEmail] = useState('') //useStateでlocalStateを定義する。
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true) //ログイン、レジスターモードを定義するState
  const [digOpen, setDigOpen] = useState(false) //DialogState

  //ログイン処理。ログイン用の関数
  const login = async () => {
    try {
      //例外が発生した場合は下のcatchで取得しalertでerrorを出す。
      await fetch(
        //JWTトークンの取得
        `${process.env.NEXT_PUBLIC_REST_API_URL}api/v1/auth/sign_in`,
        {
          method: 'POST',
          body: JSON.stringify({ email: email, password: password }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
        //fetchの後処理
        .then((res) => {
          //上のfetchの結果をresで受け取る
          if (res.status === 400) {
            throw 'authentication failed'
          } else if (res.ok) {
            return res.json()
          }
        })
        .then((data) => {
          //取得したアクセストークンをcookieにセット
          const options = { path: '/' }
          cookie.set('access-token', data.access, options)
        })
      //上記の処理が成功した場合...
      router.push('/top-contents') //mainpageに自動遷移
    } catch (err) {
      alert(err)
    }
  }

  //フォームの処理。submitボタンが押された時に呼び出される関数
  const authUser = async (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault() //自動リロードを防ぐ
    if (isLogin) {
      login()
    } else {
      try {
        await fetch(
          `${process.env.NEXT_PUBLIC_REST_API_URL}api/v1/auth/sign_in`,
          {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: {
              'Content-Type': 'application/json',
            },
          },
        ).then((res) => {
          if (res.status === 400) {
            throw 'authentication failed'
          }
        })
        login()
      } catch (err) {
        alert(err)
      }
    }
  }

  return (
    <div className='my-0 mt-20 sm:mt-0'>
      <div>
        <div className='flex items-center justify-center'>
          <Image
            src='/images/logo.png'
            alt='Workflow'
            width='80'
            height='50'
            objectFit='contain'
          />
        </div>
        <h2 className='mt-8 text-center text-3xl font-extrabold text-white'>
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
      </div>
      <form className='mx-10 mt-8 space-y-6 sm:mx-0' onSubmit={authUser}>
        <input type='hidden' name='remember' value='true' />
        <div className='-space-y-px rounded-md shadow-sm'>
          <div>
            <input
              id='email'
              type='email'
              autoComplete='email'
              required
              className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 text-xs text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
              placeholder='email address'
              value={email}
              onChange={(e) => {
                //タイピングで値を変化させた時。
                setEmail(e.target.value)
              }}
            />
          </div>
          <div>
            <input
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-3 text-xs text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
              placeholder='Password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='text-sm'>
            <span
              onClick={() => setIsLogin(!isLogin)}
              className='cursor-pointer font-medium text-white hover:text-gray-500'
            >
              ログイン or アカウント作成
            </span>
          </div>
        </div>

        <div>
          <DialogAlerts open={digOpen} close={() => setDigOpen(false)} />
          <button
            type='submit'
            className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            onClick={() => setDigOpen(true)}
          >
            <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
            {isLogin ? 'ログイン' : 'アカウント作成'}
          </button>
        </div>
      </form>
    </div>
  )
}
export default Auth
