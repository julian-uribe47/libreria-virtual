import { useState } from "react";
import { BookGrid } from "./BookGrid";
import { getGenres } from "../helpers/getBooks";

export const VirtualLibrery = () => {
  const genres = getGenres();
  const [genSelected, setGenSelected] = useState('todos');

  const onChangeSelect = (selectValue) => {
    setGenSelected(selectValue);
  };
  // console.log(genres);
  return (
    <>
      <h1>VirtualLibrary</h1>
      <label>
        Elige un género literario:
        <select
          value={genSelected}
          name="selectedGenre"
          onChange={(e) => onChangeSelect(e.target.value)}
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

      <BookGrid gen = {genSelected} />
    </>
  );
};
