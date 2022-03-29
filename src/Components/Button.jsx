import Icon from './Icon'

const Button = (props) => {
  return (
    <button onClick={props.click} type="leftIcon" className={props.classes} disabled={props.disabled}>
      {props.center === undefined ? '' : <Icon value={`${props.center}`} />}
      {props.left === undefined ? '' : <Icon value={`${props.left} me-2`} />}
      {props.children === undefined ? '' : props.children}
      {props.right === undefined ? '' : <Icon value={`${props.right} ms-2`} />}
    </button>
  )
}

export default Button
