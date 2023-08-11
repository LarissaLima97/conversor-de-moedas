import { ReactNode } from 'react'
import './styles.scss'

interface Props {
    children: ReactNode
}

export function Header ({children}:Props) {
    return(
        <header className='header'>
            <h1>{children}</h1>
        </header>
    )
}