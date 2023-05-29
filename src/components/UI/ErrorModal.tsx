import React from 'react';
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css';
import { Card } from './Card';
import Button from './Button';

type BackdropPropsType = { onConfirm: () => void };
const Backdrop = ({ onConfirm }: BackdropPropsType) => {
  return <div className={classes.backdrop} onClick={onConfirm} />;
};

const ModalOverlay = ({ title, message, onConfirm }: ErrorModalPropsType) => {
  return (
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
  );
};

type ErrorModalPropsType = {
  onConfirm: () => void;
  title: string;
  message: string;
};

const ErrorModal = (props: ErrorModalPropsType) => {
  const { onConfirm, title, message } = props;

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById('backdrop-root') as Element | DocumentFragment
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={onConfirm} title={title} message={message} />,
        document.getElementById('overlay-root') as Element | DocumentFragment
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
