import React, { useState } from 'react';
import './FilterParams.scss';
import { filters } from "../../constants/filter-params";

const FilterParams = () => {
  const [isOpen, setAccordion] = useState(true);
  const handleCloseHeader = () => (e) => {
  }

  return <aside className='filter-params'>
	{
	  filters.map(item => {
		return (
		  <div key={item.id} className='filter-params-item'>
			<div className="filter-header" onClick={handleCloseHeader()}>
			  <p>{item.type}</p>
			  <svg className='chevron-icon' width="20" height="12" viewBox="0 0 20 12" fill="none"
				   xmlns="http://www.w3.org/2000/svg">
				<path
				  d="M19.6803 1.08077L19.0252 0.42109C18.819 0.215072 18.5447 0.101575 18.2515 0.101575C17.9585 0.101575 17.6839 0.215072 17.4777 0.42109L10.0045 7.89465L2.52262 0.412797C2.31677 0.206779 2.04213 0.0934448 1.74912 0.0934448C1.45611 0.0934448 1.18131 0.206779 0.975293 0.412797L0.320003 1.06841C-0.106668 1.49476 -0.106668 2.18923 0.320003 2.61558L9.22804 11.5557C9.4339 11.7615 9.70821 11.9065 10.0038 11.9065H10.0072C10.3004 11.9065 10.5747 11.7613 10.7806 11.5557L19.6803 2.63981C19.8865 2.43395 19.9997 2.15135 20 1.85834C20 1.56516 19.8865 1.28646 19.6803 1.08077Z"
				  fill="#fff"/>
			  </svg>
			</div>
			<div className="filter-body">
			  {item.options.map((option, id) => <p key={id}>{option}</p>)}
			</div>
		  </div>
		)
	  })
	}
  </aside>
}

export default FilterParams;