import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/home-profile.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb  from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adinath Mahangare | Home</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
          
          <Layout className='pt-0'>

            <div className = "flex items-center justify-between w-full">
              <div className='w-1/2 pr-5'>
                <Image src={profilePic} alt="Adinath" className='w-full h-auto' priority/>
              </div>
              <div className='w-1/2 flex flex-col items-center self-center'>
                
                <AnimatedText text = "Building the Brighter Future, One Line at a Time" className = '!text-6xl !text-left '/>

                  <p className='my-4 text-base font-medium'>
                  With C/C++, Python, React.js, and SQL in my arsenal, I'm more than just a coder. Dive in my Next.js portfolio, where logic and data structures integrate seamlessly with object-oriented design to create beautiful, functional solutions. Let's collaborate and turn challenges into opportunities.
                  </p>
                  <div className='flex items-center self-start mt-2'>
                    <Link href = "/Adinath Mahangare.pdf" target = {"_blank"}
                    className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                    dark:bg-light dark:text-dark  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'
                    download={true}>Resume<LinkArrow className={"w-6 ml-1 "}/></Link>
                    <Link href = "mailto:adimahangare914@gmail.com" target={'_blank'}
                    className='ml-4 lext-lg font-medium capitalize text-dark underline dark:text-light'>Contact</Link>
                  </div>
                
              </div>
            </div>

          </Layout>
          <HireMe />
          <div className='absolute right-8 bottom-8 inline-block w-24'>
            <Image src = { lightBulb } alt = "Adinath Mahangare" className='w-full h-auto' />
          </div> 

      </main>
    </>
  )
}
