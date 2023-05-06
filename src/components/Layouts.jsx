import * as style from "../ui/styles"
import Header from './Header'
import InputBundle from './input/inputBundle'
import TodoList from './todo/TodoList'
import { useSelector } from 'react-redux'

function Layouts ( ) {
    const LIST_PROG_TITLE = "Progressing"
    const LIST_DONE_TITLE = "Complete"

    const todoData = useSelector((state) => state.todoReducer)
    // const todoIng = todoData.todos.filter(todo => !todo.isDone)
    // const todoDone = todoData.todos.filter(todo => todo.isDone)
    const todoIng = todoData.filter(todo => !todo.isDone)
    const todoDone = todoData.filter(todo => todo.isDone)

    return (
        <style.AppContainer>
            <style.AppWrap>
                <Header />
                <InputBundle />
                <TodoList title={LIST_PROG_TITLE} list={todoIng}/>
                <TodoList title={LIST_DONE_TITLE} list={todoDone} />
            </style.AppWrap>
        </style.AppContainer>
    )
}

export default Layouts