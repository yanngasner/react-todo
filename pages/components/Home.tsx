import { TodoListModel } from '@/models/TodoListModel';
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';
import TodoListCard from './TodoListCard';

const Home = () => {
    const [todoLists, setToDoLists] = useState<TodoListModel[]>([]);
    useEffect(() => {
        fetch('/api/get-all')
            .then((res) => res.json())
            .then((data) => {
                setToDoLists(JSON.parse(data));
            })
    }, [])
    return (
        <>
            <main className={styles.main}>
                <div className={styles.grid}>
                    {todoLists.map(todoList => <TodoListCard key={todoList.id} todoList={todoList} />)}
                </div>
            </main>
        </>);

}
export default Home;


{/* <div className={styles.grid}>


          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}


