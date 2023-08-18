import { ReactNode } from 'react'
import './styles.scss'

interface Props {
    children: ReactNode;
}

export function Select ({children}:Props) {
    return(
        <select name="" id="" className='select'>
            {children}
        </select>
    )
}