import axios from "axios";
import { useState, useEffect } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      alert(e);
    };
  };

  return (
    <div>
      <Card onClick={(num) => console.log('Yes!!', num)} variant={CardVariant.primary} width="200px" height="200px">
        <button>fasdfsd</button>
        asdfasdf
      </Card>
      <UserList users={users} />
    </div>
  );
}

export default App;