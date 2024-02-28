import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
            py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark dark:shadow-light' 
            whileHover={{scale:1.05}}
            initial = {{x:0, y:0}}
            whileInView = {{x:x, y:y, transition: {duration:1.5}}}
            viewport={{once: true}}>

                {name}
            </motion.div>

    )

}

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
            p-8 shadow-dark cursor-pointer
            dark:bg-light dark:text-dark dark:shadow-light' whileHover={{scale:1.05}}>

                SDE
            </motion.div>
            <Skill name = "CSS" x = "-5vw" y = "-10vw" />
            <Skill name = "HTML" x = "-20vw" y = "2vw" />
            <Skill name = "ReactJS" x = "23vw" y = "6vw" />
            <Skill name = "C++" x = "0vw" y = "10vw" />
            <Skill name = "Python" x = "-20vw" y = "-15vw" />
            <Skill name = "NextJS" x = "15vw" y = "-12vw" />
            <Skill name = "SQL" x = "32vw" y = "-5vw" />
            <Skill name = "Tailwind" x = "0vw" y = "-21vw" />
            <Skill name = "Git" x = "-22vw" y = "18vw" />
            <Skill name = "Linux" x = "18vw" y = "18vw" />
            <Skill name = "Flask" x = "-20vw" y = "2vw" />
            <Skill name = "Firebase" x = "-38vw" y = "2vw" />

        </div>

    </>
    

  )
}

export default Skills