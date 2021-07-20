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
            <label htmlFor="subject">Matéria</label>
            <input type="text" name="subject" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="week-day">Dia da semana</label>
            <select name="week-day">
              <option value="">Segunda</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="hours">Horário</label>
            <input type="text" name="hours" />
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