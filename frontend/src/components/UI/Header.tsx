import { SelectorType } from "@/types";
import { CartBtn } from "../CartStore/CartBtn";

interface Props {
  selector: "mates" | "bombillas"
  handleSelector: (type: SelectorType) => void;
}

const Header = ({ selector, handleSelector }: Props) => {
  return (
    <header className="flex flex-col items-center m-4 md:m-8">
      <div className="flex w-full justify-center">
        <a href="/" className="flex-1 flex gap-x-4 justify-center w-full">
          <div>
            <h1 className='text-4xl md:text-6xl uppercase font-semibold'>Cebate</h1>
            <h2 className='text-2xl md:text-4xl text-end uppercase font-regular max-w-[204px] w-full'>Uno</h2>
          </div>
          <div>
            <img src="../../../public/imgs/logo.png" alt="Cebate Uno Logo" className="w-8 md:w-12" />
          </div>
        </a>
        <CartBtn />
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
