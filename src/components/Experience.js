import React from 'react'
import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, location, work})=>{
    const ref = useRef(null);
    return <li ref = {ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex felx-col items-center justify-between'>

        <LiIcon reference = {ref}/>
        <motion.div
        initial = {{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}>


            <h3 className='capitalize font-bold text-2xl'>{position} <a href = {companyLink} 
            target="_blank"
            className='text-primary capitalize dark:text-primaryDark'
            > @{company} </a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/50'>
                {time} | {location}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target : ref,
            offset : ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Experience
            </h2>

            <div ref = {ref} className='w-[75%] mx-auto relative '>

                <motion.div
                style = {{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark' />

                

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                    position = "Outreach Consultant Intern" company="Grant Thornton"
                    companyLink="https://www.grantthornton.in/"
                    time = "November 2023" location="Remote"
                    work = "Conducted Secondary research to identify potential clients of Grant Thornton's products and services, Developed Retention Strategies and Use case mapping of identified clients. Presented analysis to stakeholders." />

                    <Details 
                    position = "Data Science Intern" company = "Exposys Datalabs"
                    companyLink="https://www.exposysdata.com/"
                    time = "November 2022" location = "Remote" 
                    work = "Identified segments of customers to target the potential user base, using K-means clustering algorithm and also visualized the gender and age distributions. Analyzed their annual incomes and spending scores."/>
                </ul>
            </div>
        
        </div>
    )
}

export default Experience