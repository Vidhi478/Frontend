import React from "react";
import { useParams } from "react-router-dom";
import { all } from "../data/dancedata";

function Detail() {
    const { id } = useParams();

    const dance = all.find(
        (item) => item.id === Number(id)
    );

    return (
        <div>
            <div className="w-full mt-24 md:mt-30 flex flex-col md:flex-row p-3">

                <div className="h-72 w-full sm:w-80 sm:h-80 md:h-96 md:w-96 mx-auto md:ml-10 rounded-4xl overflow-hidden shadow-xl shadow-black">
                    <img
                        className="w-full h-full object-cover hover:border-2 hover:border-black hover:shadow-black"
                        src={dance.image}
                        alt={dance.name}
                    />
                </div>

                <div className="w-full md:w-5/6 mt-6 md:mt-0 md:ml-10">

                    <h1 className="text-center mb-5 font-sans text-fuchsia-950 text-3xl sm:text-4xl md:text-5xl font-bold italic">
                        {dance.name}
                    </h1>

                    <hr />

                    <h4 className="text-base sm:text-lg md:text-xl m-4 md:m-10 text-gray-600 font-semibold font-sans">
                        {dance.info}
                    </h4>

                </div>

            </div>
        </div>
    );
}

export default Detail;