import PropType from "prop-types";
import { useContext } from "react";
import Rating from "react-rating";
import { AuthContext } from "../providers/AuthProvider";
import { FaBookOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";
const BookCard = ({ singleBook }) => {
  const { user } = useContext(AuthContext);
  // console.log(singleBook);
  return (
    <div>
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="w-auto mx-auto h-56 my-5 rounded"
          src={singleBook.image}
        />

        <div className="flex items-center px-6 py-3 bg-gray-900">
          <FaBookOpen className="w-6 h-6 text-white" />

          <h1 className="mx-3 text-lg font-semibold text-white">
            {singleBook.book}
          </h1>
        </div>

        <div className="px-6 py-2">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Category: {singleBook.bookCategory}
          </h1>

          <p className=" text-xl text-gray-700 dark:text-gray-400">
            Author: {singleBook.author}
          </p>
          <p className=" text-xl text-gray-700 dark:text-gray-400">
            Available: {singleBook.quantity}
          </p>

          <div className="flex justify-between items-center">
            <Rating
              initialRating={parseInt(singleBook.rating)}
              emptySymbol={<img src="empty-star.png" className="icon h-5" />}
              fullSymbol={<img src="full.jpeg" className="icon" />}
              readonly
            />
            <div>
              {user.email === singleBook.email && (
                <button className="py-1 px-4 font-semibold text-white rounded-md bg-orange-400">
                  Update
                </button>
              )}
            </div>
          </div>
          <div className="mt-5">
            <Link
              to={`/details/${singleBook._id}`}
              className="btn w-full bg-white border-2 border-orange-400"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  singleBook: PropType.object,
};
export default BookCard;
