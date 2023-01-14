export type TodoItemModel = {
    id: number;
    name: string;
    position: number;
    ticked: boolean;
    archived: boolean;
}

const TodoItem: React.FC<{ todoItem: TodoItemModel }> = ({ todoItem }) => {
    return (<div>{todoItem.name}</div>);
}

export default TodoItem;

