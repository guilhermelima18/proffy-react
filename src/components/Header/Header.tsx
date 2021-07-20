import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../images/icons/back.svg';
import logoImg from '../../images/logo.svg';
import Title from '../Title/Title';

import styles from './styles.module.css';

export default function Header() {
  return (
    <>
      <div className={styles.navegation}>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Logo Proffy" />
      </div>
      <Title title="Estes são os proffys disponíveis." />
    </>
  );
};