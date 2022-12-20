import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { randomSort } from '../../utils/utils';
import { imagesData } from './imagesData';
import styles from './Board.module.css';

const Board = () => {
  const [cards, setCards] = useState([]);
  const [prevCardValue, setPrevCardValue] = useState('');

  useEffect(() => {
    setCards(randomSort(imagesData));
  }, []);

  const setIsOpenToFalse = (prevValue, currentValue) => {
    if (prevValue !== currentValue) {
      const modifiedCards = cards.reduce(
        (acc, card) =>
          card.value === currentValue || card.value === prevValue
            ? [...acc, { ...card, isOpen: false }]
            : [...acc, card],
        []
      );
      return modifiedCards;
    }
    return false;
  };

  const handleClick = (cardId, cardValue, isOpen) => {
    if (isOpen) return;
    const modifiedCards = cards.reduce(
      (acc, card) =>
        card.id === cardId
          ? [...acc, { ...card, isOpen: true }]
          : [...acc, card],
      []
    );
    setCards(modifiedCards);
    if (!prevCardValue) {
      setPrevCardValue(cardValue);
      return;
    }
    const arrayToSet = setIsOpenToFalse(prevCardValue, cardValue);
    if (arrayToSet) {
      setTimeout(() => setCards(arrayToSet), 1000);
    }
    setPrevCardValue('');
  };

  return (
    <div className={styles.board}>
      {cards.map((card) => (
        <Card
          key={card.id}
          imgSrc={card.img}
          isOpen={card.isOpen}
          onClick={() => handleClick(card.id, card.value, card.isOpen)}
        />
      ))}
    </div>
  );
};

export default Board;
