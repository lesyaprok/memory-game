import React from 'react';
import styles from './Card.module.css';

const Card = ({ imgSrc, isOpen, onClick }) => {
  const image = require(`../../images/${imgSrc}`);
  const activeClass = isOpen ? `${styles.active}` : '';
  const activeBack = isOpen ? `${styles.activeBack}` : '';

  return (
    <button
      type="button"
      className={`${styles.card} ${activeClass}`}
      onClick={() => onClick()}
    >
      <div className={styles.front}>
        <img className={styles.img} src={image} alt="" />
      </div>
      <div className={`${activeBack} ${styles.back}`} />
    </button>
  );
};

export default Card;
