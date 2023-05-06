import * as style from "../../ui/styles"

function Input ({title, placeholder, setter, value}) {

    const onChangeHandler = (event) => {
        setter(event.target.value)
    }
    return (
        <style.InputWrap>
            <span>{title}</span>
            <input type="text" placeholder={placeholder} autoComplete="off" onChange={onChangeHandler} value={value}/>
        </style.InputWrap>
    )
}

export default Input