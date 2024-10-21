import useCartContext from '@/hooks/useCartContext';
import { useFilters } from '@/hooks/useFilters';
import { BombillaType, MatesType } from '@/types';
import { MdAddShoppingCart } from 'react-icons/md';
import { toast } from 'react-toastify';

export const BombillasGrid = () => {
    //const { bombillas } = useBombillas();
    const { filteredBombillas } = useFilters();

    const { addItemToCart } = useCartContext();

    function addItem(item: MatesType | BombillaType) {
        addItemToCart(item);
        toast.success(`${item.productName} ha sido agregado!`)
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1296px] mx-auto mt-8 gap-8">
            {
                filteredBombillas.map((bombilla) => (
                    <div onClick={() => addItem(bombilla)} key={bombilla.id} className="flex flex-col mt-2 justify-center items-center my-2" >
                        <figure>
                            <img src={bombilla.img} alt={bombilla.productName} className="xl:w-[330px] xl:h-[300px] size-64" />
                        </figure>
                        <h3 className="font-light text-center uppercase text-lg max-w-[280px] mt-4">{bombilla.productName}</h3>
                        <aside className="flex gap-x-4 items-center justify-center mt-2">
                            <span className="font-regular text-center uppercase text-lg">${Number(bombilla.price).toLocaleString()}</span>
                            <button><MdAddShoppingCart className="size-4" /></button>
                        </aside>
                    </div>
                ))
            }
        </div>
    )
}
