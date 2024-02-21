import { Pagination } from 'swiper/modules';
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination'
import axios from 'axios';

function App() {
 
  const fetchData = () => {
    axios.get('data.json')
    .then((res)=>{
      console.log(res.data)
    })
  }

  return (
    <>
    <header className='bg-[#161D2F]'>
      <nav className='flex justify-between pl-4 pr-4 pt-5 pb-5'>
        <img src="/assets/Movie.svg" alt="MovieImg" />
        <div className='flex gap-5'>
          <img src="/assets/Shape (8).svg" alt="Cube1" />
          <img src="/assets/Shape (9).svg" alt="Cube2" />
          <img src="/assets/Shape (10).svg" alt="TV" />
          <img src="/assets/Bookmark.svg" alt="BookMark" />
        </div>
        <img src="/assets/Oval (22).svg" alt="MenImg" />
      </nav>
    </header>
    <main>
      <section className='pl-4'>
        <form>
            <div className='flex items-center justify-start mt-6'>
              <img className='pr-4' src="/assets/search (2).svg" alt="Loop" />
              <input className='w-[100%] min-h-[50px] bg-transparent text-[gray] text-[16px] font-normal' maxLength={30} type="text" placeholder='Search for movies or TV series'/>
            </div>
        </form>
      </section>
      <section className='pl-4'>
        <div className='mb-4 mt-6'>
          <h2 className='text-[20px] text-white'>Trending</h2>
        </div>
        <div className='text-[white]'>
          <Swiper
          scrollbar
            loop
            spaceBetween={50}
            slidesPerView={1.5}
            pagination={{clickable:true}}
            modules={[Pagination]}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><div className='w-[200px] h-[200px] bg-[red]'>1</div></SwiperSlide>
            <SwiperSlide><div className='w-[200px] h-[200px] bg-[red]'>2</div></SwiperSlide>
            <SwiperSlide><div className='w-[200px] h-[200px] bg-[red]'>3</div></SwiperSlide>
            <SwiperSlide><div className='w-[200px] h-[200px] bg-[red]'>4</div></SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section>
        <button onClick={fetchData}>Clickme</button>
      </section>
    </main>
    </>
  )
}

export default App
