import React from 'react';
import './SortParams.scss';
import { SearchParams } from "../../constants/interfaces";
import { setBooks, setAdvancedRequest } from "../../actions/actions";
import { connect } from 'react-redux';

const SortParams = ({setBooks, setAdvancedRequest, params}) => {
  const handleSort = (orderBy) => {
    params.orderBy = orderBy;

    setAdvancedRequest({orderBy});
    setBooks(params);
    console.log(params);
  }

  return <section className='sort-params'>
    <div className="sort-button" onClick={() => handleSort('relevance')}>
      <svg className='sort-icon' width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.3535 1.58043L2.60348 0.122092C2.40847 -0.0406161 2.09147 -0.0406161 1.89647 0.122092L0.14644 1.58043C-0.0488132 1.74313 -0.0488132 2.00688 0.14644 2.16959C0.341443 2.3323 0.658447 2.3323 0.85345 2.16959L1.74996 1.42251V9.58334C1.74996 9.81334 1.97397 10 2.24997 10C2.52598 10 2.74998 9.81334 2.74998 9.58334V1.42251L3.64649 2.16959C3.74399 2.25105 3.872 2.29168 4 2.29168C4.128 2.29168 4.256 2.25105 4.3535 2.16959C4.54876 2.00688 4.54876 1.74313 4.3535 1.58043Z" fill="#fff"/>
        <path d="M8.85362 7.83042C8.65836 7.66771 8.34186 7.66771 8.14661 7.83042L7.25009 8.5775V0.416667C7.25009 0.186667 7.02609 0 6.75009 0C6.47408 0 6.25008 0.186667 6.25008 0.416667V8.5775L5.35357 7.83042C5.15832 7.66771 4.84156 7.66771 4.64656 7.83042C4.45131 7.99312 4.45131 8.25688 4.64656 8.41958L6.39658 9.87792C6.49433 9.95938 6.62209 10 6.75009 10C6.87809 10 7.00584 9.95938 7.10359 9.87792L8.85362 8.41958C9.04887 8.25688 9.04887 7.99312 8.85362 7.83042Z" fill="#fff"/>
      </svg>
      <p className='sort-text'>Relevance</p>
    </div>
    <div className="sort-button" onClick={() => handleSort('newest')}>
      <svg className='sort-icon' width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.3535 1.58043L2.60348 0.122092C2.40847 -0.0406161 2.09147 -0.0406161 1.89647 0.122092L0.14644 1.58043C-0.0488132 1.74313 -0.0488132 2.00688 0.14644 2.16959C0.341443 2.3323 0.658447 2.3323 0.85345 2.16959L1.74996 1.42251V9.58334C1.74996 9.81334 1.97397 10 2.24997 10C2.52598 10 2.74998 9.81334 2.74998 9.58334V1.42251L3.64649 2.16959C3.74399 2.25105 3.872 2.29168 4 2.29168C4.128 2.29168 4.256 2.25105 4.3535 2.16959C4.54876 2.00688 4.54876 1.74313 4.3535 1.58043Z" fill="#fff"/>
        <path d="M8.85362 7.83042C8.65836 7.66771 8.34186 7.66771 8.14661 7.83042L7.25009 8.5775V0.416667C7.25009 0.186667 7.02609 0 6.75009 0C6.47408 0 6.25008 0.186667 6.25008 0.416667V8.5775L5.35357 7.83042C5.15832 7.66771 4.84156 7.66771 4.64656 7.83042C4.45131 7.99312 4.45131 8.25688 4.64656 8.41958L6.39658 9.87792C6.49433 9.95938 6.62209 10 6.75009 10C6.87809 10 7.00584 9.95938 7.10359 9.87792L8.85362 8.41958C9.04887 8.25688 9.04887 7.99312 8.85362 7.83042Z" fill="#fff"/>
      </svg>
      <p className='sort-text'>Published date</p>
    </div>
  </section>
}

const mapStateToProps = ({advancedRequest}) => {
  return {
    params: advancedRequest
  }
}

const mapDispatchToProps = {
  setBooks,
  setAdvancedRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(SortParams);