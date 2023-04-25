import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    logostlouis,
    logofeelity,
    logoliryc,
    logokanbios,
    berkeley,
    logounivpoit,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Developeuse Front",
        company_name: "Feelity, Bordeaux",
        icon: logofeelity,
        iconBg: "#1d6020",
        date: "( Nov 2022 - Aujourd'hui )",
        points: [
            "Feelity développe des projets innovants sur-mesure pour aider les entreprises à numériser leur métier",
            "J'ai pu participer à 2 projets en ReactNative et un projet utilisant les techologies Ionic et Angular",
            "ReactNative, Ionic, Angular",
        ],
    },
    {
        title: "Alternance Développeuse web",
        company_name: "Kanbios, Bordeaux",
        icon: logokanbios,
        iconBg: "#D7FFC5",
        date: "( 2021 - 2022 )",
        points: [
            "J’ai pu participer à la construction de back-office pour site internet, à la mise en place de parallaxe, mais aussi à la refonte complète de site web",
            "Participé à sept projets différents : deux projets internes, deux projets de formation, un projet no-code et deux projets de refonte de site",
            "Django, WordPress, HTML, CSS, PHP, JS, Docker, Bootstrap, React, Divi, Gestion de projet agile",
        ],
    },
    {
        title: "Master Génie Physiologie Biotechnologie et Informatique",
        company_name: "Université de Poitiers",
        icon: logounivpoit,
        iconBg: "#76cc7b",
        date: "( 2020 - 2022 )",
        points: [
            "Ce master se caractérise par une double-compétence entre biologie-santé et nouvelles technologies de l’information et de la communication",
            "COOPOO, IHM, Gestion de projet agile, Java, Python, Django, BDD (SQL, Oracle), Synthèse d'image (WebGL), JEE, Android",
        ],
    },
    {
        title: "Stage Bio - Informatique",
        company_name: "IHU Liryc, Haut Lévêque Pessac",
        icon: logoliryc,
        iconBg: "#D7FFC5",
        date: "( 2021 - 3 mois )",
        points: [
            "Construction et mise en place d'une plateforme numérique d'intégration de données médicales issues de différentes sources (cliniques, exploratoires et/ou interventionnelles) pour la sélection de données et anonymisation à la volée pour transfert à l'IHU-LiRyc dans le cadre de projets de recherche",
            "Mise en place deux API (FastAPI, Python) pour faire dialoguer un serveur d'archivage de données médicales et un serveur dédié à la recherche",
        ],
    },
    {
        title: "Licence Génie Bio -Informatique",
        company_name: "Université de Poitiers",
        icon: logounivpoit,
        iconBg: "#D7FFC5",
        date: "( 2018 - 2020 )",
        points: [
            "Formation double compétence en biologie et en informatique",
            "Les objectifs visés sont la maîtrise des bases scientifiques nécessaires au traitement de l'information biologique, la maîtrise des techniques de base du traitement de cette information ainsi que la découverte du monde de l'entreprise dans le secteur biologie-santé",
            "Ada, Python, Traitement d'image, HTML, CSS, PHP, Algorithmique et programmation.",
        ],
    },
    {
        title: "Stage Agro écologie",
        company_name: "UC Berkeley, California USA",
        icon: berkeley,
        iconBg: "#76cc7b",
        date: "( 2019 - 3 mois )",
        points: [
            "By joining the research team led by Timothy Bowles I had the opportunity to work on one of their project led by Coleman Rainey",
            "Studying how small farms in California can improve their economic and social resilience while sequestering carbon, improving water retention, and promoting soil biological diversity",
            "To do this, the Bowles Lab composed a team of seven students. Each had their own area of focus, and mine was carbon and carbon stabilization in soil",
        ],
    },
    {
        title: "BTS Biotechnologies",
        company_name: "Lycée St Louis, Bordeaux",
        icon: logostlouis,
        iconBg: "#429646",
        date: "( 2016 - 2018 )",
        points: [
            "Culture scientifique : mathématiques, physique-chimie et biologie",
            "Savoir-faire technologiques en biochimie analytique, en biologie moléculaire, en biochimie des protéines (purifications,  enzymologie), en microbiologie et génie fermentaire, en biologie et technologies appliquées aux cellules eucaryotes",
            "Savoir-faire scientifiques : Exploitation raisonnée de résultats expérimentaux et mise au point de modes opératoires à partir de documents bibliographiques",
            "Savoir-faire en communication de contenus scientifiques en français et en anglais",
        ],
    },
    {
        title: "Baccalauréat Sciences et Technologies de Laboratoire",
        company_name: "Lycée St Louis, Bordeaux",
        icon: logostlouis,
        iconBg: "#1d6020",
        date: "( 2014 - 2016 )",
        points: [
            "Au travers d’enseignements privilégiant la démarche expérimentale et la démarche de projet, les élèves acquièrent des compétences en Biologie, en Biochimie et en Biotechnologies",
            "Ils apprennent à mettre en œuvre des techniques d’observations, de mesure et d’analyse, de fabrication pour différents produits de la santé (antibiotiques, bilan sanguin…), de l'environnement (contrôle de l'air, épuration des eaux…), des bio-industries (produits alimentaires, produits pharmaceutiques, biocarburants…), des industries de la chimie (produits cosmétiques, pharmaceutiques…)",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };
