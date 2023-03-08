import React from 'react';
import { items } from './action';
// import { FaBeer } from 'react-icons/fa';
const ServicesCard = ( {item}:items ) => {
     
    return (
        <div className=' '>
            <div className="text-center max-w-sm   overflow-hidden   text-red-600 p-6 hover:bg-red-500 hover:text-[#d1d5db]">
                <div className="flex justify-center items-center ">
                    <div className="text-center  ">
                        {/* <FaBeer className="text-9xl text-red" /> */}
                        { item.icon}
                    </div>
                </div>
                <div className=" ">

                    <div className=" py-10 text text-xl mb-2">
                        <h1> {item.name} </h1>
                      
                         </div>
                    <p className=" text-left text-black">
                      {item.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;