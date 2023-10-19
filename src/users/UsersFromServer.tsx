import { useState, useEffect } from "react";
import CreateUser from "../UserCard/UserCard";

interface UserInterFace {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipCode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

//1
export function UsersFromServer(): JSX.Element {
  const [users, setUsers] = useState<UserInterFace[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const newUsers = await fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" });
      const arrUsers = await newUsers.json();
      setUsers(arrUsers);
      console.log(arrUsers);
    };
    fetchUsers();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <CreateUser id={user.id} username={user.name} email={user.email}></CreateUser>
      ))}
    </div>
  );
}
