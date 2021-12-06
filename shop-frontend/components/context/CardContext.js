import { createContext, useContext, useEffect, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({children}) => {

  const [card, setCard] = useState({});

  useEffect(() => {
    const cardLocal = window.localStorage.getItem('card');
    if(cardLocal) {
      setCard(JSON.parse(cardLocal));
    }
  }, []);

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

  const removeFromCat = (productId) => {
    setCard(old => {
      const newCard = {};
      Object.keys(old).forEach(id => {
        if(id !== productId) {
          newCard[id] = old[id]
        }
      });
      window.localStorage.setItem('card', JSON.stringify(newCard));
      return newCard;
    })
  }

  const changeQuantity = (productId, newQuantity) => {
    setCard(old => {
      const newCard = {};
      Object.keys(old).forEach(id => {
        const newProduct = {...old[id]};
        if(id === productId) {
          newProduct.quantity = newQuantity;
        }
        newCard[id] = newProduct;
      });
      window.localStorage.setItem('card', JSON.stringify(newCard));
      return newCard;
    })
  }

  return (
    <CardContext.Provider value={{card, addToCard, removeFromCat, changeQuantity}}>
      {children}
    </CardContext.Provider>
  );
}

export const useCard = () => {
  const card = useContext(CardContext);
  return card;
}