function Button(props) {
    return (
        <button className="btn btn-secondary btn-rounded" onClick={props.click}>{props.btnValue}</button>
    )
}

export default Button;