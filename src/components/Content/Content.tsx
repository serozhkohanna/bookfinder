import React from 'react';
import './Content.scss';
import { connect } from 'react-redux';
import { ApiResponse } from "../../constants/interfaces";

const Content = ({booksList}) => {
  console.log(booksList.apiResponse);

  return <section>
	content
  </section>
}

const mapStateToProps = ({apiResponse}: ApiResponse) => {
  return {
	booksList: apiResponse
  }
}

export default connect(mapStateToProps)(Content);
