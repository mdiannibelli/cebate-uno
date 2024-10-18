import { BombillaType, MatesType } from '@/types'
import React, { createContext, useState } from 'react'

interface CartContextType {
    cart: CartType[]
    addItemToCart: (item: MatesType | BombillaType) => void;
}

type CartType = MatesType | BombillaType

export const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartType[]>([]);

    function addItemToCart(item: MatesType | BombillaType) {
        setCart([...cart, item]);
    }
    return (
        <CartContext.Provider value={{ cart, addItemToCart }}>
            {children}
        </CartContext.Provider>
    )
}
