import { TodoItemModel } from "@/models/TodoItemModel";
import { TodoItemProps } from "@/models/TodoItemProps";
import { TodoListModel } from "@/models/TodoListModel";
import { TodoListProps } from "@/models/TodoListProps";

//custom hook to extract functional logic from TodoItemComponent
const useItemActions = ({ todoItem, updateItem, deleteItem }: TodoItemProps): [() => void, (updatedName: string) => void, () => void] => {
  const onToggleAchievementClicked = () => {
    const updatedItem: TodoItemModel = { ...todoItem, achieved: !todoItem.achieved };
    updateItem(updatedItem, updatedItem.achieved);
  };
  const onItemRenamed = (updatedName: string) => {
    const updatedItem: TodoItemModel = { ...todoItem, name: updatedName };
    updateItem(updatedItem, false);
  };
  const onDeleteItemClicked = () => {
    deleteItem(todoItem.id);
  };

  return [onToggleAchievementClicked, onItemRenamed, onDeleteItemClicked];
};

export { useItemActions };
