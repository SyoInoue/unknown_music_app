import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import InputTypeProps from './types/InputTypeProps'
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
  } = useForm<InputTypeProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: input.name,
      email: input.email,
      text: input.text,
    },
  })
  //フォーム送信処理
  const onSubmit: SubmitHandler<InputTypeProps> = (data) => {
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
    <section className='body-font relative mt-10 text-gray-100'>
      <div className='mb-8 flex w-full flex-col text-center'>
        <h1 className='mb-4 text-xl font-bold text-gray-100'>お問い合わせ</h1>
        <p className='mx-10 text-base leading-relaxed md:mx-0'>
          お仕事の依頼、バグの修正、アプリの感想等
          <br />
          なんでもおまちしております。
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mx-auto w-3/4'>
          <div className='-m-2 flex flex-wrap'>
            <div className='w-1/2 p-2'>
              <div className='relative'>
                <label
                  htmlFor='name'
                  className={`text-sm leading-7 ${
                    errors.name ? 'text-red-500' : 'text-gray-100'
                  }`}
                >
                  ● お名前
                </label>
                <input
                  className={`w-full rounded bg-gray-200 py-1 px-3 text-base leading-8 text-black outline-none focus:bg-white ${
                    errors.name
                      ? 'ring-2 ring-red-500'
                      : 'focus:ring-4 focus:ring-indigo-700'
                  }`}
                  type='text'
                  {...register('name')}
                />
              </div>
              <p className='mt-2 text-sm text-red-600'>
                {errors.name?.message}
              </p>
            </div>
            <div className='w-1/2 p-2'>
              <div className='relative'>
                <label
                  htmlFor='email'
                  className={`text-sm leading-7 ${
                    errors.email ? 'text-red-500' : 'text-gray-100'
                  }`}
                >
                  ● メールアドレス
                </label>
                <input
                  className={`w-full rounded bg-gray-200 py-1 px-3 text-base leading-8 text-black outline-none focus:bg-white ${
                    errors.email
                      ? 'ring-2 ring-red-500'
                      : 'focus:ring-4 focus:ring-indigo-700'
                  }`}
                  type='email'
                  {...register('email')}
                />
                <p className='mt-2 text-sm text-red-600'>
                  {errors.email?.message}
                </p>
              </div>
            </div>
            <div className='w-full p-2'>
              <div className='relative'>
                <label
                  htmlFor='message'
                  className={`text-sm leading-7 ${
                    errors.text ? 'text-red-500' : 'text-gray-100'
                  }`}
                >
                  ● 本文
                </label>
                <textarea
                  className={`h-60 w-full rounded bg-gray-200 py-1 px-3 text-base leading-6 text-black outline-none focus:bg-white ${
                    errors.text
                      ? 'ring-2 ring-red-500'
                      : 'focus:ring-4 focus:ring-indigo-700'
                  }`}
                  id='text'
                  {...register('text')}
                ></textarea>
                <p className='mt-1 text-sm text-red-600'>
                  {errors.text?.message}
                </p>
              </div>
            </div>
            <div className='w-full p-2'>
              <button
                className='mx-auto flex rounded border-0 bg-indigo-700 py-4 px-10 text-lg text-gray-100 hover:bg-indigo-600 focus:outline-none'
                type='submit'
              >
                <div className='text-sm'>入力内容のご確認</div>
              </button>
            </div>
            <div className='mt-8 hidden w-full border-t border-gray-200 p-2 pt-8 text-center sm:block'>
              <div className='text-gray-100'>funnyfacee7777@gmail.com</div>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}
export default Contact
