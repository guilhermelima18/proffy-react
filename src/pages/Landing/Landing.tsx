import React from 'react';

import logoImg from '../../images/logo.svg';
import landingImg from '../../images/landing.svg';
import studyIcon from '../../images/icons/study.svg';
import giveClassesIcon from '../../images/icons/give-classes.svg';
import purpleIcon from '../../images/icons/purple-heart.svg';

import styles from './styles.module.css';

export default function Landing() {
  return (
    <div className={styles.pageLanding}>
      <main>
        <img src={logoImg} alt="Logo Proffy" />
        <h4>
          Sua plataforma de<br />
          estudos online.
        </h4>
        <div className={styles.mainButtons}>
          <a href="/">
            <img src={studyIcon} alt="Ícone estudar" />
            Estudar
          </a>
          <a href="/">
            <img src={giveClassesIcon} alt="Ícone Dar aulas" />
            Dar aulas
          </a>
        </div>
      </main>
      <div className={styles.landingBackground}>
        <img src={landingImg} alt="Background Landing Page" />
        <span>
          Total de 285 conexões já realizadas.
          <img src={purpleIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
};