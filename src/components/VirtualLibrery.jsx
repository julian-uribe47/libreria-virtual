import { useEffect } from "react";
import { BookGrid } from "./BookGrid";
import { virtualLibraryContext } from "../context";
import { useContext } from "react";




export const VirtualLibrery = () => {
  const context = useContext(virtualLibraryContext);

  const onChangeSelect = (selectValue) => {
    context.setGenSelected(selectValue);
    
  };
  useEffect(() => {
    context.setCounter(context.counter);
    
  }, [context.counter]);

  return (
    
      <div className="ml-10">
        <h1>VirtualLibrary</h1>
        <div className=" justify-between items-center mb-2">
          <h2 className=" font-semibold">Libros disponibles: {context.counter} </h2>
          <h2
          onClick={() =>context.openBookAside()} 
          className=" font-semibold cursor-pointer">Libros en lista de lectura: {context.count}</h2>
        </div>
        <label className=" font-medium">
          Elige un género literario:
          <select
            value={context.genSelected}
            name="selectedGenre"
            onChange={(e) => onChangeSelect(e.target.value)}
            className=" font-medium ml-2"
          >
            <option 
            value="todos">Todos</option>
            {context.genres.map((gen, index) => {
              return (
                <option name={gen} value={gen} key={index}>
                  {gen}
                </option>
              );
            })}
          </select>
        </label>

        

        <BookGrid allBooks={context.allBooks} gen={context.genSelected}/>
      </div>
    
  );
};
