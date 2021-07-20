import React from 'react';

import whatsappIcon from '../../images/icons/whatsapp.svg';

import styles from './styles.module.css';

export default function Cards() {
  return (
    <div className={styles.card}>
      <header>
        <img src="https://avatars.githubusercontent.com/u/60123147?v=4" alt="Imagem de perfil" />
        <div className={styles.teacher}>
          <h4>Guilherme Lima</h4>
          <span>Química</span>
        </div>
      </header>
      <div className={styles.about}> 
        <p>
          Entusiasta das melhores tecnologias de química avançada.<br/><br/>
          Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
        </p>
      </div>
      <div className={styles.contact}>
        <h5>
          Preço/hora:
          <span>R$ 20,00</span>
        </h5>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </div>
    </div>
  );
};