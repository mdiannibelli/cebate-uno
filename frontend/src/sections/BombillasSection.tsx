import { BombillasGrid } from "@/components/Bombillas/BombillasGrid"
import { getBombillas } from "@/services/getBombillas"


export const BombillasSection = () => {
    return (
        <section className="flex flex-col items-center my-12">
            <h2 className='font-light text-2xl uppercase text-neutral-500'>Todas nuestras bombillas</h2>
            <BombillasGrid />
        </section>
    )
}
