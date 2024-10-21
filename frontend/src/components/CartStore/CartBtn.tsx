import useCartContext from '@/hooks/useCartContext';
import cartMenuStore from '@/store/cartMenuStore'
import { FaCartShopping } from 'react-icons/fa6'

export const CartBtn = () => {
    const { openCartMenuStore } = cartMenuStore();
    const { totalItems } = useCartContext();
    return (
        <div className='relative'>
            <button onClick={openCartMenuStore}>
                <FaCartShopping className="size-8 mr-2" />
                <span className='absolute bottom-14 -right-1 bg-blue-600 rounded-2xl text-white px-2'>{totalItems}</span>
            </button>
        </div>
    )
}
