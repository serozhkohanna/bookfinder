import React from 'react';
import './Footer.scss';

import InstagramIcon from '../../assets/icons/instagram.svg';
import DribbbleIcon from '../../assets/icons/dribbble.svg';
import GitHubIcon from '../../assets/icons/github.svg';

const Footer = () => {
  return <footer>
	<ul className='social-block'>
	  <li className='social-block-item'>
		<a href="">
		  <img src={InstagramIcon} alt="inst-icon"/>
		</a>
	  </li>
	  <li className='social-block-item'>
		<a href="">
		  <img src={DribbbleIcon} alt="dribble-icon"/>
		</a>
	  </li>
	  <li className='social-block-item'>
		<a href="">
		  <img src={GitHubIcon} alt="github-icon"/>
		</a>
	  </li>
	</ul>
  </footer>
}

export default Footer;