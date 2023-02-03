function Input(props) {
    return (
        <input
            style={{
                backgroungColor: "white",
                border: "1px solid grey",
                borderRadius: "5px",
                padding: 5,
                margin: 3,
                boxShadow: "0px 8px 12px rgba(0,0,0,.2)",
            }}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange} />

    )
}


export default Input;