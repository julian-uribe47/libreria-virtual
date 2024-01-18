import { useState } from 'react'
import { BookGrid } from './BookGrid';
import { getGenres } from '../helpers/getBooks';


export const VirtualLibrery = () => {
    const genres = getGenres();
    const [genSelected, setGenSelected] = useState('todos')

  

  const onChangeSelect = (selectValue) => {
      setGenSelected(selectValue);
  }
  return (
    <>
      <h1>VirtualLibrary</h1>
      <label>
      Elige un género literario:
      <select 
        value={genSelected}
        name='selectedGenre'
        onChange={e => onChangeSelect(e.target.value)}
        >
        
        <option
        value='todos'
        >Todos</option>
       {
        genres.map((gen) => {
          return (
            <option
            name= {gen}
            value={gen}
            key={gen}
            >{gen}</option>
          )
        })
       }
      </select>
    </label>
     
    
    <BookGrid />
    
    </>
    
  )
}
                // <div key={gen}>
                //     <h3>{gen}</h3>
                //     <li >{gen}</li>
                // </div>