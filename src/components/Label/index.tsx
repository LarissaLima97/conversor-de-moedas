import { ReactNode } from 'react'
import './styles.scss'

interface Props {
    children: ReactNode;
}

export function Label (props:Props) {
    return(
        <label className='label'>{props.children}</label>
    )
}
