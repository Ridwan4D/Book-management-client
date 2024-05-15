import PropType from "prop-types";
import Rating from "react-rating";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";
import { Tooltip } from "react-tooltip";

const TableRow = ({ aBook }) => {
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  //   console.log(aBook);
  const { _id, image, book, author, rating, quantity, bookCategory, email } =
    aBook;
  // console.log(_id)
  return (
    <tr>
      <td className="px-10 py-3.5 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="flex items-center gap-x-2">
          <img
            className="object-cover w-20 h-20 rounded-md"
            src={image}
            alt=""
          />
        </div>
      </td>

      <td className="px-10 md:px-4 py-4 text-lg font-semibold whitespace-nowrap">
        {book.slice(0,20)}
      </td>
      <td className="px-10 md:px-4 py-4 text-base font-semibold whitespace-nowrap">
        {author}
      </td>
      <td className="px-10 md:px-4 py-4 text-base font-semibold whitespace-nowrap">
        {bookCategory}
      </td>
      <td className="px-10 md:px-4 py-4 text-base font-semibold whitespace-nowrap">
        <Rating
          initialRating={parseInt(rating)}
          emptySymbol={<img src="empty-star.png" className="icon h-4 md:h-8" />}
          fullSymbol={<img src="full.jpeg" className="icon" />}
          readonly
        />
      </td>
      <td className="px-10 md:px-4 py-4 text-base font-semibold whitespace-nowrap">
        {quantity} P
      </td>
      <td className="px-10 md:px-4 py-4 text-base font-semibold whitespace-nowrap">
        <Link to={`/details/${_id}`}>
          <FcViewDetails className="h-6 w-6 my-anchor-element"/>
        </Link>
      </td>
      {user.email === email && (
        <td className="px-10 md:px-4 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center gap-x-6">
            <Link
              to={`/updateBook/${_id}`}
              className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 my-anchor-elements"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </Link>
          </div>
        </td>
      )}
      <Tooltip anchorSelect=".my-anchor-element" place="right">
          Details
        </Tooltip>
        <Tooltip anchorSelect=".my-anchor-elements" place="right">
          Edit
        </Tooltip>
    </tr>
  );
};
TableRow.propTypes = {
  aBook: PropType.object,
};

export default TableRow;
