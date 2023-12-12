import { ReactNode } from 'react'
import './styles.scss'

interface Props {
    children: ReactNode;
    name?: string;
    value?: string;
    onChange?: any;
}

export function DropDown (props:Props) {
    return(
        <select name={props.name} value={props.value} onChange={props.onChange} className='select'>
            {props.children}
        </select>
    )
}