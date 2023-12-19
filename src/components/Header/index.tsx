import { ReactNode } from 'react'
import './styles.scss'

interface Props {
    children: ReactNode
}

export function Header (props: Props) {
    return(
        <header className='header'>
            <h1>{props.children}</h1>
        </header>
    )
}