import { useContext } from 'react';
import { virtualLibraryContext } from '../context';

export const BookGrid = ({ allBooks, gen }) => {
  
  const context = useContext(virtualLibraryContext)
  
  const openAside = (bookDetail) => {
    context.openBookAside()
    const isInLibrary = context.bookToShow.filter(book => book.id === bookDetail.id).length > 0;
    const newBooks = allBooks.filter(newBook => newBook != bookDetail);
    
    if (!isInLibrary) {
        const listUpdated = [...context.bookToShow, bookDetail]
        context.setBookToShow(listUpdated)
        localStorage.setItem('bookList', JSON.stringify(listUpdated))
        context.setCounter(context.counter - 1)
        context.setCount(context.bookToShow.length + 1)
        
        context.setAllBooks(newBooks);
      
    }
  }
  
  
    
    
  
  return (
    <>
      <h3>{gen}</h3>
      <div
      className="card-grid"
      >
        
        {allBooks.map((book, id) => {
          return (
            
            <div className="card" key={id}
            onClick={ () => openAside(book)}
                >
              <p>{book.titulo}</p>
              
              <img src={book.cubierta} alt="cubierta libro"
               />
            </div>
          );
        })}
      </div>
      
    </>
  );
};


