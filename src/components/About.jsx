import React from 'react';
import css from '../images/css.png';
import html from '../images/html.png';
import js from '../images/js.png';
import react from '../images/react.png';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>My Skillset</SectionTitle>
			</div>
			<div class="flex flex-col">

  <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div class="flex items-start rounded-xl bg-slate-800 p-4 shadow-lg">
		<img src={css}></img>
    </div>

    <div class="flex items-start rounded-xl bg-slate-800 p-4 shadow-lg">
		<img src={html}></img>
    </div>

    <div class="flex items-start rounded-xl bg-slate-800 p-4 shadow-lg">
		<img src={js}></img>
    </div>

    <div class="flex items-start rounded-xl bg-slate-800 p-4 shadow-lg">
    	<img src={react}></img>  
    </div>
  </div>
</div>
		</div>
	);
}

export default About;
