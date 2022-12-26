import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClick }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <p className={styles.title}>Congratulations!</p>
        <button
          type="button"
          className={styles.button}
          onClick={() => onClick()}
        >
          Play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
