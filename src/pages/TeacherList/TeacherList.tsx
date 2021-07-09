import React from 'react';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Header';

import styles from './styles.module.css';

export default function TeacherList() {
  return (
    <>
      <div className={styles.pageStudy}>
        <Header />
        <form action="">
          <div className={styles.inputGroup}>
            <label htmlFor="">Matéria</label>
            <input type="text" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="">Dia da semana</label>
            <select name="" id="">
              <option value="">Segunda</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="">Horário</label>
            <input type="text" />
          </div>
        </form>
      </div>

      <div className={styles.container}>
        <Cards />
        <Cards />
      </div>
    </>
  );
};