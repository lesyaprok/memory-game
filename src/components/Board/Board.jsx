import React, { useState } from 'react';
import Card from '../Card/Card';
import { randomSort } from '../../utils/utils';
import { imagesData } from './imagesData';
import styles from './Board.module.css';

const Board = () => {
  const sortedData = randomSort(imagesData);
  const [cards, setCards] = useState(sortedData);
  return (
    <div className={styles.board}>
      {cards.map((card) => (
        <Card key={card.id} imgSrc={card.img} />
      ))}
    </div>
  );
};

export default Board;
