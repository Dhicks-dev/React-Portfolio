import React from 'react'
import ProjectItem from './ProjectItem'
import computerImg from '../assets/computer.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-16'>
        <h1 className='text-3xl font-bold text-center text-[#0015be]'>Projects</h1>
        <p className='text-center py-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Quidem beatae tenetur, illo hic nihil facilis placeat necessitatibus
          quo vel magnam quae dolor omnis minima dignissimos eius reiciendis 
          quia! Hic, ea.
          </p>

          <div className='grid sm:grid-cols-2 gap-12 '>
            <ProjectItem img={computerImg} title='computer app' />
            <ProjectItem img={computerImg} title='computer app' />
            <ProjectItem img={computerImg} title='computer app' />
            <ProjectItem img={computerImg} title='computer app' />
            
            
          </div>

    </div>
  )
}

export default Projects