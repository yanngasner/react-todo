import { TodoItemModel } from "@/models/TodoItemModel";
import { TodoListModel } from "@/models/TodoListModel";
import { TodoListProps } from "@/models/TodoListProps";
import { useListActions } from "@/services/useListActions";
import { useState } from "react";
import { isTemplateExpression } from "typescript";
import TodoItem from "./TodoItem";
import styles from '@/styles/TodoList.module.css';


const TodoList: React.FC<TodoListProps> = ({ todoList, updateList, deleteList }) => {

    const [itemName, setItemName] = useState<string>("");
    const [onClearListClicked, onDeleteListClicked, onAddItemClicked, deleteItem, updateItem]
        = useListActions({ todoList, updateList, deleteList });

    return (
        <div className={styles.container}>
            <div className={styles.todoList}>
                <div className={styles.head}>
                    <h1>{todoList.name}</h1>
                    <h2>{todoList.description}</h2>
                </div>
                {todoList.todoItems.map(item =>
                    <TodoItem
                        key={item.id}
                        todoItem={item}
                        updateItem={updateItem}
                        deleteItem={deleteItem}
                    />)
                }
                <button onClick={() => onDeleteListClicked}>Supprimer</button>
                <button onClick={onClearListClicked}>Nettoyer</button>
                <input onChange={e => setItemName(e.target.value)} />
                <button onClick={() => onAddItemClicked(itemName)}>Add</button>
            </div>
        </div>

    );
}

export default TodoList;