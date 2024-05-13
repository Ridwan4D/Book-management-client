import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardOfBookByCategory from "../components/CardOfBookByCategory";

const BookByCategory = () => {
  const { bookCategory } = useParams();
  const [books,setBooks] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:5000/bookOfCategory/${bookCategory}`)
    .then(res => {
        // console.log(res.data);
        setBooks(res.data)
    })
  },[bookCategory])
  return <div>
    <h2 className="text-3xl font-bold underline">All Books of {bookCategory}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3">
        {
            books.map((book,idx)=> <CardOfBookByCategory key={idx} singleBook={book}></CardOfBookByCategory>)
        }
    </div>
  </div>;
};

export default BookByCategory;
