import { ReactNode } from 'react'
import './styles.scss';

interface Props {
    children: ReactNode;
}

export function ResultDisplay (props:Props) {
    return(
        <div className='result-box'>
            <p className='result'>{props.children}</p>
        </div>
    )
}
