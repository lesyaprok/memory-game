import { randomSort } from './utils';
import { imagesData } from './imagesData';

const sortedCards = randomSort(imagesData);

const setCardToOpen = (cards, { cardId }) => {
  return cards.reduce(
    (acc, card) =>
      card.id === cardId ? [...acc, { ...card, isOpen: true }] : [...acc, card],
    []
  );
};

const setCardsIsOpenToFalse = (cards, { prevCardValue, cardValue }) => {
  return cards.reduce(
    (acc, card) =>
      card.value === cardValue || card.value === prevCardValue
        ? [...acc, { ...card, isOpen: false }]
        : [...acc, card],
    []
  );
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_CARD':
      return setCardToOpen(state, action.payload);
    case 'CLOSE_CARDS':
      return setCardsIsOpenToFalse(state, action.payload);
    case 'RESTART':
    case 'START':
      return randomSort(sortedCards);
    default:
      return state;
  }
};
