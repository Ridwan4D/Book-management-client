import PropType from "prop-types";
import { FaBook } from "react-icons/fa";
const BorrowedCard = ({ singleBook }) => {
  console.log(singleBook);
  const { image, book, author, today } = singleBook;
  return (
    <div>
      <section className="border-2 border-orange-400 rounded-md px-6 py-2 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div className="w-full md:w-auto flex items-center">
            <img src={image} alt="" width="200px"/>
          </div>
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <FaBook className="h-10 w-10 mb-2" />
            <h2 className="text-3xl font-semibold leading-none">
             {book}
            </h2>
            <p className="mt-4 mb-8 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              voluptatum rem amet!
            </p>
            <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl dark:bg-default-600 dark:text-gray-50">
              Get started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
BorrowedCard.propTypes = {
  singleBook: PropType.object,
};
export default BorrowedCard;
