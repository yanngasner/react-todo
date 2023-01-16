import { TodoItemModel } from "@/models/TodoItemModel";
import { TodoListModel } from "@/models/TodoListModel";
import { TodoListProps } from "@/models/TodoListProps";
import { useListActions } from "@/services/useListActions";
import { useState } from "react";
import { isTemplateExpression } from "typescript";
import TodoItem from "./TodoItem";

const TodoList: React.FC<TodoListProps> = ({ todoList, updateList, deleteList }) => {

    const [itemName, setItemName] = useState<string>("");
    const [onClearListClicked, onDeleteListClicked, onAddItemClicked, deleteItem, updateItem]
        = useListActions({ todoList, updateList, deleteList });

    return (
        <>
            <div>{todoList.id}</div>
            <div>{todoList.name}</div>
            <div>{todoList.description}</div>
            {todoList.todoItems.map(item =>
                <TodoItem
                    key={item.id}
                    todoItem={item}
                    updateItem={updateItem}
                    deleteItem={deleteItem}
                />)
            }
            <div></div>
            <button onClick={() => onDeleteListClicked}>Supprimer</button>
            <button onClick={onClearListClicked}>Nettoyer</button>
            <input onChange={e => setItemName(e.target.value)} />
            <button onClick={() => onAddItemClicked(itemName)}>Add</button>

        </>
    );
}

export default TodoList;