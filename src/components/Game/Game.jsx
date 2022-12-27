import React, { useEffect, useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Board from '../Board/Board';
import Rounds from '../Rounds/Rounds';
import { randomSort } from '../../utils/utils';
import { imagesData } from './imagesData';
import Modal from '../../ui/Modal/Modal';

const sortedCards = randomSort(imagesData);

const Game = () => {
  const [cards, setCards] = useState([]);
  const [prevCardValue, setPrevCardValue] = useState('');
  const [rounds, setRounds] = useState(1);
  const [matches, setMatches] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    setCards(sortedCards);
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
    } else {
      setMatches(matches + 1);
    }
    setPrevCardValue('');
    setTimeout(() => setRounds(rounds + 1), 1000);
  };

  const restartGame = () => {
    setMatches(0);
    setCards(randomSort(sortedCards));
    setRounds(1);
  };

  return (
    <div>
      <Rounds rounds={rounds} />
      <Board cards={cards} onClick={handleClick} />
      <CSSTransition
        in={matches === 1}
        timeout={300}
        classNames="animate"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <Modal onClick={restartGame} />
        </div>
      </CSSTransition>
    </div>
  );
};
export default Game;
