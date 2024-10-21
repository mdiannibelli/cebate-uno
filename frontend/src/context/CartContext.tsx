import { BombillaType, MatesType } from '@/types'
import React, { createContext, useState } from 'react'

interface CartContextType {
    cart: CartType[]
    addItemToCart: (item: MatesType | BombillaType) => void;
    deleteItemFromCart: (item: MatesType | BombillaType) => void;
    clearCart: () => void;
    totalAmount: number
}

type CartType = MatesType | BombillaType

export const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartType[]>([]);
    const [totalAmount, setTotalAmount] = useState(0);

    function addItemToCart(item: MatesType | BombillaType) {
        const itemToFind = cart.findIndex(cartItem => cartItem.id === item.id);
        if (itemToFind === -1) {
            setCart([...cart, { ...item, quantity: 1 }]);
            setTotalAmount(prevState => prevState + Number(item.price));
            return;
        } else {
            const updatedCart = cart.map(cartItem => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity && cartItem.quantity + 1 }
                }
                return cartItem;
            })
            setCart(updatedCart);
            setTotalAmount(prevState => prevState + Number(item.price));
        }
    }

    function deleteItemFromCart(item: MatesType | BombillaType) {
        const filteredItems = [...cart].filter(items => items.id !== item.id);
        setCart(filteredItems);
        setTotalAmount(prevState => prevState - Number(item.price));
    }

    function clearCart() {
        setCart([]);
        setTotalAmount(0);
    }

    return (
        <CartContext.Provider value={{ cart, addItemToCart, deleteItemFromCart, clearCart, totalAmount }}>
            {children}
        </CartContext.Provider>
    )
}
