import { NavLink } from "react-router-dom";
import { sidebar } from "../Constant/Navbar";
import { LogOut, ShieldCheck } from "lucide-react";
import "/src/App.css";

const Sidebar = () => {

    return (
        <>

            <div
                className="sidebar">
                <div>
                    {/* Logo */}
                    <div className="sidebar-logo">
                        <div className="logo-icon">
                            <ShieldCheck size={28} />
                        </div>

                        <div>
                            <h4>
                                PassFlow
                            </h4>
                            <p className="">
                                GATE PASS SYSTEM
                            </p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <ul className="sidebar-menu">
                        {sidebar.map((item) => (
                            <li key={item.name} className="relative">
                                <NavLink
                                    to={item.path}
                                    end={item.path === "/"}
                                    onClick={() => navHandler(true)}
                                    className="navbutton">
                                    <item.logo size={20} 
                                    className="sidebar-menu-icons"/>
                                    <span>{item.name}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bottom section */}
                <div className="sidebar-bottom">
                    {/* User profile */}
                    <div className="user-profile">
                        <div className="avatar">
                            A
                        </div>

                        <div>
                            <p>
                                Administrator
                            </p>
                            <small>System Admin</small>
                        </div>
                    </div>

                    {/* Logout */}
                    <button
                        className="logout">
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>
            </div>

        </>
    );
};

export default Sidebar;




