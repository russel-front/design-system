const Icon =  (props) => {
    let styler = ''
  
    styler += props.neutral ? 'icon-russel-neutral' : ''
    styler += props.primary ? 'icon-russel-primary' : ''
    styler += props.danger_400 ? 'icon-russel-danger-400' : ''
  
    return <i onClick={props.click} className={`${props.value} ${styler}`} />
  }
  
  export default Icon;