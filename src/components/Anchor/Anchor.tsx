import React from 'react';

interface Props {
  id: string;
}

const Anchor = ({id}: Props) => {
  return <a href={`#${id}`} className='anchor'/>
}

export default Anchor;