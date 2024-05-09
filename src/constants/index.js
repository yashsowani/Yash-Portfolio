import { meta, shopify, starbucks, tesla, version1, microsoft, pepcoding } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    java,
    python
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Associate Consultant",
        company_name: "Version 1",
        icon: version1,
        iconBg: "#accbe1",
        date: "July 2023 - Present",
        points: [
            "Integral team member of the PAYE Modernisation team at Department of Revenue, actively contributing to the success of projects through on-site collaboration and understanding of client-specific requirements.",
            "Led crucial projects like the Jobs and Pensions project, utilizing TypeScript and Cypress for efficient development and testing. Spearheaded TypeScript vs. Java comparison for optimal tech solutions, showcasing leadership and decision-making skills.",
            "Involved in the development and testing of the Mortgage Interest Relief (MIR) ingredient in Form 12 using Java and Spring, ensuring accuracy and efficiency in tax filing processes.",
            "Took charge of creating and maintaining regression test packets for various components, including form12, Receipts tracker, POS, and Prompt for Action (PFA), while also analyzing and updating URLs for myAccount access.",
        ],
    },
    {
        title: "Capstone : AI Sports Article Generator",
        company_name: "Microsoft",
        icon: microsoft,
        iconBg: "#fbc3bc",
        date: "May 2023 - August 2023",
        points: [
            "Collaborated with Microsoft and teamed with 4 other students to utilize LLMs for football match articles.",
            "Initiated an increase in match coverage by almost 15 percent by covering lower leagues with this article generation.",
            "Responsible for engaging user experiences with React on the frontend and robust capabilities of Flask on the backend to deliver a dynamic web application."
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Pepcoding Education Private Limited",
        icon: pepcoding,
        iconBg: "#b7e4c7",
        date: "August 2021 - January 2022",
        points: [
            "Involved in the complete development, testing and maintenance process of the web application.",
            "Responsible for gathering the requirements doing the analysis and formulating the requirements specifications with the consistent inputs/requirements.",
            "Quickly learned new skills and applied them to daily tasks, improving efficiency and productivity.",
            "Pulled from React JS, SQL, JavaScript and other back-end library knowledge to bolster programming resources."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-red',
    //     name: 'Amazon Price Tracker',
    //     description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    //     link: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'AI Sports Article Generator (Collaboration with Microsoft)',
        description: 'Responsible for engaging user experiences with React on the frontend and robust capabilities of Flask on the backend to deliver a dynamic web application. Initiated an increase in match coverage by almost 15 percent by covering lower leagues with this article generation.',
        link: 'https://github.com/Parvez96/AI-Sports-Article-Generator',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Quickr - Transfer Files Easily',
        description: 'Quickr application simplifies the process of transferring a URL, text, or document from one device to another. Registration not required, just upload the file and immediately after it is uploaded, a QR code is generated that can be scanned by a smartphone and a shortened URL is available that can be used in another PC to direct users to the resource download landing page. Eliminates the requirement for creating an account, downloading their software, or maintaining sync for particular files or folders.',
        link: 'https://github.com/yashsowani/Quickr',
    }
];