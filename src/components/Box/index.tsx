import React, { ReactNode } from "react";
import './styles.scss';

interface Props {
    children?: ReactNode;
}

export function Box ({children}:Props) {
  return(
    <div className='box'>
        {children}
    </div>
  );
}