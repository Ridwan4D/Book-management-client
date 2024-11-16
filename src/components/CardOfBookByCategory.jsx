import PropType from 'prop-types'
import { FaBookOpen } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
const CardOfBookByCategory = ({singleBook}) => {
    const {_id,image,book,author,bookCategory,rating} = singleBook
    return (
        <div>
      <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="w-auto mx-auto h-56 my-5 rounded"
          src={image}
        />

        <div className="flex items-center px-6 py-3 bg-slate-500">
          <FaBookOpen className="w-6 h-6 text-white" />

          <h1 className="mx-3 text-lg font-semibold text-white">
            {book}
          </h1>
        </div>

        <div className="px-6 py-2">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Category: {bookCategory}
          </h1>

          <p className=" text-xl text-gray-700 dark:text-gray-400">
            Author: {author}
          </p>

          <div className="flex justify-between items-center">
            <Rating
              initialRating={parseInt(rating)}
              emptySymbol={<img src="https://i.ibb.co/sQNRt1T/empty-star.png" className="icon h-8" />}
              fullSymbol={<img src="https://i.ibb.co/SwdhptB/full.jpg" className="icon" />}
              readonly
            />
          </div>
          <div className="mt-5 flex justify-between">
            <Link
              to="/"
              className="btn bg-white border-2 border-slate-500"
            >
              Go Back
            </Link>
            <Link
              to={`/details/${_id}`}
              className="btn bg-white border-2 border-slate-500"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};
CardOfBookByCategory.propTypes ={
    singleBook: PropType.object,
}
export default CardOfBookByCategory;