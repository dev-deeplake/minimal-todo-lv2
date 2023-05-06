import * as style from "../../ui/styles"
import Input from './Input'

import { addTodo } from '../../redux/modules/todo'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

function InputBundle ( ) {
    const TITLE_TITLE = "todo title"
    const BODY_TITLE = "todo what?"
    const TITLE_PLACEHOLDER = "Write a title of your todo"
    const BODY_PLACEHOLDER = "give some specific memos on your todo"

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const generateId = () => Date.now()
    const dispatch = useDispatch()

    const resetInputs = () => {
        setTitle("")
        setBody("")
    }
    const getNewTodo = () => {return {id: generateId(), title, body, isDone: false}}
    const setNewTodo = () => {
        if (title.length > 0 && body.length > 0) {
            const thisTodo = getNewTodo()
            dispatch(addTodo(thisTodo))
            resetInputs()
        } else {
            alert("Please fill all required inputs.")
        }
    }
    const onKeyPressHandler = (event) => {
        if (event.key === "Enter") {
            setNewTodo()
        }
    }

    return (
        <style.InputContainer onKeyPress={onKeyPressHandler}>
            <Input title={TITLE_TITLE} placeholder={TITLE_PLACEHOLDER} setter={setTitle} value={title}/>
            <Input title={BODY_TITLE} placeholder={BODY_PLACEHOLDER} setter={setBody} value={body}/>
            <style.InputSubmitBtn onClick={setNewTodo}>add this todo</style.InputSubmitBtn>
        </style.InputContainer>
    )
}

export default InputBundle