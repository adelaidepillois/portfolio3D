import React, { useState } from "react";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../styles";
import {github} from "../assets";
import {SectionWrapper} from "../hoc";
import {projects} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";

const ProjectCard = ({
                         index,
                         name,
                         description,
                         tags,
                         videoSrc,
                         image,
                         source_code_link,
                     }) => {

    const [hoverDuration, setHoverDuration] = useState(0);

    const handleHover = () => {
        const hoverTimer = setTimeout(() => {
            setHoverDuration(hoverDuration + 1);
        }, 0); // Temps en millisecondes avant d'augmenter la durée de survol (ici 1 seconde)

        return () => {
            clearTimeout(hoverTimer);
        };
    };

    // const videoSrc='../../public/video/portfoliodjango.mp4';
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            onMouseOver={handleHover}
            onMouseLeave={() => setHoverDuration(0)}
            >
            <Tilt
                options={{
                    max: 45,
                    scale: 1.05,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] sm:h-[475px] md:w-[360px] md:h-[580px] w-full'
            >
                <div className='relative w-full h-[320px]'>
                    {hoverDuration < 3 && (
                        <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />
                    )}
                    {hoverDuration > 3 && (
                        <div className="absolute">
                        <video src={videoSrc} autoPlay controls className="w-[320px] h-[320px] object-cover rounded-2xl" />
                        </div>
                    )}
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        {source_code_link !== '' && (
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >

                                <img
                                    src={github}
                                    alt='source code'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                        </div>
                        )}
                    </div>
                </div>

                <div className='mt-[20px]'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text`}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projets.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Les projets suivants mettent en valeur mes compétences et mon
                    expérience à travers des exemples concrets.
                    Chaque projet est brièvement décrit avec des liens vers les repo GitHub ainsi que
                    des démonstrations en direct (onHover).
                    Cela reflète ma capacité à résoudre des problèmes, mon appétence pour l'apprentissage de nouvelles
                    technologies ainsi que mon envie de mettre à contribution ma créativité dans mon travail.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "work");
