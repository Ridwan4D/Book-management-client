import { useContext, useState } from "react";
import { FaTableCellsLarge } from "react-icons/fa6";
import { MdTableRows } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import TableRow from "../components/TableRow";
import BookCard from "../components/BookCard";

const AllBooks = () => {
  const { user } = useContext(AuthContext);
  const [format, setFormat] = useState("table");
  const allBooks = useLoaderData();
  // console.log(allBooks);
  const [books, setBooks] = useState(allBooks);
  // console.log(books);
  const userMail = books.find((book) => book.email === user.email);
  const handleFormat = (formatStyle) => {
    setFormat(formatStyle);
  };
  const handleFilter = (e) => {
  if(e.target.value === "availableBooks"){
      const availableBooks = books.filter(book => parseInt(book.quantity) > 0)
      // console.log(availableBooks);
      setBooks(availableBooks)
    }
    else{
      setBooks(allBooks)
    }
  };
  // console.log(format);
  return (
    <div>
      <div className="md:flex justify-between">
        <h3 className="mb-2 md:mb-8 underline text-4xl font-bold dark:text-white">
          All Book
        </h3>
        <div>
          <select
            className="py-2 font-semibold px-5 border-2 border-orange-400 w-full"
            onChange={handleFilter}
          >
            <option value="allBook">All Book</option>
            <option value="availableBooks">Available Book</option>
          </select>
        </div>
        <div>
          <div className="join">
            <button
              onClick={() => handleFormat("table")}
              className="btn join-item"
            >
              <MdTableRows />
            </button>
            <button
              onClick={() => handleFormat("card")}
              className="btn join-item"
            >
              <FaTableCellsLarge />
            </button>
          </div>
        </div>
      </div>
      {format === "table" && (
        <section className="container px-10 md:px-4 mx-auto">
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Image
                        </th>

                        <th
                          scope="col"
                          className="px-10 md:px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="px-10 md:px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Author
                        </th>

                        <th
                          scope="col"
                          className="px-10 md:px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Category
                        </th>

                        <th
                          scope="col"
                          className="px-10 md:px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Ratings
                        </th>
                        <th
                          scope="col"
                          className="px-10 md:px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-10 md:px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Details
                        </th>
                        {userMail?.email == user.email && (
                          <th
                            scope="col"
                            className="px-10 md:px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Action
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {books.map((book, idx) => (
                        <TableRow key={idx} aBook={book}></TableRow>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {format === "card" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-y-10">
          {books.map((book, idx) => (
            <BookCard key={idx} singleBook={book}></BookCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
