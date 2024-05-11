import { useContext, useState } from "react";
import { FaTableCellsLarge } from "react-icons/fa6";
import { MdTableRows } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import TableRow from "../components/TableRow";

const AllBooks = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;
  const allBooks = useLoaderData();
  const [format, setFormat] = useState("table");
  console.log(allBooks);
  const userMail = allBooks.find(book => book.email === email)
//   console.log(userMail?.email);
  const handleFormat = (formatStyle) => {
    setFormat(formatStyle);
  };
  console.log(format);
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="mb-8 underline text-4xl font-bold dark:text-white">
          All Book
        </h3>
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
        <section className="container px-4 mx-auto">
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
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Author
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Category
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Ratings
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Quantity
                        </th>
                        {
                            userMail.email == email && <th
                            scope="col"
                            className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                          >
                            Action
                          </th>
                        }
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                      {
                        allBooks.map((book,idx)=> <TableRow key={idx} aBook={book}></TableRow>)
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AllBooks;
