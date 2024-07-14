
import React from "react";
import spotify from '../assets/spotify.webp'
import chatify from '../assets/chatify.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    console.log(image)
    return (
        <div className="grid lg:grid-cols-12 gap-4 mb-4  bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#" className="lg:col-span-3 p-4">
                <img className="w-full h-full rounded-lg object-cover " src={image} alt="" />
            </a>
            <div className="lg:col-span-9">
                <div className="p-4 sm:p-6">
                    <a href="#">
                        <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                    </a>
                    <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
                </div>
                <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                    <div className='flex flex-wrap gap-2 pl-2'>
                        {technologies.map((tag, index) => (
                            <p
                                key={`${index}-${tag}`}
                                className='text-[14px] text-blue-500'
                            >
                                #{tag}
                            </p>
                        ))}
                    </div>
                    <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
                </div>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Spotify Clone',
        description:`The Spotify clone project, built with React 18 and the Spotify API, empowers users with music discovery and playlist management capabilities. Utilizing Redux for state management and React Router for seamless navigation ensures a user-friendly experience across devices. Overcoming complexities in API integration and asynchronous programming has strengthened the project's robustness in full-stack development, enhancing proficiency in both frontend and backend technologies.`,
        image: spotify,
        git:'https://github.com/TheMech4nic/spotify-clone',
        technologies:['ReactJS' , 'React-Redux']
    },
    {
        title:'Chatify',
        description:`Implemented the entire frontend with user account creation and login validation, and developed a fully responsive homepage with real-time updates using Socket.io. Designed the overall website concept, enabling users to send emojis and set avatars. Overcame API integration and asynchronous programming challenges, gaining valuable experience in full-stack development and enhancing proficiency in both frontend and backend technologies.`,
        image: chatify,
        git:"https://github.com/TheMech4nic/Chatify",
        technologies:[ 'React JS', 'Node JS', 'MongoDB', 'Express JS']
    }
]

export default Projects