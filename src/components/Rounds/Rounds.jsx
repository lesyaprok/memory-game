import React from 'react';
import styles from './Rounds.module.css';

const Rounds = ({ rounds }) => {
  return (
    <div>
      <h2 className={styles.rounds}>
        Round: <span>{rounds}</span>
      </h2>
    </div>
  );
};

export default Rounds;
