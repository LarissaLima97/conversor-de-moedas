import './styles.scss'

interface Props {
  name?: string;
  value?: number;
  onChange?: any;
}

export function Input (props: Props) {
  return(
    <input className='input' name={props.name} value={props.value} onChange={props.onChange}>
    </input>
  );
}