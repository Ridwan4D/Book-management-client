import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/home/Home";
import AddBook from "../pages/AddBook";
import SecureRoute from "./SecureRoute";
import AllBooks from "../pages/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks";
import UpdateBook from "../pages/UpdateBook";
import Details from "../pages/Details";
import BookByCategory from "../pages/BookByCategory";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/addBook",
        element: (
          <SecureRoute>
            <AddBook />
          </SecureRoute>
        ),
      },
      {
        path: "/allBooks",
        element: (
          <SecureRoute>
            <AllBooks />
          </SecureRoute>
        ),
        loader: () => fetch("http://localhost:5000/allBooks",{credentials: "include"}),
      },
      {
        path: "/details/:id",
        element: (
          <SecureRoute>
            <Details />
          </SecureRoute>
        ),
        loader: () => fetch(`http://localhost:5000/allBooks`),
      },
      {
        path: "/borrowedBook",
        element: (
          <SecureRoute>
            <BorrowedBooks />
          </SecureRoute>
        ),
      },
      {
        path: "/updateBook/:id",
        element: <UpdateBook></UpdateBook>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allBooks/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/bookOfCategory/:bookCategory",
        element: (
          <SecureRoute>
            <BookByCategory />
          </SecureRoute>
        ),
        loader: ()=> fetch("http://localhost:5000/allBooks")
      },
    ],
  },
]);

export default router;
