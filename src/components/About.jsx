import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';
import CV from "../assets/Resume_Anchit.pdf"

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='intro-bg h-full w-full intro-text sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Anchit Mishra, a passionate <a className='bodyText-highlighted duration-300' href='https://www.linkedin.com/in/anchitmishra/' target='_blank'>Software Developer</a> at It4t Solutions with a background in Mechanical Engineering. Specializing in React and JavaScript, I'm currently expanding my expertise in Node.js, MongoDB, Next.js, TypeScript, and Express. I thrive on creating robust, user-centric web applications that elevate user experiences.
            <br />
            <br />
              Beyond coding, I am dedicated to personal growth and fitness, drawing inspiration from books like "Atomic Habits" and "Can't Hurt Me." When I'm not coding, you'll find me exploring new destinations, staying active, and cultivating inner peace through spiritual practices.</p>

            <ButtonLink
              url={CV}
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;