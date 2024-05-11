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
        loader: ()=> fetch('http://localhost:5000/allBooks')
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
