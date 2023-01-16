import { TodoItemModel } from "@/models/TodoItemModel";
import { TodoItemProps } from "@/models/TodoItemProps";
import { TodoListModel } from "@/models/TodoListModel";
import { TodoListProps } from "@/models/TodoListProps";

//custom hook to extract functional logic from TodoItemComponent
const useItemActions = ({ todoItem, updateItem, deleteItem }: TodoItemProps): [() => void, () => void] => {
  const onToggleAchievementClicked = () => {
    const updatedItem: TodoItemModel = { ...todoItem, achieved: !todoItem.achieved };
    updateItem(updatedItem, updatedItem.achieved);
  };

  const onDeleteItemClicked = () => {
    deleteItem(todoItem.id);
  };

  return [onToggleAchievementClicked, onDeleteItemClicked];
};

export { useItemActions };
