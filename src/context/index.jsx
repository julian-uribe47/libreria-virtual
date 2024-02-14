import { createContext, useState } from "react";
import { filterBooksByGenre, getGenres } from "../helpers/getBooks";

export const virtualLibraryContext = createContext();

export const VirtualLibraryProvider = ({ children }) => {
  const [genSelected, setGenSelected] = useState("todos");
  let storageList = localStorage.getItem("bookList");
  if (storageList) {
    storageList = JSON.parse(storageList);
  } else {
    storageList = [];
  }

  const [bookToShow, setBookToShow] = useState(storageList);
  //counter del Aside
  const [count, setCount] = useState(bookToShow.length);

  let defaultBooks = filterBooksByGenre(genSelected);
  const booksId = storageList.map((book) => book.id);
  defaultBooks = defaultBooks.filter((book) => !booksId.includes(book.id));

  const [allBooks, setAllBooks] = useState(defaultBooks);

  const genres = getGenres();

  //contador de libros disponibles
  const [counter, setCounter] = useState(allBooks.length);

  //Abrir y cerrar Aside
  const [isBookAsideOpen, setIsBookAsideOpen] = useState(false);
  const openBookAside = () => setIsBookAsideOpen(true);
  const closeBookAside = () => setIsBookAsideOpen(false);

  //Agregar y mostrar productos en Aside

  return (
    <virtualLibraryContext.Provider
      value={{
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
        setCounter,
      }}
    >
      {children}
    </virtualLibraryContext.Provider>
  );
};
