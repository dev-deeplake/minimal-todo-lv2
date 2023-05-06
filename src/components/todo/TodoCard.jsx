import * as style from "../../ui/styles"
import { Link } from "react-router-dom"

function TodoCard({todo, changeBtn, delBtn}) {
    return (
        <style.TodoCardContainer>
            <style.TodoCardTextWrap>
                <div>
                    <style.TodoCardTitle>{todo.title}</style.TodoCardTitle>
                    {(todo.isDone) && <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm3.22 6.97-4.47 4.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06Z" fill="#005C53"/></svg>}
                </div>
                <style.TodoDetailLink to={`/details`}><style.TodoCardDetails>view details</style.TodoCardDetails></style.TodoDetailLink>
                <style.TodoCardTextBody>{todo.body}</style.TodoCardTextBody>
            </style.TodoCardTextWrap>
            <style.TodoCardBtnWrap>
                {(todo.isDone) ? <style.TodoBtnRevert onClick={changeBtn}>revert</style.TodoBtnRevert> : <style.TodoBtnDone onClick={changeBtn}>done</style.TodoBtnDone>}
                <style.TodoBtnDelete onClick={delBtn}>delete</style.TodoBtnDelete>
            </style.TodoCardBtnWrap>
        </style.TodoCardContainer>
    )
}

export default TodoCard