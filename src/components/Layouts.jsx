import * as style from "../ui/styles"
import Header from './Header'
import InputBundle from './input/inputBundle'
import TodoList from './todo/TodoList'

function Layouts ( ) {
    const LIST_PROG_TITLE = "Progressing"
    const LIST_DONE_TITLE = "Complete"

    const exampleTodo = {
        id: 0,
        title: "hello!",
        body: "testing",
        isDone: true
    }

    return (
        <style.AppContainer>
            <style.AppWrap>
                <Header />
                <InputBundle />
                <TodoList title={LIST_PROG_TITLE} list={[exampleTodo]}/>
                <TodoList title={LIST_DONE_TITLE} list={[exampleTodo]} />
            </style.AppWrap>
        </style.AppContainer>
    )
}

export default Layouts