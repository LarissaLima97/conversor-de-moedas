import { ReactNode } from 'react'
import './styles.scss'

interface Props {
    children: ReactNode;
    onClick: any;
}

export function Button (props:Props) {
    return(
            <button className='button' onClick={props.onClick }>{props.children}</button>
    )
}