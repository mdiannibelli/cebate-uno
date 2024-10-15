import { SelectorType } from "@/types";
import { FaCartShopping } from "react-icons/fa6"

interface Props {
  selector: "mates" | "bombillas"
  handleSelector: (type: SelectorType) => void;
}

const Header = ({ selector, handleSelector }: Props) => {
  return (
    <header className="flex flex-col items-center m-8">
      <div className="flex w-full justify-center">
        <div className="flex-1 items-center flex flex-col justify-center w-full">
          <h1 className='text-6xl uppercase font-semibold'>Cebate</h1>
          <h2 className='text-4xl text-end uppercase font-regular'>Uno</h2>
        </div>
        <button><FaCartShopping className="size-8 mr-2" /></button>
      </div>
      {/* Filters */}
      <div className='flex gap-x-6 mt-8'>
        <button onClick={() => handleSelector('mates')} className={`uppercase ${selector === "mates" && 'bg-neutral-900 text-white rounded-md py-1 px-3'}`}>Mates</button>
        <span>|</span>
        <button onClick={() => handleSelector('bombillas')} className={`uppercase ${selector === "bombillas" && 'bg-neutral-900 text-white rounded-md py-1 px-3'}`}>Bombillas</button>
      </div>
    </header>
  )
}

export default Header
