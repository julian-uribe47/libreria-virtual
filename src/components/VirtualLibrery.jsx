import { useState } from 'react'


export const VirtualLibrery = () => {

    const [genres, setGenres] = useState(['todos']);

    console.log(genres)


  return (
    <>
      <h1>VirtualLibrery</h1>
      <label>
      Elige un género literario:
      <select 
        value={'Todos'}
        name='selectedGenre'
        onChange={e => setGenres(e.target.value)}
        >
        
        <option
        value='todos'
        >Todos</option>
        <option value='ciencia ficcion'>Ciencia ficción</option>
        <option value='fantasia'>Fantasía</option>
        <option value='terror'>Terror</option>
        <option value='zombies'>Zombies</option>
      </select>
    </label>

    <ol>
        {genres.map( gen => 
            (
                <div key={gen}>
                    <h3>{gen}</h3>
                    <li >{gen}</li>
                </div>
            )
        )
        }
    </ol>
    </>
    
  )
}
