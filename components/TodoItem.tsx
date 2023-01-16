import { TodoItemModel } from "@/models/TodoItemModel";
import { TodoItemProps } from "@/models/TodoItemProps";
import { useItemActions } from "@/services/useItemActions";

const TodoItem: React.FC<TodoItemProps> = ({ todoItem, updateItem, deleteItem }) => {
    const [onToggleAchievementClicked, onDeleteItemClicked] = useItemActions({ todoItem, updateItem, deleteItem });

    return (
        <>
            <div>{todoItem.id}</div>
            <div>{todoItem.name}</div>
            <div>{todoItem.achieved ? "TRUE" : "FALSE"}</div>
            <button onClick={onToggleAchievementClicked}>tick</button>
            <button onClick={onDeleteItemClicked}>delete</button>
        </>);
}

export default TodoItem;

