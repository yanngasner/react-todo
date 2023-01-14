export type TodoItemModel = {
    id: number;
    name: string;
    position: number;
    ticked: boolean;
    archived: boolean;
}

const TodoItem: React.FC<{ todoItem: TodoItemModel }> = ({ todoItem }) => {
    return (<div>coucou</div>);
}

export default TodoItem;

