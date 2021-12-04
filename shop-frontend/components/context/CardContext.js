import { createContext, useContext, useEffect, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({children}) => {

  useEffect(() => {
    const cardLocal = window.localStorage.getItem('card');
    if(cardLocal) {
      setCard(JSON.parse(cardLocal));
    }
  }, []);

  const [card, setCard] = useState({});
  const addToCard = prod => {
    setCard(old => {
      let quantity = 0;
      if(old[prod.id]) {
        quantity = old[prod.id].quantity
      }

      const newCard = {
        ...old,
        [prod.id]: {
          quantity: quantity + 1,
          prod
        }
      }

      window.localStorage.setItem('card', JSON.stringify(newCard));
      return newCard;
    })
  }

  return (
    <CardContext.Provider value={{card, addToCard}}>
      {children}
    </CardContext.Provider>
  );
}

export const useCard = () => {
  const card = useContext(CardContext);
  return card;
}