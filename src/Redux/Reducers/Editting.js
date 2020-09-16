import * as types from "../Constants/index";
var initialState = {
  id: "",
  name: "",
  status: false,
  description: "",
  price: "",
};
var reducer = (state = initialState, action) => {
  if (action.type === types.EDITTING_SUCCESS) {
    const { data } = action.payload;
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      status: data.status,
      price: data.price,
    };
  }
  return state;
};
export default reducer;
