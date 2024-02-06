import { useContext } from 'react';
import { virtualLibraryContext } from '../context';

export const BookGrid = ({ allBooks, gen }) => {
  
  const context = useContext(virtualLibraryContext)
  const openAside = (bookDetail) => {
    context.openBookAside()
    const isInLibrary = context.bookToShow.filter(book => book.id == bookDetail.id).length > 0;
    console.log(isInLibrary);
    if (!isInLibrary) {
      
        context.setBookToShow([...context.bookToShow, bookDetail])
        context.setCount(context.count + 1)
      
    }
  }
  console.log('BOOK:', context.bookToShow)
  
    
    
  
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


