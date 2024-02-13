import { createContext, useState } from 'react';
import { filterBooksByGenre, getGenres } from "../helpers/getBooks";

export const virtualLibraryContext = createContext()

export const VirtualLibraryProvider = ({children}) => {

    const [genSelected, setGenSelected] = useState("todos");
    const [allBooks, setAllBooks] = useState(filterBooksByGenre(genSelected))

    const genres = getGenres();
    
    //contador de libros disponibles 
    const [counter, setCounter] = useState(allBooks.length);

    //Abrir y cerrar Aside
    const [isBookAsideOpen, setIsBookAsideOpen] = useState(false)
    const openBookAside = () => setIsBookAsideOpen(true);
    const closeBookAside = () => setIsBookAsideOpen(false)
    
    //Agregar y mostrar productos en Aside
    
    const [bookToShow, setBookToShow] = useState([])
    //counter del Aside
    const [count, setCount] = useState(bookToShow.length)

    return(
        <virtualLibraryContext.Provider value={{
            count,
            setCount,
            isBookAsideOpen,
            openBookAside,
            closeBookAside,
            bookToShow,
            setBookToShow,
            genres,
            genSelected,
            setGenSelected,
            allBooks,
            setAllBooks,
            counter,
            setCounter

        }}>
            {children}
        </virtualLibraryContext.Provider>
    )
}
