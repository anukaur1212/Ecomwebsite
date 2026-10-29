import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import ProductForm from "../component/ProductFrom";
import { NavLink, Outlet } from "react-router-dom";



const Dashboard = () => {

    return (
        <div className="relative min-h-screen bg-slate-50">
            <Sidebar />
            <Header />


            <main>
                <Outlet />
            </main>



        </div >


    );
}

export default Dashboard;

