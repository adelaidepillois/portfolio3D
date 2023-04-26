import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import {styles} from "../styles";
import {experiences} from "../constants";
import {SectionWrapper} from "../hoc";
import {textVariant} from "../utils/motion";

const ExperienceCard = ({experience}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#2E0C59",
                color: "#fff",
                borderRadius: 20,
            }}
            contentArrowStyle={{borderRight: "0px solid  #232631"}}
            iconStyle={{background: experience.iconBg}}
            icon={
                <div className='flex justify-center items-center w-full h-full'>
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[60%] h-[60%] object-contain'
                    />
                </div>
            }
        >
            <div>
                <h3 className='text-[#BC90E4] text-[24px] font-bold'>{experience.title}</h3>

                <p
                    className='text-[#FDFFA6] text-[16px] font-semibold'
                    style={{margin: 0}}
                >
                    {experience.company_name} -
                </p>
                <p
                    className='text-[#FDFFA6] text-[26px] font-semibold'
                    style={{margin: 0}}
                >
                    &nbsp;{experience.date}
                </p>

            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <p className={`${styles.sectionSubText} text-center text`}>
                What I have done so far
            </p>
            <h2 className={`${styles.sectionHeadText} text-center`}>
                Experience.
            </h2>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "about");
