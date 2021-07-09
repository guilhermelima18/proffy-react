import React from 'react';

import styles from './styles.module.css';

type TitleProps = {
  title: string;
}

export default function Title(props: TitleProps) {
  return (
    <h3 className={styles.title}>{props.title}</h3>
  );
};