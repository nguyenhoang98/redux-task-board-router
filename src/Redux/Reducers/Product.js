import * as types from "../Constants/index";
var initialState = [];
var reducer = (state = initialState, action) => {
  if (action.type === types.FETCH_API_TASK_SUCCESS) {
    const { data } = action.payload;
    state = data;
    return [...state];
  }
  if (action.type === types.ADD_PRODUCTS_SUCCESS) {
    const { data } = action.payload;
    state.push(data);
    return [...state];
  }
  if (action.type === types.DEL_PRODUCT_SUCCESS) {
    const { data } = action.payload;
    console.log(data);
    let index = state.findIndex((value) => {
      return value.id === data.id;
    });
    state.splice(index, 1);
    return [...state];
  }
  if (action.type === types.UPDATE_PRODUCTS_SUCCESS) {
    const { data } = action.payload;
    let index = state.findIndex((value) => {
      return value.id === data.id;
    });
    state = [
      ...state.slice(0, index),
      {
        ...data,
      },
      ...state.slice(index + 1),
    ];
    return [...state];
  }
  if (action.type == types.UPDATE_PRODUCTS_ERR) {
  }
  return state;
};

export default reducer;
