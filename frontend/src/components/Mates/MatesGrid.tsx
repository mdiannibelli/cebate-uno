import { MdAddShoppingCart } from "react-icons/md"
//import { useMates } from "../../hooks/useMates"
import { useFilters } from "../../hooks/useFilters";
import useCartContext from "@/hooks/useCartContext";

const MatesGrid = () => {
  //const { mates } = useMates();
  const { filteredMates } = useFilters()

  const { addItemToCart } = useCartContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1296px] mx-auto mt-8 gap-8">
      {
        filteredMates.map((mate) => (
          <div onClick={() => addItemToCart(mate)} key={mate.id} className="flex flex-col mt-2 justify-center items-center my-2" >
            <figure>
              <img src={mate.img} alt={mate.productName} className="xl:w-[330px] xl:h-[300px] size-64" />
            </figure>
            <h3 className="font-light text-center uppercase text-lg max-w-[280px] mt-4">{mate.productName}</h3>
            <aside className="flex gap-x-4 items-center justify-center mt-2">
              <span className="font-regular text-center uppercase text-lg">${Number(mate.price).toLocaleString()}</span>
              <button><MdAddShoppingCart className="size-4" /></button>
            </aside>
          </div>
        ))
      }
    </div>
  )
}

export default MatesGrid
