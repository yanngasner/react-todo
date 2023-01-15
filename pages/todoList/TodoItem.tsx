import { TodoItemModel } from "@/models/TodoItemModel";

const TodoItem: React.FC<{ todoItem: TodoItemModel }> = ({ todoItem }) => {
    return (<div>{todoItem.name}</div>);
}

export default TodoItem;

