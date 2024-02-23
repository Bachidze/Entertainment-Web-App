

interface Prop {
    setShowTrendingOnly:any
}

const Header = ({setShowTrendingOnly}:Prop) => {
  return (
   <>
     <header className='bg-[#161D2F] md:rounded-[8px] md:mt-4 md:ml-4 md:mr-4 xl:absolute xl:h-[100%] xl:pl-[18px] xl:pr-[18px] xl:top-[10px]'>
            <nav className='flex justify-between pl-4 pr-4 pt-5 pb-5 xl:flex-col xl:items-center'>
                <img loading='lazy' className='md:w-[32px] xl:pt-8 xl:pb-[75px]' src="/assets/Movie.svg" alt="MovieImg" />
                <div className='flex gap-5 md:gap-6 xl:flex-col xl:gap-7'>
                    <img loading='lazy' onClick={() => setShowTrendingOnly(false)} className='md:w-[20px] xl:cursor-pointer pulse' src="/assets/Shape (8).svg" alt="Cube1" />
                    <img loading='lazy' onClick={() => setShowTrendingOnly(true)} className='md:w-[20px] xl:cursor-pointer pulse' src="/assets/Shape (9).svg" alt="Cube2" />
                    <img loading='lazy'  className='md:w-[20px] xl:cursor-pointer pulse' src="/assets/Shape (10).svg" alt="Tv series" />
                    <img loading='lazy' className='md:w-[20px] xl:cursor-pointer pulse' src="/assets/Bookmark.svg" alt="BookMark" />
                </div>
                <img loading='lazy' className='md:w-[32px] xl:absolute bottom-8' src="/assets/Oval (22).svg" alt="MenImg" />
            </nav>
        </header>
   </>
  )
}

export default Header
