import * as style from "../../ui/styles"
import Input from './Input'

function InputBundle ( ) {
    const TITLE_TITLE = "todo title"
    const BODY_TITLE = "todo what?"
    const TITLE_PLACEHOLDER = "Write a title of your todo"
    const BODY_PLACEHOLDER = "give some specific memos on your todo"
    const tmpTracker = () => {}
    return (
        <style.InputContainer>
            <Input name="title" title={TITLE_TITLE} placeholder={TITLE_PLACEHOLDER} tracker={tmpTracker}/>
            <Input name="body" title={BODY_TITLE} placeholder={BODY_PLACEHOLDER} tracker={tmpTracker}/>
            <style.InputSubmitBtn>add this todo</style.InputSubmitBtn>
        </style.InputContainer>
    )
}

export default InputBundle