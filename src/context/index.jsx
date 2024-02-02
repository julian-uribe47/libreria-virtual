import { createContext, useState } from 'react';


export const virtualLibraryContext = createContext()

export const VirtualLibraryProvider = ({children}) => {

    const [count, setCount] = useState(0)
    const [isBookAsideOpen, setIsBookAsideOpen] = useState(false)
    const openBookAside = () => setIsBookAsideOpen(true);
    const closeBookAside = () => setIsBookAsideOpen(false)

    return(
        <virtualLibraryContext.Provider value={{
            count,
            setCount,
            isBookAsideOpen,
            openBookAside,
            closeBookAside,

        }}>
            {children}
        </virtualLibraryContext.Provider>
    )
}
