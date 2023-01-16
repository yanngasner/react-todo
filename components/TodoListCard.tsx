
import { TodoListModel } from '@/models/TodoListModel';
import styles from '@/styles/TodoListCard.module.css';
import Router from "next/router";


const TodoListCard: React.FC<{ todoList: TodoListModel }> = ({ todoList }) => {
    return (
        <>
            <div onClick={() => Router.push("/todoList/[id]", `/todoList/${todoList.id}`)} className={`${styles.card} clickable`}>
                <h2>
                    {todoList.name} <span>-&gt;</span>
                </h2>
                <p>
                    {todoList.description}
                </p>
            </div>
        </>
    );
}

export default TodoListCard;