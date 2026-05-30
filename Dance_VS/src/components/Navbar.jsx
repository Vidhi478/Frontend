import React from "react";
import 'remixicon/fonts/remixicon.css';

function Navbar() {
    const name = [
        { name: "Home", icon: "ri-home-3-line" },
        { name: "About", icon: "ri-arrow-right-double-line" },
        { name: "Dance style", icon: "ri-css3-line" },
        { name: "Events", icon: "ri-vip-crown-line" },
        { name: "Contact", icon: "ri-contacts-line" }
    ];

    return (
        <div>
            <div className="nav w-full h-16 md:h-20 bg-white shrink-0 flex items-center justify-between md:justify-around px-2 md:px-0 pt-1 pb-1 shadow-2xl fixed top-0 left-0 z-50">

                <div className="logo w-24 md:w-42 h-full overflow-hidden shrink-0">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.pinimg.com/webp/736x/35/49/96/354996cc847405a48a21fc764ba0e627.webp"
                        alt="logo"
                    />
                </div>

                <div className="w-auto md:w-4/5 h-full flex justify-center items-center overflow-x-auto whitespace-nowrap">
                    {
                        name.map((elem, index) => (
                            <div
                                key={index}
                                className="w-fit mx-2 md:mx-6 lg:mx-10 text-xs sm:text-sm md:text-base text-gray-800 font-medium shrink-0"
                            >
                                {elem.name} <i className={elem.icon}></i>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default Navbar;