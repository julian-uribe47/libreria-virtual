import { XCircleIcon } from '@heroicons/react/24/outline'
import { useContext } from "react";
import { virtualLibraryContext } from "../context";
export const BookList = props => {
  const context = useContext(virtualLibraryContext);

    const {titulo, cubierta} = props

    const handledelete = (titulo) => {
      const removeBooks = context.bookToShow.filter(book => book.titulo != titulo)
      context.setBookToShow(removeBooks)
      context.setCount(context.bookToShow.length - 1)
      context.setCounter(context.counter + 1)
      
      
    }

    
  return (
    <div className=' flex justify-between items-center p-2 bg-white'>
        <div className=' flex items-center gap-2 bg-white'>
            <figure className=' w-20 h-20'>
                <img className=' w-full h-full rounded-lg object-cover' src={cubierta} alt={titulo} />
            </figure>
            <p className=' text-lg font-medium bg-white'>{titulo}</p>
        </div>
        <div className=' flex items-center gap-2'>
        <XCircleIcon 
         onClick={() => handledelete(titulo)}     
        className="h-8 w-8 text-black-500 bg-white cursor-pointer"/>
        
        </div>
    </div>

  )
}
