import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import Rating from "react-rating";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext);
  const { email,displayName } = user;
  const { id } = useParams();
  const bookDetails = useLoaderData();
  const [disableBtn, setDisableBtn] = useState("");
  const navigate = useNavigate();
  const bookDetail = bookDetails.find((book) => book._id == id);
  let borrowDate = new Date();
  const day = String(borrowDate.getDate()).padStart(2, "0");
  const month = String(borrowDate.getMonth() + 1).padStart(2, "0");
  const year = borrowDate.getFullYear();
  borrowDate = `${month}/${day}/${year}`;
  // console.log(today);
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

  const handleBorrowBook = (e) => {
    e.preventDefault();
    const returnDate = e.target.date.value;
    if(returnDate === ""){
      toast.error('Invalid Date')
      return
    }
    const bookInfo = {
      image,
      book,
      quantity,
      author,
      bookCategory,
      rating,
      email,
      displayName,
      borrowDate,
      returnDate
    };
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
              {/* <button
                onClick={handleBorrowBook}
                disabled={quantity == 0 || disableBtn == bookDetail.image}
                className="btn w-full border-2 border-orange-300 bg-white mt-5 font-extrabold"
              >
                Borrow
              </button> */}

              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn w-full border-2 border-orange-300 bg-white mt-5 font-extrabold"
                disabled={quantity == 0 || disableBtn == bookDetail.image}
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Borrow
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <form onSubmit={handleBorrowBook}>
                    <div className="space-y-2">
                      <label className="block mb-1 text-lg font-semibold text-orange-400">
                        Select Return Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        // placeholder=""
                      />
                      <input
                        type="text"
                        name="name"
                        defaultValue={displayName}
                        disabled
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                      <input
                        type="text"
                        name="name"
                        defaultValue={email}
                        disabled
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      />
                    </div>
                    <button className="btn bg-orange-400 text-white w-full mt-5">submit</button>
                  </form>
                </div>
              </dialog>
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
