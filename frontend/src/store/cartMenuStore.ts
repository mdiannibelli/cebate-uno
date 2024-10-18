import { create } from 'zustand';

interface State {
    cartMenu: boolean
    openCartMenuStore: () => void;
    closeCartMenuStore: () => void;
}

const cartMenuStore = create<State>()((set) => ({
    cartMenu: false,
    openCartMenuStore: () => {
        set({ cartMenu: true })
    },
    closeCartMenuStore: () => {
        set({ cartMenu: false })
    }
}))

export default cartMenuStore;