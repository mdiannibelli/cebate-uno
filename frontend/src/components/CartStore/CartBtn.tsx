import cartMenuStore from '@/store/cartMenuStore'
import { FaCartShopping } from 'react-icons/fa6'

export const CartBtn = () => {
    const { openCartMenuStore } = cartMenuStore();
    return (
        <>
            <button onClick={openCartMenuStore}><FaCartShopping className="size-8 mr-2" /></button>
        </>
    )
}
