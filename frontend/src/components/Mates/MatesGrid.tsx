import { MdAddShoppingCart } from "react-icons/md"
import { MatesType } from "../../types"

interface Props {
  mates: MatesType[]
}

const MatesGrid = ({ mates }: Props) => {
  return (
    <div className="grid grid-cols-3 max-w-[1296px] mx-auto mt-8">
      {
        mates.map((mate) => (
          <div className="flex flex-col mt-2 justify-center items-center my-2" >
            <figure>
              <img src={mate.img} alt={mate.productName} className="w-[330px] h-[300px]" />
            </figure>
            <h3 className="font-light text-center uppercase text-xl mt-1">{mate.productName}</h3>
            <aside className="flex gap-x-4 items-center justify-center mt-2">
              <span className="font-regular text-center uppercase text-lg">${mate.price}</span>
              <button><MdAddShoppingCart className="size-4" /></button>
            </aside>
          </div>
        ))
      }
    </div>
  )
}

export default MatesGrid
