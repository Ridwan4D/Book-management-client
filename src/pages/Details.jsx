import axios from "axios";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const bookDetails = useLoaderData();
  const bookDetail = bookDetails.find((book) => book._id == id);
//   console.log(bookDetail);
  let {
    image,
    book,
    quantity,
    author,
    bookCategory,
    rating,
    bookDescription,
  } = bookDetail;

  const handleBorrowBook = ()=>{
    axios.post('http://localhost:5000/',bookDetail)
    .then(res => {
        console.log(res.data);
    })
  }
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
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
              <button onClick={handleBorrowBook} className="btn w-full border-2 border-orange-300 bg-white mt-5 font-extrabold">Borrow</button>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src={image}
                alt=""
                className="rounded-lg shadow-lg dark:bg-gray-500 sm:max-h-96"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details;
