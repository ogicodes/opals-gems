export default function AboutUs({ FloatingCrystals, FloatingCrystalsTwo }) {
  return (
    <section className='container mx-auto p-8'>
      {/* Header Section */}
      <div className='flex flex-col items-start mb-8'>
        <h2 className='text-4xl font-bold'>About Us</h2>
      </div>

      {/* First Block: Text on the Left, Image on the Right */}
      <div className='flex flex-col lg:flex-row items-center mb-12'>
        <div className='lg:w-3/5 text-lg leading-relaxed'>
          <p className='text-justify'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
            explicabo. dolores amet, dicta sunt ullamq consequuntur magni sequi aliquam laboriosam, esse voluptatem.
            beatae vitae dicta beatae vitae dicta rem volute aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit a eos qui incidt consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam ratione corporis
            suscipit velit in ea voluptate as paraiatur? quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam aycfe nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
            qui quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
          </p>
        </div>
        <div className='lg:w-2/5 mt-8 lg:mt-0 lg:ml-8'>
          <FloatingCrystals />
        </div>
      </div>

      {/* Second Block: Image on the Left, Text on the Right */}
      <div className='flex flex-col lg:flex-row-reverse items-center'>
        <div className='lg:w-3/5 text-lg leading-relaxed'>
          <p className='text-justify'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
            explicabo. dolores amet, dicta sunt ullamq consequuntur magni sequi aliquam laboriosam, esse voluptatem.
            beatae vitae dicta beatae vitae dicta rem volute aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae vitae Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit a eos qui incidt consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam ratione corporis
            suscipit velit in ea voluptate as paraiatur? quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam aycfe nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
            qui quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
          </p>
        </div>
        <div className='lg:w-2/5 mt-8 lg:mt-0 lg:mr-8'>
          <FloatingCrystalsTwo />
        </div>
      </div>
    </section>
  )
}
