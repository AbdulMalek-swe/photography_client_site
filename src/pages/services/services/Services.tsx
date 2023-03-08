import React from 'react';
import { AiFillCamera} from 'react-icons/ai';
import { MdEmojiPeople } from 'react-icons/md';
import {HiUserGroup } from 'react-icons/hi';
import ServicesCard from './ServicesCard';
import { servicesType } from './action';

const data:servicesType[] = [
      {
        icon:<AiFillCamera className="text-9xl text-red" />,
        name:"WEDDING PHOTOGRAPHY",
        description:"Who doesn't want to share their camera art with friends and family on social media? But why not share them on your own personal photography website and showcase your camera art to the world!"
      },
       {
        icon:<MdEmojiPeople className="text-9xl text-red" />,
        name:"PORTFOLIO PHOTOSHOOT",
        description:"This free website template is the first step to get you started with your personal photography website. Learn the game and get some fame. Don't restrict your photography viewership to  "
      },
      {
        icon:<HiUserGroup className="text-9xl text-red" />,
        name:"FESTIVAL COVERAGE",
        description:"This quality free website template is the best way to save money and time to get started with your photography website. The minimal things that you need are a little personalization in terms of color  "
      }
]
const Services = () => {
    return (
        <div className='container mx-auto py-10'>
              
    <div className='grid grid-cols-1 md:grid-cols-3 place-content-center place-items-center gap-4'>
    {
        data.map((item )=>
        <ServicesCard item={item}/>)
     } 
    </div>
        </div>
    );
};

export default Services;