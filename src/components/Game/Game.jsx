import React, { useEffect, useState, useReducer, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import Board from '../Board/Board';
import Rounds from '../Rounds/Rounds';
import { reducer } from '../../utils/reducer';
import Modal from '../../ui/Modal/Modal';

const Game = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [prevCardValue, setPrevCardValue] = useState('');
  const [rounds, setRounds] = useState(1);
  const [matches, setMatches] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    dispatch({ type: 'START' });
  }, []);

  const handleClick = (cardId, cardValue, isOpen) => {
    if (isOpen) return;
    dispatch({ type: 'OPEN_CARD', payload: { cardId, isOpen } });
    if (!prevCardValue) {
      setPrevCardValue(cardValue);
      return;
    }
    if (prevCardValue === cardValue) {
      setMatches(matches + 1);
    } else {
      setTimeout(
        () =>
          dispatch({
            type: 'CLOSE_CARDS',
            payload: { prevCardValue, cardValue },
          }),
        1000
      );
    }
    setPrevCardValue('');
    if (matches < 7) setTimeout(() => setRounds(rounds + 1), 1000);
  };

  const restartGame = () => {
    setMatches(0);
    dispatch({ type: 'RESTART' });
    setRounds(1);
  };

  return (
    <div>
      <Rounds rounds={rounds} />
      <Board cards={state} onClick={handleClick} />
      <CSSTransition
        in={matches === 8}
        timeout={1000}
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
