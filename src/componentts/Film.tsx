import React from 'react';

interface FilmProps {
  data: {
    title: string;
    thumbnail: {
      regular?: {
        small: string;
      };
    };
    year: any;
    category: string;
    rating: string;
  }[];
}

const Film: React.FC<FilmProps> = ({ data }) => {
  return (
    <>
      <section className='ml-4 xl:ml-[165px] xl:mr-[60px] gridT'>
        {data.map((el, index) => (
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
    </>
  );
}

export default Film;
