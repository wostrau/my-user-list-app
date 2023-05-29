import React, { ChangeEvent, useRef } from 'react';
import { Card } from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

type AddUserPropsType = {
  onAddUser: (uName: string, uAge: number) => void;
};

export const AddUser = ({ onAddUser }: AddUserPropsType) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = React.useState<{
    title: string;
    message: string;
  } | null>(null);

  const addUserHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredUserAge = ageInputRef.current?.value;

    if (
      !enteredName ||
      !enteredUserAge ||
      enteredName.trim() === '' ||
      enteredUserAge.trim() === ''
    ) {
      setError({
        title: 'Invalid input',
        message:
          'Kindly ask you to enter valid name and age (non-empty values)',
      });
      return;
    }
    if (Number(enteredUserAge) < 1) {
      setError({
        title: 'Invalid age',
        message: 'Kindly ask you to enter valid age (greater than zero)',
      });
      return;
    }

    onAddUser(enteredName ?? '', Number(enteredUserAge ?? ''));

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
          <input id='username' type='text' ref={nameInputRef} />
          <label htmlFor='age'>Age (years)</label>
          <input id='age' type='number' ref={ageInputRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};
