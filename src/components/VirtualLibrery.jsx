import { useEffect, useState } from "react";
import { BookGrid } from "./BookGrid";
import { filterBooksByGenre, getGenres } from "../helpers/getBooks";



export const VirtualLibrery = () => {
  const genres = getGenres();
  const [genSelected, setGenSelected] = useState("todos");
  let allBooks = filterBooksByGenre(genSelected);
  const [counter, setCounter] = useState(allBooks.length);

  const onChangeSelect = (selectValue) => {
    setGenSelected(selectValue);
  };
  useEffect(() => {
    setCounter(allBooks.length);
  }, [allBooks]);

  return (
    
      <div className="ml-10">
        <h1>VirtualLibrary</h1>
        <div className=" flex justify-between items-center ">
          <h2 className=" font-semibold">Libros disponibles: {counter} </h2>
        </div>
        <label className=" font-medium">
          Elige un género literario:
          <select
            value={genSelected}
            name="selectedGenre"
            onChange={(e) => onChangeSelect(e.target.value)}
            className=" font-medium ml-2"
          >
            <option value="todos">Todos</option>
            {genres.map((gen, index) => {
              return (
                <option name={gen} value={gen} key={index}>
                  {gen}
                </option>
              );
            })}
          </select>
        </label>

        

        <BookGrid allBooks={allBooks} gen={genSelected} />
      </div>
    
  );
};
