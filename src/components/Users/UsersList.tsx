import React from 'react';
import { Card } from '../UI/Card';
import classes from './UserList.module.css';
import { UserType } from '../../App';

type UserListPropsType = { users: UserType[] };

const UsersList = ({ users }: UserListPropsType) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
