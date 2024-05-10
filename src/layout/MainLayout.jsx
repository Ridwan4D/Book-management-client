import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { Nav } from "../components/Nav";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            {/* header */}
            <Nav></Nav>
            {/* outlet */}
            <Outlet/>
            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default MainLayout;
