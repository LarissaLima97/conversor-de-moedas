import { ReactNode } from 'react'
import './styles.scss'

interface Props {
    children: ReactNode
}

export function Label ({children}:Props) {
    return(
        <label className='label'>{children}</label>
    )
}
