import React from 'react';
import { AddUser } from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

export type UserType = { id: string; name: string; age: number };

function App() {
  const [usersList, setUsersList] = React.useState<UserType[]>([]);

  const addUserHandler = (uName: string, uAge: number) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
