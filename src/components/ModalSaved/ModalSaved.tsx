import React from 'react';
import './ModalSaved.scss';
import { connect } from 'react-redux';
import { setSidebar } from "../../actions/actions";

const ModalSaved = ({setSidebar, isSidebarOpen, savedBooks}) => {
  const handleSidebar = () => {
	setSidebar(false);
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
			<ul className="modal-tabs-names">
			  <li className="tab-item" id='tab-item1'>All content</li>
			  <li className="tab-item" id='tab-item2'>Books</li>
			  <li className="tab-item" id='tab-item3'>Magazines</li>
			</ul>
		  </div>
		</div>
		<div className="modal-header-img">

		</div>
	  </div>
	  <div className="modal-body">
		body
	  </div>
	  <div className="modal-footer">
		12 item saved
	  </div>
	  <button className="modal-close" onClick={handleSidebar}>
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		  <path d="M11.8323 10.0001L19.6199 2.21215C20.1267 1.70557 20.1267 0.88651 19.6199 0.379933C19.1133 -0.126644 18.2943 -0.126644 17.7877 0.379933L9.99988 8.16793L2.21228 0.379933C1.70548 -0.126644 0.886669 -0.126644 0.380103 0.379933C-0.126701 0.88651 -0.126701 1.70557 0.380103 2.21215L8.1677 10.0001L0.380103 17.7881C-0.126701 18.2947 -0.126701 19.1138 0.380103 19.6204C0.632555 19.8731 0.964493 20 1.29619 20C1.62789 20 1.95959 19.8731 2.21228 19.6204L9.99988 11.8324L17.7877 19.6204C18.0404 19.8731 18.3721 20 18.7038 20C19.0355 20 19.3672 19.8731 19.6199 19.6204C20.1267 19.1138 20.1267 18.2947 19.6199 17.7881L11.8323 10.0001Z" fill="#333333"/>
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
  setSidebar
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalSaved);