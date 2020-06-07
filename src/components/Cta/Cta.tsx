import React from 'react';
import './Cta.scss';

import GetStartBtn from "../GetStartBtn/GetStartBtn";

const Cta = () => {
  return <section className='cta'>
	<div className="container">
	  <h3 className='cta-title'>
		Dive into <b><i>incredible</i></b> text world
	  </h3>
	  <div className="cta-action">
		<GetStartBtn/>
	  </div>
	</div>
  </section>
}

export default Cta;