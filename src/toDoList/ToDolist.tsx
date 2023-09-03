interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface ArrToDo {
  task: ToDo[];
}

function ToDoList(arrToDo: ArrToDo): JSX.Element {
  console.log(arrToDo);

  return (
    <div>
      <ul>
        {arrToDo.task.splice(0, 5).map((item) => (
          <li key={item.id}> {item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
