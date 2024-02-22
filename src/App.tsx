import { Pagination } from 'swiper/modules';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import dataJson from "./data.json";
import { useState } from 'react';




function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showTrendingOnly, setShowTrendingOnly] = useState(false);
  const [showTvOnly, setShowTvOnly] = useState(false);
  const data = dataJson.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    ).filter(movie => !showTrendingOnly || movie.thumbnail.trending).filter(movie => !showTvOnly || movie.category.toLowerCase() !== 'TV Series');
    
    console.log(dataJson)

  return (
    <>
    <header className='bg-[#161D2F] md:rounded-[8px] md:mt-4 md:ml-4 md:mr-4 xl:absolute xl:h-[100%] xl:pl-[18px] xl:pr-[18px] xl:top-[10px]'>
      <nav className='flex justify-between pl-4 pr-4 pt-5 pb-5 xl:flex-col xl:items-center'>
        <img loading='lazy' className='md:w-[32px] xl:pt-8 xl:pb-[75px]' src="/assets/Movie.svg" alt="MovieImg" />
        <div className='flex gap-5 md:gap-6 xl:flex-col xl:gap-7'>
          <img loading='lazy' onClick={() => {setShowTrendingOnly(false); setShowTvOnly(false)}} className='md:w-[20px] xl:cursor-pointer pulse' src="/assets/Shape (8).svg" alt="Cube1" />
          <img loading='lazy' onClick={() => setShowTrendingOnly(true)} className='md:w-[20px] xl:cursor-pointer pulse' src="/assets/Shape (9).svg" alt="Cube2" />
          <img loading='lazy' onClick={() => setShowTvOnly(true)} className='md:w-[20px] xl:cursor-pointer pulse' src="/assets/Shape (10).svg" alt="TV" />
          <img loading='lazy' className='md:w-[20px] xl:cursor-pointer pulse' src="/assets/Bookmark.svg" alt="BookMark" />
        </div>
        <img loading='lazy' className='md:w-[32px] xl:absolute bottom-8' src="/assets/Oval (22).svg" alt="MenImg" />
      </nav>
    </header>
    <main>
      <section className='ml-4 xl:ml-[160px] xl:mt-[40px]'>
        <form onSubmit={(e)=>{
          e.preventDefault()
        }}>
            <div className='flex items-center justify-start mt-6'>
              <img loading='lazy' className='pr-4 md:w-[53px] md:pr-5' src="/assets/search (2).svg" alt="Loop" />
              <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className='w-[100%] min-h-[50px] bg-transparent text-[gray] text-[16px] font-normal md:text-[24px]' maxLength={30} type="text" placeholder='Search for movies or TV series'/>
            </div>
        </form>
      </section>
      <section className='pl-4 '>
        <div className='mb-4 mt-6 xl:ml-[150px]'>
          <h2 className='text-[20px] text-white md:text-[32px]'>Trending</h2>
        </div>
        {!showTrendingOnly&&<div className='text-[white]'>
          <Swiper
          className='xl:min-w-[1000px] xl:ml-[150px] xl:mr-[150px]'
            loop
            spaceBetween={50}
            color='gray'
            slidesPerView={1.6}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            {data.slice(0,5).map((item, index) => (
              <SwiperSlide key={index}>
              <div className='w-[240px] '>
                <div className='relative'>
                  <img loading='lazy' className='rounded-[8px] ph' src={item.thumbnail.trending?.small} alt={item.title} />
                </div>
              <div className='absolute bottom-4 pl-4 flex gap-1 md:gap-2 md:bottom-5'>
                <h3 className='text-[12px] opacity-[0.75] font-normal md:text-[15px]'>{item.year}</h3>
                <h1 className='relative bottom-4 text-[25px] opacity-[0.75] md:bottom-[14px]'>.</h1>
                <img loading='lazy' className='relative bottom-[11px] md:bottom-[8px]' src="/assets/Shape 2 (1).svg" alt="Cube2" />
                <h3 className='text-[12px] opacity-[0.75] font-normal md:text-[15px]'>{item.category}</h3>
                <h1 className='relative bottom-4 text-[25px] opacity-[0.75] md:bottom-[14px]'>.</h1>
                <h3 className='text-[12px] opacity-[0.75] font-normal md:text-[15px]'>{item.rating}</h3>
              </div>
              <div className='absolute bottom-3 pl-4 text-[15px] font-normal md:text-[24px] md:bottom-1'>
                {item.title}
              </div>
              </div>
          </SwiperSlide>
            ))}
          </Swiper>
        </div>}
        <h2 className='text-[28px] text-white mt-6 mb-6 md:text-[32px] xl:ml-[150px]'>Recommended for you</h2>
      </section>

      <section  className='ml-4 xl:ml-[165px] xl:mr-[60px] gridT'>
        {data.map((el,index)=>(
          <div key={index}>
            <img loading='lazy' className='rounded-[8px]' src={el.thumbnail.regular?.small} alt={el.title} />
            <div>
              <div className='flex gap-2 mt-2'>
                <h1 className='text-[12px] opacity-[0.75] text-white md:text-[15px]'>{el.year}</h1>
                <h1 className='relative bottom-4 text-[25px] opacity-[0.75] text-white md:bottom-[14px]'>.</h1>
                <img loading='lazy' className='relative bottom-[11px] md:bottom-[8px]' src="/assets/Shape 2 (1).svg" alt="Cube2" />
                <h1 className='text-[12px] opacity-[0.75] text-white md:text-[15px]'>{el.category}</h1>
                <h1 className='relative bottom-4 text-[25px] opacity-[0.75] text-white md:bottom-[14px]'>.</h1>
                <h1 className='text-[12px] opacity-[0.75] text-white md:text-[15px]'>{el.rating}</h1>
              </div>
              <div className='relative bottom-[15px] mb-4'>
                <h1 className='text-[14px] text-white md:text-[18px]'>{el.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
    </>
  )
}

export default App;
