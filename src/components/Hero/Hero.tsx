import React from 'react';
import './Hero.scss';
import HeroPic from '../../assets/icons/hero.svg';

import GetStartBtn from "../GetStartBtn/GetStartBtn";
import Anchor from "../Anchor/Anchor";

const Hero = () => {
  return <section className='hero'>
	<div className="hero-content">
	  <h2 className='hero-title'>
		Keep <b><i>reading</i></b>.
		Keep <b><i>living</i></b>.
	  </h2>
	  <div className="hero-desc">
		<p>
		  Book finder hepls to find book on your preferences. It contains full google books library, with more than 10
		  000 books and magazines.
		</p>
		<p>
		  <a className='link-bg'>
			<b>
			  Dive into e-books world!
			</b>
		  </a>
		</p>
	  </div>
	  <GetStartBtn/>
	</div>
	<div className="hero-illustration">
	  <img src={HeroPic} alt="hero"/>
	</div>
	<div className="hero-anchor">
	  <Anchor/>
	</div>
  </section>
}

export default Hero;