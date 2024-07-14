import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";
import Background from './Background';
import Footer from './Footer';

const Home = () => {

	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < name.length) {
				ref.current++;
				setText(() => text + name[ref.current - 1]);
			}
		}, 500);
		return () => clearInterval(interval);
	}, [text]);

	return (
		<div className='area relative z-0 body-bg body-text w-screen h-screen'>
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className='hero relative h-[calc(100vh)] flex justify-center items-center body-text' id='hero'>
				<div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
					<h1 className='text-6xl sm:text-7xl font-extrabold mt-2 text-center'>Hi, I'm&nbsp;<span className='bodyText-highlighted font-extrabold'>{text}</span></h1>
					<p className='mt-3 text-xl'>With expertise in React, I craft intuitive and dynamic user interfaces. Currently, I'm enhancing my skills in Node.js, Express, and MongoDB</p>
				</div>      
			</div>
			<Footer/>
		</div>	
	);
}

export default Home;