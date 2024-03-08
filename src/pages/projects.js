import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/HCS4.png"
import project3 from "../../public/images/projects/WFD2.png"
import project2 from "../../public/images/projects/FCA2.png"
import project4 from "../../public/images/projects/OES2.png"
import Image from 'next/image'
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]'/>

            <Link href = {link} target='_blank'
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <Image src ={img} alt = {title} className='w-full h-auto hover:scale-105 transition dusration-300
                sizes = "(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base '>
                        {type}
                </span>

                <Link href = {github} target = '_blank' className='hover:underline underline-offset-2 decoration-4'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>
                        {title}
                    </h2>
                </Link>

                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm '>
                    {summary}
                </p>

                <div className='mt-2 flex items-center '>
                    <Link href = {github} target = '_blank' className='w-10'><GithubIcon /></Link>
                    <Link href = {link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                        Visit Demo
                    </Link>
                </div>
            </div>
            

        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative flex-col dark:border-light dark:bg-dark xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:w-[102%] xs:rounded-[1.5rem] '/>
            <Link href = {link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg '>
                <Image src ={img} alt = {title} className='w-full h-auto hover:scale-105 transition duration-300'/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between  mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
                        {type}
                </span>

                <Link href = {link} target = '_blank' className='hover:underline underline-offset-2 decoration-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold dark:text-light lg:text-2xl '>
                        {title}
                    </h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href = {link} target='_blank' className='text-lg font-semibold underline decoration-2 dark:text-light md:text-base '>
                        Visit 
                    </Link>
                    <Link href = {github} target = '_blank' className='w-10 md:w-6'><GithubIcon /></Link>
                    
                </div>
            </div>
        </article>

    )
}

const projects = () => {
    return (
    <>
        <Head>
            <title>Adinath Mahangare | Projects</title>
            <meta name = "description" content = "about me" />
        </Head>

        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text = "Where Ideas Take Flight!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl '/>

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                        title="Smart Healthcare System"
                        summary = "A web-based system bridges the gap between local clinicians and hospital chains by securely storing and sharing the comprehensive medical history of every patient."
                        link ="https://youtu.be/S2JqewKXU20"
                        type = "Featured Project"
                        img = {project1}
                        github = "https://github.com/adinathmahangare/Final_Year_Project"
                        />

                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                        title="Firebase Contact App"
                        summary = "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                        link ="https://contact-app-three-iota.vercel.app/"
                        type = "Web Application"
                        img = {project2}
                        github = "https://github.com/adinathmahangare/contact-app"
                        />

                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                        <Project 
                        title="Weather Forecast Dashboard"
                        summary = "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                        link ="https://adinathmahangare.github.io/Weather-Forecast-Dashboard/"
                        type = "Simple Website"
                        img = {project3}
                        github = "https://github.com/adinathmahangare/Weather-Forecast-Dashboard"
                        />

                    </div>

                    <div className='col-span-12'>
                        <FeaturedProject 
                        title="Online Examination System"
                        summary = "a comprehensive System tailored for educational institutions and businesses, the system offers a seamless platform for creating, managing, and conducting online exams."
                        link ="https://youtu.be/-o4BCBXM5Ac"
                        type = "Featured Project"
                        img = {project4}
                        github = "https://github.com/adinathmahangare/Online-Examination-System"
                        />

                    </div>

                </div>
            </Layout>
        </main>
    </>
    )
}

export default projects