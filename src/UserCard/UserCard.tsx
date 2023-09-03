import { useState } from "react";
import TodoList from "../toDoList/ToDolist";

interface User {
  id: number;
  name: string;
  email: string;
}

function UserCard(user: User): JSX.Element {
  const [toDo, setToDo] = useState<User[]>([]);

  const fetchToDo = async () => {
    let newToDo = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`);
    let arrToDo = await newToDo.json();
    setToDo(arrToDo);
  };
  return (
    <div onClick={fetchToDo}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      {toDo.length > 0 && <TodoList task={toDo} />}
    </div>
  );
}

export default UserCard;
