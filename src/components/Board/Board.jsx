import React from 'react';
import Card from '../Card/Card';
import styles from './Board.module.css';

const Board = ({ cards, onClick }) => {
  return (
    <div className={styles.board}>
      {cards.map((card) => (
        <Card
          key={card.id}
          imgSrc={card.img}
          isOpen={card.isOpen}
          onClick={() => onClick(card.id, card.value, card.isOpen)}
        />
      ))}
    </div>
  );
};

export default Board;
