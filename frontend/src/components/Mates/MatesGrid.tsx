import { MdAddShoppingCart } from "react-icons/md"
//import { useMates } from "../../hooks/useMates"
import { useFilters } from "../../hooks/useFilters";

const MatesGrid = () => {
  //const { mates } = useMates();
  const { filteredMates } = useFilters()
  console.log(filteredMates)
  return (
    <div className="grid grid-cols-3 max-w-[1296px] mx-auto mt-8">
      {
        filteredMates.map((mate) => (
          <div key={mate.id} className="flex flex-col mt-2 justify-center items-center my-2" >
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
