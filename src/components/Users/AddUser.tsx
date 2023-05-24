import React, { ChangeEvent } from 'react';
import { Card } from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

type AddUserPropsType = {
  onAddUser: (uName: string, uAge: number) => void;
};

export const AddUser = ({ onAddUser }: AddUserPropsType) => {
  const [enteredUsername, setEnteredUsername] = React.useState('');
  const [enteredAge, setEnteredAge] = React.useState('');

  const addUserHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (enteredUsername.trim() === '' || enteredAge.trim() === '') return;
    if (Number(enteredAge) < 1) return;

    onAddUser(enteredUsername, Number(enteredAge));

    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(e.target.value);
  };

  return (
    <div>
      <ErrorModal title='An error occured!' message='Smth went wrong!' />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age (years)</label>
          <input
            id='age'
            type='number'
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};
