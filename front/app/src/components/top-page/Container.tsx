import { ContainerItemProps, ContainerProps } from './types/TopPageTypeProps'

const Container: React.FC<ContainerProps> = ({ container }) => {
  return (
    <section className='body-font mx-20 bg-gray-900 text-gray-200 sm:mt-0 sm:px-6 sm:pb-0 md:pb-0'>
      <div className='container mx-auto flex flex-wrap items-center px-5'>
        {container.map((container: ContainerItemProps) => (
          <div className='relative mx-auto flex w-11/12 pt-8 pb-20 sm:items-center md:w-2/3'>
            <div className='absolute inset-0 flex h-full w-6 items-center justify-center sm:w-6'>
              <div className='pointer-events-none h-full w-1 bg-gray-200'></div>
            </div>
            <div className='title-font relative z-10 mt-10 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-sm font-medium text-white sm:mt-0'>
              {container.number}
            </div>
            <div className='flex flex-grow flex-col pl-6 sm:flex-row md:pl-8'>
              <div className='inline-flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-500'>
                {container.image}
              </div>
              <div className='mt-6 flex-grow text-center sm:mt-0 sm:pl-6 sm:text-left'>
                <h2 className='title-font mb-1 text-xl font-medium text-indigo-500'>
                  {container.title}
                </h2>
                <p className='leading-relaxed'>
                  {container.text01}
                  <br className='block xl:hidden'></br>
                  {container.text02}
                  <br></br>
                  {container.text03}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Container
