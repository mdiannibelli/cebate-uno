import { CartContext } from '@/context/CartContext'
import { useContext } from 'react'

export default function useCartContext() {
    const cartContext = useContext(CartContext);
    if (!cartContext) throw new Error("Error at Cart Context")
    const { addItemToCart, cart, deleteItemFromCart, clearCart, totalAmount, totalItems } = cartContext;
    return {
        cart: cart,
        addItemToCart,
        deleteItemFromCart,
        clearCart,
        totalAmount,
        totalItems
    }
}
