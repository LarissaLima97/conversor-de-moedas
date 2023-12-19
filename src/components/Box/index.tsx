import React, { ReactNode } from "react";
import './styles.scss';

interface Props {
    children?: ReactNode;
}

export function Box (props:Props) {
  return(
    <div className='box'>
        {props.children}
    </div>
  );
}