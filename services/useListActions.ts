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
  (updatedName: string) => void,
  (updatedDescription: string) => void,
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

  const onItemAdded = (itemName: string) => {
    const newItemId = todoList.todoItems.length > 0 ? Math.max(...todoList.todoItems.map((item) => item.id)) + 1 : 0;
    const updatedList: TodoListModel = {
      ...todoList,
      todoItems: [...todoList.todoItems, { id: newItemId, name: itemName, achieved: false }],
    };
    updateList(updatedList);
  };

  const onListRenamed = (updatedName: string) => {
    const updatedList: TodoListModel = {
      ...todoList,
      todoItems: [...todoList.todoItems],
      name: updatedName,
    };
    updateList(updatedList);
  };

  const onDescriptionChanged = (updatedDescription: string) => {
    const updatedList: TodoListModel = {
      ...todoList,
      todoItems: [...todoList.todoItems],
      description: updatedDescription,
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

  return [onClearListClicked, onDeleteListClicked, onItemAdded, onListRenamed, onDescriptionChanged, deleteItem, updateItem];
};

export { useListActions };
