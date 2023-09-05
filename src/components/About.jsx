/* eslint-disable no-unused-vars */
import React from 'react'

import Picture from "../assets/img/home.jpg"

const About = () => {
  return (
    <section id='about' className='section bg-secondary'>
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-24">
                <img
                    className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
                    src={Picture}
                    alt=''
                />
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="flex flex-col">
                        <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about
                        relative before:absolute before::opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                            Arshvir Chaudhary
                        </h2>
                        <p className='mb-4 text-accent'>
                            Software Developer
                        </p>
                        <hr className='mb-8 opacity-5' />
                        <p className='mb-8'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsa debitis qui minima suscipit officiis delectus obcaecati neque ut? Impedit eum et hic expedita eos tenetur amet deleniti eligendi reiciendis?
                        </p>
                    </div>
                    <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>
                        Contact me
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About