import React from 'react';
import { Card } from '../UI/Card';
import classes from './AddUser.module.css';

export const AddUser = () => {
  const addUserHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
        <label htmlFor='age'>Age (years)</label>
        <input id='age' type='number' />
        <button type='submit'>Add User</button>
      </form>
    </Card>
  );
};
