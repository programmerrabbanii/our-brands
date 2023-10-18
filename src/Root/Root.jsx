import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Bannar from "../Components/Bannar/Bannar";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Bannar></Bannar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;