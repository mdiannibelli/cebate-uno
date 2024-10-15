import { AllFilters } from "../components/Filters/AllFilters"
import MatesGrid from "../components/Mates/MatesGrid"

export const MatesSection = () => {
    return (
        <section className="flex flex-col items-center my-12">
            <h2 className='font-light text-2xl uppercase text-neutral-500'>Todos nuestros mates</h2>
            <AllFilters />
            <MatesGrid />
        </section>
    )
}
