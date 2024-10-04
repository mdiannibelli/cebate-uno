import { useContext } from 'react'
import { MatesContext } from '../context/MatesContext'

export const useMates = () => {
    const matesContext = useContext(MatesContext);
    if(!matesContext) throw new Error("Error in mates context");

    const { mates } = matesContext;
    
    return { 
        mates: mates
     }
}
