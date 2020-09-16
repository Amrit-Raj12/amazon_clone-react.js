export const initialState={
  basket: [],
  user: null
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item)=> item.price + amount, 0);

const reducer=(state,action)=>{
  console.log(action);
  switch(action.type) {
    case 'ADD_TO_BASKET':
    // Login for adding item to header_basketCount
    return {
      ...state,
      basket: [...state.basket, action.item],
    };
    case 'REMOVE_FROM_BASKET':
    //Logic  for removing item from header_basketCount

    // cloned the basket
    let newBasket = [...state.basket];

    const index = state.basket.findIndex((basketItem) => basketItem.id=== action.id);

    if(index >=0){
      // item exists in basket, remove it...
      newBasket.splice(index, 1);
    } else {
      console.warn(
        `Cant remove product (id: ${action.id}) as its not in basket`
      );
    }

    return { ...state,
      basket: newBasket
     }
    case "SET_USER":
      return {
        ...state,
        user: action.user

      }

  }
}

export default reducer;
