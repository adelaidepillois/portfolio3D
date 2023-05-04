import React, {useRef, useState, useEffect } from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";
import {styles} from "../styles";
import {ModelViewer} from "./canvas";
import {SectionWrapper} from "../hoc";
import {slideIn} from "../utils/motion";
import peinture from "./../assets/peinture.jpg";
import {newlogo} from '../assets';
import nuage from "./../assets/nuage.jpg";


const Contact = () => {

    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        setScreenWidth(window.innerWidth);
        window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
        return () =>
            window.removeEventListener("resize", () =>
                setScreenWidth(window.innerWidth)
            );
    }, []);

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {target} = e;
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_ctwqgqg',
                'template_34krmya',
                {
                    from_name: form.name,
                    to_name: "Adélaïde",
                    from_email: form.email,
                    to_email: "a.pillois@gmail.com",
                    message: form.message,
                },
                '4-n4Gfa_MAoymm8q_',
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Merci. Je reviens vers vous le plus vite possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, une erreur est survenue. Veuillez réessayer.");
                }
            );
    };

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={`${styles.sectionSubText} text`}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Nom :</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            className='bg-[#241c4f] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Adresse Email :</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}

                            className='bg-[#241c4f] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Message :</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className='bg-[#241c4f] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-[#241c4f] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                    >
                        {loading ? "Envoie en cours..." : "Envoyer"}
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='h-full
                 flex-[0.75]
                  flex flex-col
                   xl:w-[30px]
                    md:h-[550px]
                      h-[800px]
                        sm:h-[400px]
                         lg:h-[900px]'
            >
                <img className={`w-full object-cover rounded-2xl ${
          screenWidth < 1280 ? "h-[150px] absolute pb-4" : "absolute h-[900px]"
                }`} src={nuage}/>
                <img className={`w-full object-cover rounded-2xl ${
                    screenWidth < 1280 ? "h-[230px] mt-[-35px] ml-[350px] w-[230px] absolute pb-4" : "absolute h-[700px] pt-[250px]"
                }`} src={newlogo}/>
                {/*<ModelViewer scale="20" modelPath={"./../../public/Logo2/adeLogo3.gltf"}/>*/}
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
