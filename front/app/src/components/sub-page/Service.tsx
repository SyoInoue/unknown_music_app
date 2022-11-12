import { ServiceItemProps, ServiceProps } from './types/SubPageTypeProps'

const Service: React.FC<ServiceProps> = ({ service }) => {
  return (
    <>
      {service.map((service: ServiceItemProps) => (
        <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
          <div className='h-5/6 rounded-[20px] bg-gray-900 p-10 shadow-md md:px-5'>
            <h4 className='text-dark -mb-16 text-xl font-semibold underline'>
              {service.title}
            </h4>
            <p className='text-body-color mt-20 mb-10 text-sm'>
              {service.text01}
              <br></br>
              {service.text02}
              <br></br>
              {service.text03}
              <br></br>
              {service.text04}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}
export default Service
