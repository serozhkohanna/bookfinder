import React, { FC } from 'react';
import './Bookmark.scss';
import { connect } from 'react-redux';

import { setSaved } from "../../actions/actions";

interface Props {
  id: string;
  savedBooks: Array<string>,
  setSaved: any
}

const Bookmark: FC<Props> = ({id, savedBooks, setSaved}) => {
  const handleSaved = () => {
	setSaved(id);
  }

  return <button className={`bookmark ${savedBooks.includes(id) && 'is-active'}`} onClick={handleSaved}>
	<svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
	  <path d="M7.80237 13.9069L7.5 13.6773L7.19763 13.9069L0.5 18.9925V0.5H14.5V18.9925L7.80237 13.9069Z"
			fill="transparent" stroke="#0E084B"/>
	</svg>
  </button>
}

const mapStateToProps = ({savedBooks}) => {
  return {
	savedBooks: savedBooks.savedBooks
  }
}

const mapDispatchToProps = {
  setSaved
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmark);