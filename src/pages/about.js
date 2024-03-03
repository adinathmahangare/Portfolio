import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/profile.png"
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'


const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000})
    const isinView = useInView(ref, {once:true});

    useEffect(() =>{
        if(isinView){
            motionValue.set(value);
        } 
    }, [isinView, value, motionValue])

    useEffect(()=>{
        springValue.on("change", (latest)=>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref = {ref}></span>
}

const about = () => {
    return (
    <>
        <Head>
            <title>Adinath Mahangare | About</title>
            <meta name = "description" content = "about me" />
        </Head>

        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text = "Beginner to Builder!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-9 gap-16 sm:gap-8'>
                    <div className='col-span-4 flex flex-col items-start justify-start xl:col-span-5 md:order-2 md:col-span-9'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/50'>Biography</h2>
                        <p className='font-medium '>Hello, I’m <b>Adinath Mahangare</b>, a software developer and machine learning enthusiast with a passion for creating innovative, intelligent, and user-friendly digital solutions. I am always eager to learn new skills and technologies to enhance my capabilities.</p>

                        <p className='font-medium my-4'>I believe that software development is about more than just writing code – it’s about solving problems and creating impactful, meaningful experiences for users. I have worked on various projects involving web development, mobile development, data science, natural language processing, computer vision, and deep learning. I have used a range of tools and frameworks such as Python, C++, Django, Flask, React, NextJS, Firebase, Tailwind, SQL, Git and Linux.</p> 

                        <p className='font-medium '>Whether I’m working on a web app, a mobile app, or a data science project, I bring my dedication to excellence and user-centric thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark
                    xl:col-span-4 md:order-1 md:col-span-9'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                        <Image src = {profilePic} alt = "Adinath" className='w-full h-auto rounded-2xl' priority 
                        sizes = "(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"/> 
                    </div>
                <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-9 xl:flex-row xl:items-center md:order-3'>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={15}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                    </div>

                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={10}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Certifications</h2>
                    </div>
                
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={1}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h2>
                    </div>

                </div>

                </div>


                <Skills />
                <Experience />
                <Education />
            </Layout>
            
        </main>
        
        
    </>   
    )
}

export default about