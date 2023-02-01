import axios from "axios";
import { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import { useParams, useNavigate } from "react-router-dom";

type UserItemPageParams = {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
      setUser(response.data);
    } catch (e) {
      alert(e);
    };
  };

  return (
    <div>
      <button onClick={() => navigate('/users')}>back</button>
      <h1>Page {user?.name}</h1>
      <div>{user?.email}</div>
      <div>{user?.address.city} {user?.address.street} {user?.address.zipcode}</div>
    </div>
  )
};

export default UserItemPage;