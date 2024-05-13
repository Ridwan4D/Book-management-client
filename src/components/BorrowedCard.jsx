import axios from "axios";
import PropType from "prop-types";
import toast from "react-hot-toast";
import { FaBook } from "react-icons/fa";
const BorrowedCard = ({ singleBook, setBooks, books,allBooks }) => {
    let { _id, image, book, author, borrowDate, bookCategory, returnDate,quantity,idInAllBooks } =
    singleBook;
    // console.log(allBooks);
    const bookDetail = allBooks.find((book) => book._id == idInAllBooks);
    console.log(bookDetail);



  const handleReturnBook = (_id) => {
    axios.delete(`http://localhost:5000/allBorrowBooks/${_id}`).then((res) => {
    //   console.log(res.data);
      if (res.data.deletedCount) {
        toast.success("Book Returned");
        const remainingBorrowBook = books.filter((book) => book?._id !== _id);
        setBooks(remainingBorrowBook);
      }
    });

    quantity = parseInt(quantity) + 1
    const bookInfo = {quantity}
    axios
      .patch(`http://localhost:5000/addBooks/${bookDetail._id}`, bookInfo)
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <section className="border-2 border-orange-400 rounded-md px-6 py-2 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div className="w-full md:w-auto flex items-center">
            <img src={image} alt="" width="200px" />
          </div>
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <FaBook className="h-10 w-10 mb-2" />
            <h2 className="text-3xl font-semibold leading-none">{book}</h2>
            <p className="mt-1 mb-2 text-xl text-slate-400 font-semibold">
              {bookCategory}
            </p>
            <p className="mt-1 mb-3 text-2xl text-slate-900 font-semibold">
              {author}
            </p>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="badge badge-info gap-2 text-white font-semibold px-5 py-4">
                <span>Borrow On: </span>
                {borrowDate}
              </div>
              <div className="badge bg-orange-400 gap-2 text-white font-semibold px-5 py-4">
                <span>Return On: </span>
                {returnDate}
              </div>
            </div>
            <button
              onClick={() => handleReturnBook(_id)}
              className="self-start btn bg-orange-400 btn-wide mt-6 text-lg rounded-3xl dark:bg-default-600 font-semibold text-gray-50"
            >
              Return Book
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
BorrowedCard.propTypes = {
  singleBook: PropType.object,
  setBooks: PropType.func,
  books: PropType.array,
  allBooks: PropType.array,
};
export default BorrowedCard;
