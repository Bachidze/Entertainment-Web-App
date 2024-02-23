import { Autoplay, Pagination } from 'swiper/modules';
import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import dataJson from "./data.json";
import { useState, useEffect } from 'react';
import Header from './componentts/Header';
import Form from './componentts/Form';
import Film from './componentts/Film';

function App() {
  const [showTrendingOnly, setShowTrendingOnly] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [slidesPerView, setSlidesPerView] = useState<number>(1.6); // Initial value

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth >= 1440) {
        setSlidesPerView(2.7);
      } else {
        setSlidesPerView(1.6);
      }
    };

    
    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  const data = dataJson.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter((movie) => (!showTrendingOnly || movie.thumbnail.trending));

  return (
    <>
    <Header setShowTrendingOnly={setShowTrendingOnly} />
   
    <main>
      <Form searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <section className='pl-4 '>
        <div className='mb-4 mt-6 xl:ml-[150px]'>
          <h2 className='text-[20px] text-white md:text-[32px]'>Trending</h2>
        </div>
        {!showTrendingOnly && (
          <div className='text-[white]'>
            <Swiper
              className='xl:min-w-[1000px] xl:ml-[150px] xl:mr-[150px] '
              loop
              spaceBetween={50}
              color='gray'
              slidesPerView={slidesPerView}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 2500 }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {data.slice(0, 5).map((item, index) => (
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
          </div>
        )}
        <h2 className='text-[28px] text-white mt-6 mb-6 md:text-[32px] xl:ml-[150px]'>Recommended for you</h2>
      </section>

      <Film data={data} />
    </main>
    </>
  )
}

export default App;
