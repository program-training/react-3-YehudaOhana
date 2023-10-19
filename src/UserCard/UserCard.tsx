import { useState } from "react";
import TodoList from "../toDoList/ToDolist";

interface User {
  id: number;
  username: string;
  email: string;
}

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function UserCard(user: User): JSX.Element {
  const [toDo, setToDo] = useState<ToDo[]>([]);

  const fetchToDo = async () => {
    let newToDo = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`);
    let arrToDo = await newToDo.json();
    setToDo(arrToDo);
  };
  return (
    <div onClick={fetchToDo} className="User">
      <p>{user.username}</p>
      <p>{user.email}</p>
      {toDo.length > 0 && <TodoList task={toDo} />}
    </div>
  );
}

export default UserCard;
