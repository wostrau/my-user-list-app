import React, { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  const cardClasses = `${styles.card} ${className || ''}`;

  return <div className={cardClasses}>{children}</div>;
};
