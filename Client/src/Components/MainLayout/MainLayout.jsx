import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className="bg-gradient-to-r from-purple-700 to-pink-700">
                <Footer></Footer>

            </div>

        </div>
    );
};

export default MainLayout;