import { TodoItemModel } from "@/models/TodoItemModel";
import { TodoListModel } from "@/models/TodoListModel";
import { TodoListProps } from "@/models/TodoListProps";

//custom hook to extract functional logic from TodoListComponent
const useListActions = ({
  todoList,
  updateList,
  deleteList,
}: TodoListProps): [
  () => void,
  () => void,
  (itemName: string) => void,
  (id: number) => void,
  (updatedItem: TodoItemModel, moveDown: boolean) => void
] => {
  const onClearListClicked = () => {
    const updatedList: TodoListModel = {
      ...todoList,
      todoItems: [...todoList.todoItems.filter((item) => !item.achieved)],
    };
    updateList(updatedList);
  };

  const onDeleteListClicked = () => {
    deleteList();
  };

  const onAddItemClicked = (itemName: string) => {
    const newItemIndex = todoList.todoItems.length > 0 ? Math.max(...todoList.todoItems.map((item) => item.id)) + 1 : 0;
    const updatedList: TodoListModel = {
      ...todoList,
      todoItems: [...todoList.todoItems, { id: newItemIndex, name: itemName, achieved: false }],
    };
    updateList(updatedList);
  };

  const deleteItem = (id: number) => {
    const updatedList: TodoListModel = {
      ...todoList,
      todoItems: [...todoList.todoItems.filter((item) => item.id !== id)],
    };
    updateList(updatedList);
  };

  const updateItem = (updatedItem: TodoItemModel, moveDown = false) => {
    let updatedList: TodoListModel = {
      ...todoList,
      todoItems: [...todoList.todoItems],
    };
    if (moveDown) {
      updatedList.todoItems = [...updatedList.todoItems.filter((item) => item.id !== updatedItem.id), updatedItem];
    } else {
      updatedList.todoItems.forEach((item, index) => {
        if (item.id === updatedItem.id) {
          item.achieved = updatedItem.achieved;
          item.name = updatedItem.name;
        }
      });
    }
    updateList(updatedList);
  };

  return [onClearListClicked, onDeleteListClicked, onAddItemClicked, deleteItem, updateItem];
};

export { useListActions };
