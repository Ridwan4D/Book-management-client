import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import Rating from "react-rating";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;
  const { id } = useParams();
  const bookDetails = useLoaderData();
  const [disableBtn, setDisableBtn] = useState("");
  const navigate = useNavigate();
  const bookDetail = bookDetails.find((book) => book._id == id);
  let today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  today = `${month} / ${day} / ${year}`;
  console.log(today);
  const {
    _id,
    image,
    book,
    quantity,
    author,
    bookCategory,
    rating,
    bookDescription,
  } = bookDetail;
  const bookInfo = {
    image,
    book,
    quantity,
    author,
    bookCategory,
    rating,
    email,
    today,
  };

  const handleBorrowBook = () => {
    // const disableBtn = e.target;
    axios.post("http://localhost:5000/addBorrowBooks", bookInfo).then((res) => {
      // console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Book Borrowed");
        setTimeout(() => {
          navigate("/borrowedBook");
        }, 1000);
      }
    });

    axios
      .patch(`http://localhost:5000/addBooks/${_id}`, bookInfo)
      .then((res) => {
        console.log(res.data);
      });
  };
  axios
    .get(`http://localhost:5000/allBorrowBooks/${user?.email}`)
    .then((res) => {
      //   console.log(bookDetail.image);
      res.data.find((book) => {
        if (book.image == bookDetail.image) {
          setDisableBtn(book.image);
        }
      });
    });
  //   console.log(disableBtn);

  return (
    <div>
      <section className="bg-[linear-gradient(to_bottom,#fb923c,#fed7aa)] md:bg-[linear-gradient(to_right,#fb923c,#fed7aa)] text-white">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-default-600 dark:text-gray-50">
            <div className="">
              <h2 className="text-3xl mb-5 font-bold">Book: {book}</h2>
              <h4 className="text-xl font-semibold">
                Category: {bookCategory}
              </h4>
              <h3 className="text-2xl font-semibold">Author: {author}</h3>
              <div className="my-4">
                <Rating
                  initialRating={parseInt(rating)}
                  emptySymbol={
                    <img
                      src="https://i.ibb.co/sQNRt1T/empty-star.png"
                      className="icon h-8"
                    />
                  }
                  fullSymbol={
                    <img
                      src="https://i.ibb.co/SwdhptB/full.jpg"
                      className="icon"
                    />
                  }
                  readonly
                />
              </div>
              <h5 className="text-lg font-semibold">Available: {quantity} P</h5>
              <p className="text-sm font-semibold">
                <span className="font-bold">Description: </span>{" "}
                {bookDescription} P
              </p>
              <button
                onClick={handleBorrowBook}
                disabled={quantity == 0 || disableBtn == bookDetail.image}
                className="btn w-full border-2 border-orange-300 bg-white mt-5 font-extrabold"
              >
                Borrow
              </button>
              {quantity == 0 && (
                <p className="text-sm text-blue-600 font-semibold">
                  Out fo Stock
                </p>
              )}
              <Link
                to="/allBooks"
                className="btn w-full border-2 border-orange-300 bg-white mt-5 font-extrabold"
              >
                Go Back
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src={image}
                alt=""
                className="rounded-lg shadow-lg dark:bg-gray-500 w-1/2"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
