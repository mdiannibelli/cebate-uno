import * as React from "react"


import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu"
import { Button } from "@/components/UI/button"
import { Filters } from "@/context/FiltersContext"

interface Props {
    title: string
    setFilters: React.Dispatch<React.SetStateAction<Filters>>
    materialsLightbulb: string[]
}

export function DropdownMaterialsLightbulb({ title, materialsLightbulb, setFilters }: Props) {
    const [showStatusBar, setShowStatusBar] = React.useState<string>("all")

    function handleChangeMaterial(value: string) {
        setShowStatusBar(value)
        setFilters(prevState => ({
            ...prevState,
            materialLightbulb: value
        }))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="uppercase text-xs md:text-md">{title}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{title.toUpperCase()}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                    key={'all'}
                    checked={showStatusBar === 'all'}
                    onCheckedChange={() => handleChangeMaterial('all')}
                >
                    {'Todos'}
                </DropdownMenuCheckboxItem>
                {
                    materialsLightbulb.map((material) => (

                        <DropdownMenuCheckboxItem
                            key={material}
                            checked={showStatusBar === material}
                            onCheckedChange={() => handleChangeMaterial(material)}
                        >
                            {material}
                        </DropdownMenuCheckboxItem>

                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}