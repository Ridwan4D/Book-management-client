import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import BorrowedCard from "../components/BorrowedCard";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/allBorrowBooks/${user?.email}`)
      .then((res) => {
        // console.log(res.data);
        setBooks(res.data);
      });
  }, [user.email]);

  useEffect(() => {
    axios.get("http://localhost:5000/allBooks").then((res) => {
      setAllBooks(res.data);
    });
  }, []);
  return (
    <div>
      <h2 className="mb-8 underline text-4xl font-bold dark:text-white">
        Your Book Reading List
      </h2>
      <div className="space-y-5">
        {books.map((book, idx) => (
          <BorrowedCard
            key={idx}
            singleBook={book}
            setBooks={setBooks}
            books={books}
            allBooks={allBooks}
          ></BorrowedCard>
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
