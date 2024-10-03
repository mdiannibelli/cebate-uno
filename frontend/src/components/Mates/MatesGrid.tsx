import { MatesType } from "../../types"

interface Props {
  mates: MatesType[]
}

const MatesGrid = ({ mates }: Props) => {
  return (
    <div className="grid grid-cols-3 max-w-[1296px] mx-auto mt-8">
      {
        mates.map((mate) => (
          <div className="flex flex-col mt-2 justify-center items-center my-2" >
            <figure>
              <img src={mate.img} alt={mate.productName} className="w-[330px] h-[300px]" />
            </figure>
            <h3 className="font-light text-center uppercase text-xl mt-1">{mate.productName}</h3>
            <span className="font-regular text-center uppercase text-lg mt-2">${mate.price}</span>
          </div>
        ))
      }
    </div>
  )
}

export default MatesGrid
