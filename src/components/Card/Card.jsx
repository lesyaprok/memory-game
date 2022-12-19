import React from 'react';
import styles from './Card.module.css';

const Card = ({ imgSrc }) => {
  const image = require(`../../images/${imgSrc}`);

  return (
    <div className={styles.card}>
      <img className={styles.img} src={image} alt="" />
      <div className={styles.back} />
    </div>
  );
};

export default Card;
