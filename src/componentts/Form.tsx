

interface Form {
    searchTerm:string,
    setSearchTerm:any
}

const Form = ({searchTerm,setSearchTerm}:Form) => {
  return (
    <>
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
    </>
  )
}

export default Form