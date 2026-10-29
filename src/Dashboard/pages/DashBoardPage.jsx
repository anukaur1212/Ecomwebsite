import { NavLink, Outlet, useLocation, Link } from "react-router-dom";
import { RotateCw, Truck, ChevronRight, Home, ArrowUpRight } from "lucide-react";

const DashboardPage = () => {




    return (
        <>
            {/* RGP / NRGP Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 absolute -top-130 left-70">

                {/* RGP Card */}
                <NavLink
                    to="/productform"
                    className="rgp-card">

                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#eaf2eb] transition-transform duration-500 group-hover:scale-150" />

                    <div className="relative">
                        <div className="flex items-start justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf2eb] text-[#245b3e] transition-transform duration-300 group-hover:scale-110">
                                <RotateCw size={28} />
                            </div>

                            <ArrowUpRight
                                size={22}
                                className="text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#245b3e]"
                            />
                        </div>

                        <h2 className="mt-6 text-xl font-bold text-gray-800">
                            Returnable Gate Pass
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Create and manage products sent outside the organization
                            that are expected to return.
                        </p>

                        <div className="mt-6 flex items-center justify-between">
                            <span className="rounded-full bg-[#eaf2eb] px-3 py-1 text-xs font-semibold text-[#245b3e]">
                                RGP
                            </span>

                            <span className="text-sm font-semibold text-[#245b3e]">
                                View Records →
                            </span>
                        </div>
                    </div>
                </NavLink>

                {/* NRGP Card */}
                <NavLink
                    to="/productform"
                    className="rgp-card">
                   
                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-orange-50 transition-transform duration-500 group-hover:scale-150" />

                    <div className="relative">
                        <div className="flex items-start justify-between">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-transform duration-300 group-hover:scale-110">
                                <Truck size={28} />
                            </div>

                            <ArrowUpRight
                                size={22}
                                className="text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-600"
                            />
                        </div>

                        <h2 className="mt-6 text-xl font-bold text-gray-800">
                            Non-Returnable Gate Pass
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Create and manage products transferred permanently
                            outside the organization.
                        </p>

                        <div className="mt-6 flex items-center justify-between">
                            <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                                NRGP
                            </span>

                            <span className="text-sm font-semibold text-orange-600">
                                View Records →
                            </span>
                        </div>
                    </div>
                </NavLink>

            </div>

        </>
    );
};

export default DashboardPage;