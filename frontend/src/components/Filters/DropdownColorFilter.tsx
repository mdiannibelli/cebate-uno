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
    colors: string[]
}

export function DropdownColorFilter({ title, colors, setFilters }: Props) {
    const [showStatusBar, setShowStatusBar] = React.useState<string>("all")

    function handleChangeColor(value: string) {
        setShowStatusBar(value)
        setFilters(prevState => ({
            ...prevState,
            color: value
        }))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="uppercase text-md">{title}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>{title.toUpperCase()}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                    key={'all'}
                    checked={showStatusBar === 'all'}
                    onCheckedChange={() => handleChangeColor('all')}
                >
                    {'Todos'}
                </DropdownMenuCheckboxItem>
                {
                    colors.map((color) => (

                        <DropdownMenuCheckboxItem
                            key={color}
                            checked={showStatusBar === color}
                            onCheckedChange={() => handleChangeColor(color)}
                        >
                            {color}
                        </DropdownMenuCheckboxItem>

                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
