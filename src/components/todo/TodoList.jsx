import TodoCard from './TodoCard';
import * as style from "../../ui/styles";
import { changeState, deleteTodo } from '../../redux/modules/todo';
import { useDispatch } from 'react-redux';

function TodoList({title, list, changeBtn, delBtn}) {
    const dispatch = useDispatch()
    return (
        <style.TodoListContainer>
            <style.TodoListTitle>{title}</style.TodoListTitle>
            <style.TodoListEntries>
                {list.map(todo => {
                    const onDelete = () => dispatch(deleteTodo(todo.id))
                    const onChange = () => dispatch(changeState(todo.id))
                    return <TodoCard key={todo.id} todo={todo} changeBtn={onChange} delBtn={onDelete}/>
                })}
            </style.TodoListEntries>
        </style.TodoListContainer>
    )
}

export default TodoList