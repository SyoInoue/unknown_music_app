import Image from 'next/image'

const TopContainer: React.FC = () => {
  return (
    <section className='body-font mx-3 rounded-t-xl bg-gray-900 pb-10 text-gray-200 sm:mx-20 sm:mt-0 sm:px-6 sm:pb-16 md:pb-10'>
      <h1 className='pt-20 text-center text-3xl text-indigo-500 lg:text-4xl'>
        Unknown Musicとは
      </h1>
      <div className='container mx-auto px-5'>
        <div className='mx-auto w-full text-center lg:w-3/4 xl:w-1/2'>
          <div className='mb-6 mt-6 inline-block text-gray-400'>
            <Image
              src='/images/container_image.png'
              width='150'
              height='150'
              objectFit='contain'
            />
          </div>
          <p className='leading-relaxed lg:text-lg'>
            世界には人に知られていない隠れた名曲がたくさん存在します。<br></br>
            楽曲自体は素晴らしいのに、中々表舞台にでてこない曲や、<br></br>
            ハマる人にはハマる少し癖のある名曲等、<br></br>
            普段出会えない音楽達との出会いの場を提供する、<br></br>
            そんな検索エンジン型の音楽アプリです。
          </p>
          <span className='mt-8 inline-block h-1 w-10 rounded bg-indigo-500'></span>
        </div>
      </div>
    </section>
  )
}
export default TopContainer
