import React from "react";

function Footer() {
    return (
        <div>
            <div className="footer w-full min-h-20 mt-10 flex flex-col sm:flex-row items-center p-2 bg-mauve-50">

                <h3 className="w-full sm:w-5/6 text-center italic font-sans text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-5 px-2">
                    Dance is the language of the soul, expressing what words cannot.
                    Every beat inspires movement, and every movement tells a story.
                    Step into the rhythm and discover your true passion.
                </h3>

                <div className="w-20 h-20 sm:w-24 sm:h-full md:w-30 mt-2 sm:mt-0">
                    <img
                        className="w-full h-full object-cover"
                        src="https://i.pinimg.com/736x/28/71/13/28711383e50b9f14df5b5b37dd618305.jpg"
                        alt="Dance"
                    />
                </div>

            </div>
        </div>
    );
}

export default Footer;