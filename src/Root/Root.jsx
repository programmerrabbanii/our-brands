import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Bannar from "../Components/Bannar/Bannar";
import Footer from "../Components/Header/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Bannar></Bannar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;