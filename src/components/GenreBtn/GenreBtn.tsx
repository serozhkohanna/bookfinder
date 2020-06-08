import React from 'react';
import './GenreBtn.scss';

interface Props {
  classes: string;
  btnText: string;
  setData?: any;
}

const GenreBtn = ({classes, btnText, setData}: Props) => {
  const handleClick = (): void => {

	setData(btnText);
  }

  return <button onClick={handleClick} className={`button secondary ${classes}`}>{btnText}</button>
}

export default GenreBtn;