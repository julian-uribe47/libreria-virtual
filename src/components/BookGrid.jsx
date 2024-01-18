import PropTypes from "prop-types";
import { getBooks } from "../helpers/getBooks";



export const BookGrid = ({ gen }) => {

  getBooks();
  const allBooks = getBooks();

  console.log(getBooks())

  return (
    <>
      <h3>{gen}</h3>
      <div className="card-grid">
      {
        allBooks.map((book,index) => {
          return(
            <div
            className="card"
            key={index}>
              <p
            
            >{book.titulo}</p>
            <img src={book.cubierta} alt="cubierta libro" />
            </div>
          )
        })
      }
      </div>
    </>
  );
};

BookGrid.propTypes = {
  gen: PropTypes.string.isRequired,
};
