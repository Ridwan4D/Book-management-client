import { IoChevronBack } from "react-icons/io5";
import errPic from "../assets/6325254.jpg";
import { useLocation, useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackBtn = () => {
    navigate(location.state ? location.state : "/");
  };
  return (
    <div>
      <div>
        <img src={errPic} alt="" className="h-[85vh] w-8/12 mx-auto" />
        <div className="flex justify-center">
          <button onClick={handleBackBtn} className="btn btn-wide text-2xl">
            <IoChevronBack />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
