import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
const UpdateBook = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const handleUpdateBook = data =>{
    console.log(data);
  }


  return (
    <div>
      <h2 className="mb-8 underline text-4xl font-bold dark:text-white">
        Update Book
      </h2>
      <div className="py-8 px-4 mx-auto max-w-6xl lg:py-16 bg-orange-300 rounded-md">
        <form onSubmit={handleSubmit(handleUpdateBook)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <label className="block mb-1 text-lg font-semibold text-white">
                Image
              </label>
              <input
                type="text"
                {...register("image")}
                name="image"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter Image URL"
              />
              
            </div>
            <div className="w-full">
              <label className="block mb-1 text-lg font-semibold text-white">
                Book Name
              </label>
              <input
                type="text"
                {...register("book")}
                name="book"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write Book Name"
              />
              
            </div>
            <div className="w-full">
              <label className="block mb-1 text-lg font-semibold text-white">
                Book Quantity
              </label>
              <input
                type="text"
                {...register("quantity")}
                name="quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Number Of Book"
              />
              
            </div>
            <div>
              <label className="block mb-1 text-lg font-semibold text-white">
                Author
              </label>
              <input
                type="text"
                {...register("author")}
                name="author"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write Author Name"
              />
              
            </div>
            <div>
              <label className="block mb-1 text-lg font-semibold text-white">
                Category
              </label>
              <select
                className="select select-bordered w-full"
                {...register("selectOption")}
              >
                <option value="0" disabled selected>
                  Select Category
                </option>
                <option value="Thriller">Thriller</option>
                <option value="History">History</option>
                <option value="History">History</option>
                <option value="Drama">Drama</option>
                <option value="Novel">Novel</option>
                <option value="Fiction">Fiction</option>
                <option value="Other">Other</option>
              </select>
              
            </div>
            <div>
              <label className="block mb-1 text-lg font-semibold text-white">
                Rating
              </label>
              <input
                type="text"
                {...register("rating")}
                name="rating"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Book Rating (1-5)"
              />
              
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-1 text-lg font-semibold text-white">
                Description
              </label>
              <textarea
                name="bookDscription"
                {...register("bookDescription")}
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="write about the book"
              ></textarea>
              
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

export default UpdateBook;
