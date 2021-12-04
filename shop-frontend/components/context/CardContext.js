import { createContext, useContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({children}) => {

  const [card, setCard] = useState({});
  const addToCard = prod => {
    setCard(old => {
      let quantity = 0;
      if(old[prod.id]) {
        quantity = old[prod.id].quantity
      }

      return {
        ...old,
        [prod.id]: {
          quantity: quantity + 1,
          prod
        }
      }
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