import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import BorrowedCard from "../components/BorrowedCard";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/allBorrowBooks/${user?.email}`)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      });
  }, [user.email]);
  return (
    <div>
      <h2 className="mb-8 underline text-4xl font-bold dark:text-white">
        Add Book
      </h2>
      {
        books.map((book,idx)=> <BorrowedCard key={idx} singleBook={book}></BorrowedCard>)
      }
    </div>
  );
};

export default BorrowedBooks;
