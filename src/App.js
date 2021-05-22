import {useDispatch, useSelector} from 'react-redux'
import {addTask} from './redux/actions'
import {Tasks} from './components/tasksFrame'


const App = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    
    const add = () => {
        const text = document.getElementById('todo').value
        if (text) {
            dispatch(addTask(text))
            document.getElementById('todo').value = ""
        }
    }


    return (
        <div>
            <Tasks todos={todos}/>
            <input className="todo-input" id="todo"></input>
            <button className="add-btn" onClick={add}>Добавить</button>
        </div>
    )
}


export default App;
