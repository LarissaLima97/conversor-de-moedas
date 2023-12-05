import { ReactNode } from 'react'
import './styles.scss'

interface Props {
    children: ReactNode
}

export function Button ({children}:Props) {
    return(
            <button className='button'>{children}</button>
    )
}