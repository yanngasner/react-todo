
import { TodoListModel } from '@/models/TodoListModel';
import styles from '@/styles/TodoListCard.module.css'
import { Inter } from '@next/font/google'
import Router from "next/router";

const inter = Inter({ subsets: ['latin'] })

const TodoListCard: React.FC<{ todoList: TodoListModel }> = ({ todoList }) => {
    return (
        <>
            <div onClick={() => Router.push("/todoList/[id]", `/todoList/${todoList.id}`)} className={`${styles.card} clickable`}>
                <h2 className={inter.className}>
                    {todoList.name} <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                    {todoList.description}
                </p>
            </div>
        </>
    );
}

export default TodoListCard;