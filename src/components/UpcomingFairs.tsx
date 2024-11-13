import { ContainerScroll } from '@/components/ui/container-scroll-animation'

const fairsList = [
  {
    date: 'May 12, 2022',
    location: 'Los Angeles, California',
    url: 'https://www.example.com/los-angeles-fair',
  },
  {
    date: 'June 3, 2022',
    location: 'New York City, New York',
    url: 'https://www.example.com/new-york-fair',
  },
  {
    date: 'July 22, 2022',
    location: 'Chicago, Illinois',
    url: 'https://www.example.com/chicago-fair',
  },
  {
    date: 'August 15, 2022',
    location: 'Miami, Florida',
    url: 'https://www.example.com/miami-fair',
  },
]

export default function UpcomingFairs() {
  return (
    <div className='flex flex-col items-start lg:w-[70%]'>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className='text-6xl  font-bold bg-gradient-to-r from-pastelPink via-pastelBlue to-pastelBeige text-transparent bg-clip-text animate-gradient-flow'>
              Where You Can <br />
              <span className='text-6xl  md:text-8xl font-bold mt-1 leading-none bg-gradient-to-r from-pastelPink via-pastelBlue to-pastelBeige text-transparent bg-clip-text animate-gradient-flow'>
                Find Us
              </span>
            </h1>
          </>
        }
      >
        <div className='flex flex-col gap-8'>
          {fairsList.map((fair, index) => (
            <a
              key={index}
              href={fair.url}
              className='p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md transition duration-200 hover:shadow-lg'
            >
              <div className='flex items-center justify-between w-full'>
                <p className='text-lg font-mono font-regular text-black dark:text-white'>{fair.date}</p>
                <p className='text-lg font-mono font-regular text-black dark:text-white'>{fair.location}</p>
                <a href={fair.url} className='text-lg font-mono font-regular text-blue-500 dark:text-blue-300'>
                  Learn More
                </a>
              </div>
            </a>
          ))}
        </div>
      </ContainerScroll>
    </div>
  )
}
