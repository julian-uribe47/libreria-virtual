import { createContext, useState } from 'react';


export const virtualLibraryContext = createContext()

export const VirtualLibraryProvider = ({children}) => {

    //counter del Aside
    const [count, setCount] = useState(0)
    //Abrir y cerrar Aside
    const [isBookAsideOpen, setIsBookAsideOpen] = useState(false)
    const openBookAside = () => setIsBookAsideOpen(true);
    const closeBookAside = () => setIsBookAsideOpen(false)

    //Agregar y mostrar productos en Aside

    const [bookToShow, setBookToShow] = useState([])

    return(
        <virtualLibraryContext.Provider value={{
            count,
            setCount,
            isBookAsideOpen,
            openBookAside,
            closeBookAside,
            bookToShow,
            setBookToShow

        }}>
            {children}
        </virtualLibraryContext.Provider>
    )
}
