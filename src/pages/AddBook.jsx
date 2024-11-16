import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;
  const navigate = useNavigate();
  // console.log(email);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const handleAddBook = (data) => {
    const {
      image,
      book,
      bookDescription,
      quantity,
      rating,
      bookCategory,
      author,
    } = data;
    if(parseInt(quantity) < 0){
      toast.error("Invalid Quantity Number")
      return;
    }
    const bookInfo = {
      image,
      book,
      bookDescription,
      quantity,
      rating,
      bookCategory,
      author,
      email,
    };
    // console.log(bookInfo);

    fetch("${import.meta.env.VITE_API_URL}/addBooks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Book Added Successfully!");
        setTimeout(() => {
          navigate("/allBooks");
        }, 1000);
      })
  };

  return (
    <div>
      <h2 className="mb-8 underline text-4xl font-bold dark:text-white">
        Add Book
      </h2>
      <div className="py-8 px-4 mx-auto max-w-6xl lg:py-16 bg-slate-600 rounded-md">
        <form onSubmit={handleSubmit(handleAddBook)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label className="block mb-1 text-lg font-semibold text-white">
                Image
              </label>
              <input
                type="text"
                {...register("image", {
                  required: { value: true, message: "This field is required" },
                })}
                name="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter Image URL"
              />
              <span>
                {errors.image && (
                  <p className="text-sm text-red-600 font-bold">
                    {errors.image.message}
                  </p>
                )}
              </span>
            </div>
            <div className="w-full">
              <label className="block mb-1 text-lg font-semibold text-white">
                Book Name
              </label>
              <input
                type="text"
                {...register("book", {
                  required: { value: true, message: "This field is required" },
                })}
                name="book"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write Book Name"
              />
              <span>
                {errors.book && (
                  <p className="text-sm text-red-600 font-bold">
                    {errors.book.message}
                  </p>
                )}
              </span>
            </div>
            <div className="w-full">
              <label className="block mb-1 text-lg font-semibold text-white">
                Book Quantity
              </label>
              <input
                type="number"
                {...register("quantity", {
                  required: { value: true, message: "This field is required" },
                })}
                name="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Number Of Book"
              />
              <span>
                {errors.quantity && (
                  <p className="text-sm text-red-600 font-bold">
                    {errors.quantity.message}
                  </p>
                )}
              </span>
            </div>
            <div>
              <label className="block mb-1 text-lg font-semibold text-white">
                Author
              </label>
              <input
                type="text"
                {...register("author", {
                  required: { value: true, message: "This field is required" },
                })}
                name="author"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write Author Name"
              />
              <span>
                {errors.author && (
                  <p className="text-sm text-red-600 font-bold">
                    {errors.author.message}
                  </p>
                )}
              </span>
            </div>
            <div>
              <label className="block mb-1 text-lg font-semibold text-white">
                Category
              </label>
              <select
                className="select select-bordered w-full"
                {...register("bookCategory", {
                  validate: (value) => value !== "0",
                  required: { value: true, message: "This field is required" },
                })}
              >
                <option value="0" disabled selected>
                  Select Category
                </option>
                <option value="Thriller">Thriller</option>
                <option value="History">History</option>
                <option value="Drama">Drama</option>
                <option value="Novel">Novel</option>
                <option value="Fiction">Fiction</option>
                <option value="Other">Other</option>
              </select>
              <span>
                {errors.bookCategory && (
                  <p className="text-sm text-red-600 font-bold">
                    {errors.bookCategory.message}
                  </p>
                )}
              </span>
            </div>
            <div>
              <label className="block mb-1 text-lg font-semibold text-white">
                Rating
              </label>
              <input
                type="text"
                {...register("rating", {
                  required: { value: true, message: "This field is required" },
                })}
                name="rating"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Book Rating (1-5)"
              />
              <span>
                {errors.rating && (
                  <p className="text-sm text-red-600 font-bold">
                    {errors.rating.message}
                  </p>
                )}
              </span>
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-1 text-lg font-semibold text-white">
                Description
              </label>
              <textarea
                name="bookDescription"
                {...register("bookDescription", {
                  required: { value: true, message: "This field is required" },
                })}
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="write about the book"
              ></textarea>
              <span>
                {errors.bookDescription && (
                  <p className="text-sm text-red-600 font-bold">
                    {errors.bookDescription.message}
                  </p>
                )}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-wide mx-auto flex items-center px-5 py-1 mt-4 sm:mt-6 text-base text-gray-400 bg-slate-900 font-medium text-center rounded-lg"
          >
            Book
          </button>
        </form>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default AddBook;
