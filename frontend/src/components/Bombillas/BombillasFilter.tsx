import { DropdownMaterialsLightbulb } from '../Filters/DropdownMaterialsLightbulb'
import { useFilters } from '@/hooks/useFilters'

export const BombillasFilter = () => {
    const { filters, setFilters } = useFilters();
    return (
        <>
            <div className='my-4 flex gap-x-4'>
                <DropdownMaterialsLightbulb title='Material' setFilters={setFilters} materialsLightbulb={filters.defaultFilters.allMaterialsLightbulb} />
            </div>
        </>
    )
}
