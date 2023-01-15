import { TodoItemModel } from "@/models/TodoItemModel";

interface TodoItemProps {
    todoItem: TodoItemModel;
    updateItem: (todoItem: TodoItemModel, moveDown: boolean) => void;
    deleteItem: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todoItem, updateItem, deleteItem }) => {
    const toggleAchievement = () => {
        const updatedItem: TodoItemModel = { ...todoItem, achieved: !todoItem.achieved };
        updateItem(updatedItem, updatedItem.achieved);
    }
    const onDeleteItemClicked = () => {
        deleteItem(todoItem.id);
    }
    return (
        <>
            <div>{todoItem.id}</div>
            <div>{todoItem.name}</div>
            <div>{todoItem.achieved ? "TRUE" : "FALSE"}</div>
            <button onClick={toggleAchievement}>tick</button>
            <button onClick={onDeleteItemClicked}>delete</button>
        </>);
}

export default TodoItem;

