import React from 'react';
import './GenreBtn.scss';

interface Props {
  classes: string;
  btnText: string;
  setData?: any;
  value: string;
}

const GenreBtn = ({classes, btnText, setData, value}: Props) => {
  const handleClick = (): void => {

	setData(value);
  }

  return <button onClick={handleClick} className={`button ${classes}`}>{btnText}</button>
}

export default GenreBtn;