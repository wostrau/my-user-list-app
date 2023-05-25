import React from 'react';
import classes from './ErrorModal.module.css';
import { Card } from './Card';
import Button from './Button';

type ErrorModalPropsType = {
  onConfirm: () => void;
  title: string;
  message: string;
};

const ErrorModal = (props: ErrorModalPropsType) => {
  const { onConfirm, title, message } = props;

  return (
    <div>
      <div className={classes.backdrop} onClick={onConfirm}>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{title}</h2>
          </header>
          <div className={classes.content}>
            <p>{message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={onConfirm}>Close</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
