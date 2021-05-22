export const Tasks = (props) => {
    if (! props.todos.length) {
        return (
            <div>Пусто</div>
        )
    }
    return (
        props.todos.map(todo => (
            <div className="task">
                {todo}
            </div>
            )
        )
    )
}