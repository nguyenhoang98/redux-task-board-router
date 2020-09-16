import * as types from "../Constants/index";
import fetch_api from "../../Apis/Api";
export const fetch_api_request_task = () => {
  return (dispatch) => {
    return fetch_api("GET", "Todo", null)
      .then((res) => {
        return dispatch(fetch_api_succes(res.data));
      })
      .catch((err) => {
        return dispatch(fetch_api_err(err));
      });
  };
};

export const fetch_api_succes = (data) => {
  return {
    type: types.FETCH_API_TASK_SUCCESS,
    payload: {
      data: data,
    },
  };
};
export const fetch_api_err = (err) => {
  return {
    type: types.FETCH_API_TASK_ERR,
    payload: {
      err: err,
    },
  };
};

export const add_products_request = (data) => {
  return (dispatch) => {
    return fetch_api("POST", "Todo", data)
      .then((res) => {
        dispatch(add_products_success(res.data));
      })
      .catch((err) => {
        dispatch(add_products_err(err));
      });
  };
};

export const add_products_success = (data) => {
  return {
    type: types.ADD_PRODUCTS_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const add_products_err = () => {
  return {
    type: types.ADD_PRODUCTS_ERR,
  };
};

export const del_product_request = (data) => {
  console.log("Del : ", data);
  return (dispatch) => {
    return fetch_api("DELETE", `Todo/${data.id}`)
      .then((res) => {
        console.log(res.data);
        return dispatch(del_products_success(data));
      })
      .catch((err) => {
        return dispatch(del_products_err(err));
      });
  };
};

export const del_products_success = (data) => {
  return {
    type: types.DEL_PRODUCT_SUCCESS,
    payload: {
      data,
    },
  };
};
export const del_products_err = (err) => {
  return {
    type: types.DEL_PRODUCT_ERR,
    payload: {
      err,
    },
  };
};

export const editting_request = (id) => {
  return (dispatch) => {
    return fetch_api("GET", `Todo/${id}`)
      .then((res) => {
        dispatch(editting_success(res.data));
      })
      .catch((err) => {
        dispatch(editting_err(err));
      });
  };
};

export const editting_success = (data) => {
  return {
    type: types.EDITTING_SUCCESS,
    payload: {
      data: data,
    },
  };
};
export const editting_err = (err) => {
  return {
    type: types.EDITTING_SUCCESS,
    payload: {
      err: err,
    },
  };
};

export const update_products_request = (data) => {
  return (dipsatch) => {
    return fetch_api("PUT", `Todo/${data.id}`, data)
      .then((res) => {
        dipsatch(update_products_success(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const update_products_success = (data) => {
  return {
    type: types.UPDATE_PRODUCTS_SUCCESS,
    payload: {
      data: data,
    },
  };
};
