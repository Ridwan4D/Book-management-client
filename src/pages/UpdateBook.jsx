import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
const UpdateBook = () => {
  const loadedBook = useLoaderData();
  const navigate = useNavigate();
  // console.log(loadedBook);
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const handleUpdateBook = data =>{
    // console.log(data);
    axios.put(`http://localhost:5000/addBooks/${loadedBook._id}`,data)
    .then(res => {
      console.log(res.data);
      if (res.data.modifiedCount) {
        toast.success("Book Data Updated");
        setTimeout(() => {
          navigate("/allBooks");
        }, 1000);
      }else{
        toast.error("Nothing Changed")
      }
    })
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
                defaultValue={loadedBook.image}
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
                defaultValue={loadedBook.book}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Write Book Name"
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
                defaultValue={loadedBook.author}
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
                {...register("bookCategory")}
                defaultValue={loadedBook.bookCategory}
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
                defaultValue={loadedBook.rating}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Book Rating (1-5)"
              />
              
            </div>
          <button
            type="submit"
            className="btn w-full mx-auto flex items-center px-5 py-1 mt-4 sm:mt-6 text-base text-gray-400 bg-slate-900 font-medium text-center rounded-lg"
          >
            Book
          </button>
          </div>
        </form>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default UpdateBook;
