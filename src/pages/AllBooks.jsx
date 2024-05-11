import { useLoaderData } from "react-router-dom";

const AllBooks = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);
    return (
        <div>
            <h3 className="mb-8 underline text-4xl font-bold dark:text-white">All Book</h3>
        </div>
    );
};

export default AllBooks;