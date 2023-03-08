import React from 'react';
// import { FaBeer } from 'react-icons/fa';
interface servicesType{
    icon:React.ReactNode
    name:string,
    description:string
}
const ServicesCard = (props:{item:servicesType}) => {
     
    return (
        <div className=' '>
            <div className="text-center max-w-sm rounded overflow-hidden shadow-lg text-red-600 p-6 hover:bg-red-600 hover:text-[#d1d5db]">
                <div className="flex justify-center items-center ">
                    <div className="text-center  ">
                        {/* <FaBeer className="text-9xl text-red" /> */}
                        {props.item.icon}
                    </div>
                </div>
                <div className=" ">

                    <div className=" py-10 text text-xl mb-2">
                        <h1>PORTFOLIO  </h1>
                        <h1> PHOTOSHOOT</h1>
                         </div>
                    <p className=" text-left text-black">
                    Who doesn't want to share their camera art with friends and family on social media? But why not share them on your own personal photography website and showcase your camera art to the world!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;