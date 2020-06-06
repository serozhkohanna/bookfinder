import React from 'react';
import './GenreBtn.scss';

interface Props {
  classes: string;
  btnText: string;
}

const GenreBtn = ({classes, btnText}: Props) => {
  return <button className={`button secondary ${classes}`}>{btnText}</button>
}

export default GenreBtn;