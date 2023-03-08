import React from 'react';
import { FaBeer } from 'react-icons/fa';
 
import ServicesCard from './ServicesCard';
interface servicesType{
    icon:React.ReactNode
    name:string,
    description:string
}
const data:servicesType[] = [
      {
        icon:<FaBeer className="text-9xl text-red" />,
        name:"photo grapher",
        description:"Who doesn't want to share their camera art with friends and family on social media? But why not share them on your own personal photography website and showcase your camera art to the world!"
      }
]
const Services = () => {
    return (
        <div>
              
     {
        data.map((item )=>
        <ServicesCard item={item}/>)
     }
        </div>
    );
};

export default Services;