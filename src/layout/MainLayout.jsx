import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            {/* header */}
            <Header/>
            {/* outlet */}
            <Outlet/>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default MainLayout;
