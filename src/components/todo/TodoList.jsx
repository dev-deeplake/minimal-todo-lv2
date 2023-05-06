import TodoCard from './TodoCard';
import * as style from "../../ui/styles";

function TodoList({title, list, changeBtn, delBtn}) {
    return (
        <style.TodoListContainer>
            <style.TodoListTitle>{title}</style.TodoListTitle>
            <style.TodoListEntries>
                {list.map(todo => {
                    return <TodoCard todo={todo} changeBtn={changeBtn} delBtn={delBtn}/>
                })}
            </style.TodoListEntries>
        </style.TodoListContainer>
    )
}

export default TodoList