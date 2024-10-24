import { MdAddShoppingCart } from "react-icons/md"
//import { useMates } from "../../hooks/useMates"
import { useFilters } from "../../hooks/useFilters";
import useCartContext from "@/hooks/useCartContext";
import { BombillaType, MatesType } from "@/types";
import { toast } from "react-toastify";


const MatesGrid = () => {
  //const { mates } = useMates();
  const { filteredMates } = useFilters()

  const { addItemToCart } = useCartContext();

  function addItem(item: MatesType | BombillaType) {
    addItemToCart(item);
    toast.success(`${item.productName} ha sido agregado!`)
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1296px] mx-auto mt-8 gap-8">
      {
        filteredMates.map((mate) => (
          <div onClick={() => addItem(mate)} key={mate.id} className="flex flex-col mt-2 justify-center items-center my-2" >
            <figure>
              <img src={mate.img} alt={mate.productName} className="xl:w-[330px] xl:h-[300px] size-64" />
            </figure>
            <h3 className="font-light text-center uppercase text-lg max-w-[280px] mt-4">{mate.productName}</h3>
            <aside className="flex gap-x-4 items-center justify-center mt-2">
              <span className="font-regular text-center uppercase text-lg">${Number(mate.price).toLocaleString()}</span>
              <button className="bg-neutral-800 py-1 px-2 hover:bg-neutral-700 duration-300 rounded-md"><MdAddShoppingCart className="size-4 text-white" /></button>
            </aside>
          </div>
        ))
      }
    </div>
  )
}

export default MatesGrid
