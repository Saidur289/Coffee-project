import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast, { Toaster } from 'react-hot-toast';


const MainLayouts = () => {
    return (
        <div>
            {/* navbar */}
            <Toaster/>
           <div className="h-16">
           <Navbar></Navbar>
           </div>
            <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
                <Outlet></Outlet>
            </div>
            {/* dynamic */}
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;