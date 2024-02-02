import { useContext } from 'react';
import { virtualLibraryContext } from '../context';

export const BookGrid = ({ allBooks, gen }) => {

  const context = useContext(virtualLibraryContext)
  const openAside = () => {
    context.openBookAside();
    context.setCount(context.count + 1)
  }


  return (
    <>
      <h3>{gen}</h3>
      <div
      onClick={ () => openAside()}
      className="card-grid">
        {allBooks.map((book, index) => {
          return (
            <div className="card" key={index}>
              <p>{book.titulo}</p>
              <img src={book.cubierta} alt="cubierta libro" />
            </div>
          );
        })}
      </div>
    </>
  );
};


