import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaGithub } from "react-icons/fa";

const main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=100" alt="/" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50' >
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-3xl text-3xl text-gray-800'>I'm Deontae Hicks</h1>
            <h2 className='flex sm:text-2xl text-1xl pt-4 text-gray-800'>I'm a 
                <TypeAnimation
        sequence={[
            // Same substring at the start will only be typed out once, initially
            'Developer',
            2000, // wait 1s before replacing "developer" with "programmer"
            'Progammer',
            2000,
            'Tech lover',
            2000,
        
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
        repeat={Infinity}
             />
            </h2>

            <div className='flex justify-between pt-6 max-w-[50px] w-full'>
                <a href="www.linkedin.com/in/deontae-hicks-4579171bb">
                <FaLinkedin className='cursor-pointer' size={20} />
                </a>
                <a href="GitHub.com/Dhicks-dev">
                <FaGithub   className='cursor-pointer' size={20}/>
                </a>
            </div>
        </div>

        </div>
    </div>
  )
}

export default main

