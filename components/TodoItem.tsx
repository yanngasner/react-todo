import styles from '@/styles/TodoItem.module.css';

import { TodoItemModel } from "@/models/TodoItemModel";
import { TodoItemProps } from "@/models/TodoItemProps";
import { useItemActions } from "@/services/useItemActions";
import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Checkbox, IconButton, Input } from "@chakra-ui/react";
import { KeyboardEventHandler, useState } from 'react';

const TodoItem: React.FC<TodoItemProps> = ({ todoItem, updateItem, deleteItem }) => {
    const [onToggleAchievementClicked, onItemRenamed, onDeleteItemClicked] = useItemActions({ todoItem, updateItem, deleteItem });
    const [isEditing, setIsEditing] = useState(false);
    const onKeyDown = (key: string) => {
        if (['Enter', 'Escape'].includes(key)) {
            setIsEditing(false);
        }
    }

    return (
        <div className={styles.todoItem}>
            <Checkbox size='lg'
                isChecked={todoItem.achieved}
                onChange={onToggleAchievementClicked}
                colorScheme='teal'
            />
            <div className={styles.itemName}
                onClick={() => setIsEditing(true)}
                onMouseOut={() => setIsEditing(false)}>
                {isEditing ?
                    <Input
                        value={todoItem.name}
                        onChange={(event) => onItemRenamed(event.target.value)}
                        onKeyDown={(event) => onKeyDown(event.key)}
                    />
                    : <p>{todoItem.name}</p>
                }
            </div>
            <div className={styles.deleteIcon}>
                <IconButton icon={<DeleteIcon />} onClick={onDeleteItemClicked} colorScheme='teal' aria-label={""} />
            </div>
        </div>);
}

export default TodoItem;

