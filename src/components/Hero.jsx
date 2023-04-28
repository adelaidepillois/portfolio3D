import React from 'react'
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {OrganicSphere} from './canvas';
import {Tilt} from "react-tilt";
import { fadeIn, textVariant } from "../utils/motion";


const Hero = (index) => {
    return (
        <section className="relative w-full h-screen mx-auto">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>
                <div className="grid-cols-6 lg:pr-[400px] md:pr-[250px]">
                    <div className=" flex flex-row">
                        <h1 className={`${styles.heroHeadText} text-white`}>Hello, Je suis <br className="sm:block hidden mt-5"/><span
                            className="text-[#915eff] title">Adélaïde Pillois</span>
                        </h1>
                        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
                            <Tilt
                                options={{
                                    max: 50,
                                    scale: 1.5,
                                    speed: 450,
                                }}
                            >
                        <img className="
                        rounded-full
                        border-2 border-sky-500
                        lg:h-[80px]
                        md:h-[80px]
                        h-[50px]
                        sm:h-[50px]
                        min-w-[50px]
                        md:min-w-[80px]
                        sm:min-w-[50px]
                        lg:ml-[20px]
                        sm:ml-[-1px]
                        sm:mt-[10px]
                        mt-[10px]
                        lg:mt-[55px]" src="../../public/memoji.png"/>
                            </Tilt>
                        </motion.div>
                    </div>
                    <p className={`text-[18px] mt-4 text-white`}>
                        Je suis une personne dynamique et créative qui aime les
                        défis.<br className="sm:block hidden mt-5"/>
                        Le développement informatique ainsi que la recherche de la
                        meilleure solution à mettre en place afin de garantir la meilleure
                        expérience utilisateur est un problème sur lequel j’aime réfléchir.
                        Je souhaite également élargir mes compétences et n’ai donc pas peur de découvrir de nouvelles
                        technologies.
                    </p>
                    <div className='mt-4 flex flex-wrap gap-2 '>
                        <p className={`text-[14px] bg-[#145612] text-white rounded-xl px-4 mt-1`}>
                            Créativité
                        </p>
                        <p className={`text-[14px] bg-[#BC90E4] text-white rounded-xl px-4 mt-1`}>
                            Rigueur
                        </p>
                        <p className={`text-[14px] bg-[#FDFFA6] text-black rounded-xl px-4 mt-1`}>
                            Curiosité
                        </p>
                        <p className={`text-[14px] bg-[#7029CBFF] text-white rounded-xl px-4 mt-1`}>
                            Travail en équipe
                        </p>
                        <p className={`text-[14px] bg-[#D7FFC5] text-black rounded-xl px-4 mt-1`}>
                            Adaptabilité
                        </p>
                    </div>
                    <div className='mt-4 flex flex-wrap gap-2'>
                        <p className={`text-[14px] bg-[#BC90E4] text-white rounded-xl px-4 mt-1`}>
                            React
                        </p>
                        <p className={`text-[14px] bg-[#D7FFC5] text-[black] rounded-xl px-4 mt-1`}>
                            ReactNative
                        </p>
                        <p className={`text-[14px] bg-[#7029CBFF] text-white rounded-xl px-4 mt-1`}>
                            JS
                        </p>
                        <p className={`text-[14px] bg-[#FDFFA6] text-black rounded-xl px-4 mt-1`}>
                            Django
                        </p>
                        <p className={`text-[14px] bg-[#BC90E4] text-white rounded-xl px-4 mt-1`}>
                            WorldPress
                        </p>
                        <p className={`text-[14px] bg-[#145612] text-white rounded-xl px-4 mt-1`}>
                            Parallax
                        </p>
                        <p className={`text-[14px] bg-[#D7FFC5] text-black rounded-xl px-4 mt-1`}>
                            COO-POO
                        </p>
                        <p className={`text-[14px] bg-[#FDFFA6] text-black rounded-xl px-4 mt-1`}>
                            Gestion de projet
                        </p>
                    </div>
                </div>
                <div className=" bg-cover bg-center ">
                    <OrganicSphere/>
                </div>
            </div>
            {/*<ComputersCanvas/>*/}
            <div className="absolute bottom-5 w-full flex justify-center items-center">
                <a href="#about">
                    <div
                        className="rounded-full w-[35px] h-[64px] round-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}

export default Hero
