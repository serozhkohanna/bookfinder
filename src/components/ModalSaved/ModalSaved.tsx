import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './ModalSaved.scss';
import { connect } from 'react-redux';

import NoContentItem from '../../assets/img/nocover.png';
import NoSavedIcon from '../../assets/img/nosaved.png';
import CloseIcon from '../../assets/icons/close.svg';

import { SEARCH_PAGE } from "../../constants/routes";

import { setBookVolume, setSidebar, setSaved } from "../../actions/actions";

const ModalSaved = ({setSidebar, isSidebarOpen, savedBooks, setBookVolume, setSaved}) => {
  const history = useHistory();
  const [isActiveTab, setActiveTab] = useState('tab-item1');

  const handleSidebar = () => {
	setSidebar(false);
  }

  const handleTabSwitch = (tab) => {
	setActiveTab(tab);
  }

  const handleSaved = (item) => {
	setSaved(item);
  }

  const renderTabContent = () => {
	let typeBookContent = savedBooks.filter(item => {
	  return item.volumeInfo.printType === 'BOOK'
	})

	let typeMagazineContent = savedBooks.filter(item => {
	  return item.volumeInfo.printType === 'MAGAZINE'
	})

	const renderTemplate = (books) => {
	  if (books.length > 0) {
		return books.map((item, i) => {
		  return <div key={i} className='saved-card'>
			<div className="saved-card-img">
			  <img src={item.volumeInfo?.imageLinks?.thumbnail || NoContentItem} alt="saved-item-img"/>
			</div>
			<div className="saved-card-content">
			  <div className="saved-title">
				{item.volumeInfo.title}
			  </div>
			  <div className="saved-author">
				{item.volumeInfo.authors?.map((item, i) => {
				  return <p key={i}>{item}</p>
				})}
			  </div>
			  <div className="saved-category">
				<button className='remove-btn' onClick={() => handleSaved(item)}>
				  <img src={CloseIcon} alt="remove"/>
				</button>
				<button
				  className="button danger is-small">{item.volumeInfo.categories && item.volumeInfo.categories[0]}</button>
			  </div>
			  <div className="saved-params">
				{item.accessInfo?.epub?.isAvailable || item.accessInfo?.pdf?.isAvailable &&
								<div
									className="param-item">Formats: <span>{item.accessInfo?.epub?.isAvailable ? 'epub' : ''}</span><span>{item.accessInfo?.pdf?.isAvailable ? 'pdf' : ''}</span>
								</div>}
				<div className="param-item">Pages: <span>{item.volumeInfo.pageCount}</span></div>
			  </div>
			  <a className="show-more" onClick={() => handleMoreClick(item)}>
				Show more
			  </a>
			</div>
		  </div>
		})
	  } else return <div className='no-content'>
		<div className="no-title">
		  <h3>No saved books</h3>
		</div>
		<div className="img-wrapper">
		  <img src={NoSavedIcon} alt="emty-content"/>
		</div>
		<button className="button secondary is-large">GET STARTEG</button>
	  </div>
	}

	const handleMoreClick = (item) => {
	  history.push(`${SEARCH_PAGE}/${item.id}`);
	  setBookVolume(item);
	  setSidebar(false);
	}

	return <div className="modal-body-content">
	  <div id="tab-item1" className={`${isActiveTab === 'tab-item1' && 'is-active'} tab-content`}>
		{renderTemplate(savedBooks)}
	  </div>
	  <div id="tab-item2" className={`${isActiveTab === 'tab-item2' && 'is-active'} tab-content`}>
		{renderTemplate(typeBookContent)}
	  </div>
	  <div id="tab-item3" className={`${isActiveTab === 'tab-item3' && 'is-active'} tab-content`}>
		{renderTemplate(typeMagazineContent)}
	  </div>
	</div>
  }

  return <section className={`modal-wrapper ${isSidebarOpen && 'isOpen'}`}>
	<div className="modal modal-saved">
	  <div className="modal-header">
		<div className="modal-header-content">
		  <div className="modal-title">
			<h2>
			  Your <i><b>saved </b></i>
			  books
			</h2>
		  </div>
		  <div className="modal-tabs">
			<nav className="modal-tabs-names">
			  <a className={`${isActiveTab === 'tab-item1' && 'is-active'} tab-item`} href='#tab-item1'
				 onClick={() => handleTabSwitch('tab-item1')}>All content</a>
			  <a className={`${isActiveTab === 'tab-item2' && 'is-active'} tab-item`} href='#tab-item2'
				 onClick={() => handleTabSwitch('tab-item2')}>Books</a>
			  <a className={`${isActiveTab === 'tab-item3' && 'is-active'} tab-item`} href='#tab-item3'
				 onClick={() => handleTabSwitch('tab-item3')}>Magazines</a>
			</nav>
		  </div>
		</div>
		<div className="modal-header-img">

		</div>
	  </div>
	  <div className="modal-body">
		{renderTabContent()}
	  </div>
	  {savedBooks?.length > 0 && <div className="modal-footer">
				<p>{savedBooks?.length} books saved</p>
			</div>}
	  <button className="modal-close" onClick={handleSidebar}>
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		  <path
			d="M11.8323 10.0001L19.6199 2.21215C20.1267 1.70557 20.1267 0.88651 19.6199 0.379933C19.1133 -0.126644 18.2943 -0.126644 17.7877 0.379933L9.99988 8.16793L2.21228 0.379933C1.70548 -0.126644 0.886669 -0.126644 0.380103 0.379933C-0.126701 0.88651 -0.126701 1.70557 0.380103 2.21215L8.1677 10.0001L0.380103 17.7881C-0.126701 18.2947 -0.126701 19.1138 0.380103 19.6204C0.632555 19.8731 0.964493 20 1.29619 20C1.62789 20 1.95959 19.8731 2.21228 19.6204L9.99988 11.8324L17.7877 19.6204C18.0404 19.8731 18.3721 20 18.7038 20C19.0355 20 19.3672 19.8731 19.6199 19.6204C20.1267 19.1138 20.1267 18.2947 19.6199 17.7881L11.8323 10.0001Z"
			fill="#333333"/>
		</svg>
	  </button>
	</div>
  </section>
}

const mapStateToProps = ({application, savedBooks}) => {
  return {
	isSidebarOpen: application.isSidebarOpen,
	savedBooks: savedBooks.savedBooks
  }
}

const mapDispatchToProps = {
  setSidebar,
  setBookVolume,
  setSaved
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSaved);