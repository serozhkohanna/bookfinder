import React from 'react';
import './DetailsPage.scss';
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import BookVolume from "../../components/BookVolume/BookVolume";

const DetailsPage = () => {
  return <main id='details-page'>
	<div className="container">
	  <Breadcrumb/>
	  <BookVolume/>
	</div>
  </main>
}

export default DetailsPage;