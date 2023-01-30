import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";

const App = () => {
  const users: IUser[] = [
    { id: 1, name: "Dem", email: "dem@gmail.com", address: { city: "Kharkiv", street: "Geroev Kharkiva", zipcode: '1123' } },
    { id: 2, name: "Demian", email: "demian@gmail.com", address: { city: "Kiyv", street: "beststreet", zipcode: '1111' } }
  ];

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