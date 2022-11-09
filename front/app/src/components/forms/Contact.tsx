import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import InputProps from './inputProps'
import { useRecoilState } from 'recoil'
import { inputState } from './inputAtom'
import Router from 'next/router'

const Contact: React.FC = () => {
  //recoilのカスタムフック
  const [input, setInput] = useRecoilState(inputState)
  //Yupのスキーマ定義
  const schema = yup.object().shape({
    name: yup.string().required('※名前は必須項目です'),
    email: yup
      .string()
      .email('※メールアドレスの形式が不正です')
      .required('※メールアドレスは必須項目です'),
    text: yup
      .string()
      .required('※本文を入力してください')
      .min(8, '※本文は8文字以上で入力してください')
      .max(500, '※本文は500文字以上で入力してください'),
  })
  //useFormにスキーマを読み込ませる処理
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: input.name,
      email: input.email,
      text: input.text,
    },
  })
  //フォーム送信処理
  const onSubmit: SubmitHandler<InputProps> = (data) => {
    console.debug(data),
      setInput((currentInput) => ({
        ...currentInput,
        ...{
          name: data.name,
          email: data.email,
          text: data.text,
        },
      }))
    Router.push('../forms/confirm-page')
  }

  return (
    <section className='text-gray-100 body-font relative mt-10'>
      <div className='flex flex-col text-center w-full mb-8'>
        <h1 className='text-xl mb-4 text-gray-100 font-bold'>お問い合わせ</h1>
        <p className='leading-relaxed text-base mx-10 md:mx-0'>
          お仕事の依頼、バグの修正、アプリの感想等
          <br />
          なんでもおまちしております。
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-3/4 mx-auto'>
          <div className='flex flex-wrap -m-2'>
            <div className='p-2 w-1/2'>
              <div className='relative'>
                <label
                  htmlFor='name'
                  className={`leading-7 text-sm ${
                    errors.name ? 'text-red-500' : 'text-gray-100'
                  }`}
                >
                  ● お名前
                </label>
                <input
                  className={`w-full bg-gray-200 rounded focus:bg-white text-base outline-none text-black py-1 px-3 leading-8 ${
                    errors.name
                      ? 'ring-red-500 ring-2'
                      : 'focus:ring-indigo-700 focus:ring-4'
                  }`}
                  type='text'
                  {...register('name')}
                />
              </div>
              <p className='mt-2 text-sm text-red-600'>
                {errors.name?.message}
              </p>
            </div>
            <div className='p-2 w-1/2'>
              <div className='relative'>
                <label
                  htmlFor='email'
                  className={`leading-7 text-sm ${
                    errors.email ? 'text-red-500' : 'text-gray-100'
                  }`}
                >
                  ● メールアドレス
                </label>
                <input
                  className={`w-full bg-gray-200 rounded focus:bg-white text-base outline-none text-black py-1 px-3 leading-8 ${
                    errors.email
                      ? 'ring-red-500 ring-2'
                      : 'focus:ring-indigo-700 focus:ring-4'
                  }`}
                  type='email'
                  {...register('email')}
                />
                <p className='mt-2 text-sm text-red-600'>
                  {errors.email?.message}
                </p>
              </div>
            </div>
            <div className='p-2 w-full'>
              <div className='relative'>
                <label
                  htmlFor='message'
                  className={`leading-7 text-sm ${
                    errors.text ? 'text-red-500' : 'text-gray-100'
                  }`}
                >
                  ● 本文
                </label>
                <textarea
                  className={`w-full bg-gray-200 rounded focus:bg-white text-base outline-none text-black py-1 px-3 leading-6 h-60 ${
                    errors.text
                      ? 'ring-red-500 ring-2'
                      : 'focus:ring-indigo-700 focus:ring-4'
                  }`}
                  id='text'
                  {...register('text')}
                ></textarea>
                <p className='mt-1 text-sm text-red-600'>
                  {errors.text?.message}
                </p>
              </div>
            </div>
            <div className='p-2 w-full'>
              <button
                className='flex mx-auto text-gray-100 bg-indigo-700 border-0 py-4 px-10 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                type='submit'
              >
                <div className='text-sm'>入力内容のご確認</div>
              </button>
            </div>
            <div className='p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center hidden sm:block'>
              <div className='text-gray-100'>funnyfacee7777@gmail.com</div>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}
export default Contact
