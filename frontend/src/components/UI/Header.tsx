

const Header = () => {
  return (
    <header className="flex flex-col items-center m-8">
      <div>
        <h1 className='text-6xl uppercase font-semibold'>Cebate</h1>
        <h2 className='text-4xl text-end uppercase font-regular'>Uno</h2>
      </div>
      {/* Filters */}
      <div className='flex gap-x-6 mt-8'>
        <span className="uppercase">Mates</span>
        <span>|</span>
        <span className="uppercase">Bombillas</span>
      </div>
    </header>
  )
}

export default Header
