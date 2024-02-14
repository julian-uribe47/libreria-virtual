import { XCircleIcon } from '@heroicons/react/24/outline'
import { useContext } from "react";
import { virtualLibraryContext } from "../context";
export const BookList = ({book}) => {
  
  
  const context = useContext(virtualLibraryContext);


    const handledelete = (titulo) => {
      const removeBooks = context.bookToShow.filter(book => book.titulo != titulo)
      context.setBookToShow(removeBooks)
      localStorage.setItem('bookList', JSON.stringify(removeBooks))
      context.setCount(context.bookToShow.length - 1)
      context.setCounter(context.counter + 1)
      const allBooksUpdate = context.allBooks
      allBooksUpdate.push(book)
      context.setAllBooks(allBooksUpdate)
      console.log( 'ALLBOOKS:', allBooksUpdate);
      
    }

    
  return (
    <div className=' flex justify-between items-center p-2 bg-white'>
        <div className=' flex items-center gap-2 bg-white'>
            <figure className=' w-20 h-20'>
                <img className=' w-full h-full rounded-lg object-cover' src={book.cubierta} alt={book.titulo} />
            </figure>
            <p className=' text-lg font-medium bg-white'>{book.titulo}</p>
        </div>
        <div className=' flex items-center gap-2'>
        <XCircleIcon 
         onClick={() => handledelete(book.titulo)}     
        className="h-8 w-8 text-black-500 bg-white cursor-pointer"/>
        
        </div>
    </div>

  )
}
