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
  const [error, setError] = React.useState<{
    title: string;
    message: string;
  } | null>(null);

  const addUserHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (enteredUsername.trim() === '' || enteredAge.trim() === '') {
      setError({
        title: 'Invalid input',
        message: 'Kindly ask you to enter valid name and age (non-empty values)',
      });
      return;
    }
    if (Number(enteredAge) < 1) {
      setError({
        title: 'Invalid age',
        message: 'Kindly ask you to enter valid age (greater than zero)',
      });
      return;
    }

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

  const errorHandler = () => setError(null);

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </React.Fragment>
  );
};
