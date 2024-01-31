import books from "../data/books.json";
export const getBooks = () => {
  const libros = books.library.map((libro) => {
    return {
      titulo: libro.book.title,
      genero: libro.book.genre,
      cubierta: libro.book.cover,
    };
  });
  // console.log(libros)
  return libros;
};

export const getGenres = () => {
  const allGenres = [];
  const allBooks = getBooks();
  allBooks.map((book) => {
    if (!allGenres.includes(book.genero)) {
      allGenres.push(book.genero);
    }
  });
  return allGenres;
};
export const filterBooksByGenre = (genero) => {
    const bookFilter = getBooks();
    if(genero !== "todos") {
      const booksGenre = bookFilter.filter(book => book.genero === genero);
      return booksGenre;
    }
    return bookFilter
}
filterBooksByGenre();







