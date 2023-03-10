import { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

const UserItem: FC<TodoItemProps> = ({todo}) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed}/>
      {todo.id}. {todo.title}
    </div>
  )
}

export default UserItem;