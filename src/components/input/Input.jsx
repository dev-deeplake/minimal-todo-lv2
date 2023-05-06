import * as style from "../../ui/styles"

function Input ({name, title, tracker, placeholder}) {
    return (
        <style.InputWrap>
            <span>{title}</span>
            <input name={name} type="text" placeholder={placeholder} autoComplete="off" onChange={tracker} />
        </style.InputWrap>
    )
}

export default Input