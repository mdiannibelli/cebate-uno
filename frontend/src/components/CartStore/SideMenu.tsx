import useCartContext from '@/hooks/useCartContext';
import cartMenuStore from '@/store/cartMenuStore';
import clsx from 'clsx';

export const SideMenu = () => {
    const cartMenu = cartMenuStore(state => state.cartMenu);
    const closeCartMenuStore = cartMenuStore(state => state.closeCartMenuStore);

    const { cart } = useCartContext();
    console.log(cart)
    return (
        <div>
            {/* Black background */}
            {
                cartMenu && (
                    <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30' />
                )
            }

            {/* Blur backgroud */}
            {
                cartMenu && (
                    <div onClick={closeCartMenuStore} className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm' />
                )
            }

            <div className={
                clsx(
                    'fixed p-5 right-0 top-0 w-[260px] md:w-[420px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
                    {
                        "translate-x-full": !cartMenu,
                        "translate-x-0": cartMenu,
                        "opacity-0": !cartMenu,
                        "opacity-100": cartMenu
                    }
                )
            }>
                <button onClick={closeCartMenuStore} className='text-3xl text-neutral-800 flex justify-end w-full'>X</button>

                <div>
                    {
                        cart.length === 0 ? <span className='text-neutral-800 font-xl text-center'>No hay artículos en el carrito</span>
                            : <div>
                                {
                                    cart.map((item) => (
                                        <div key={item.id}>
                                            {item.productName}
                                        </div>
                                    ))
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
