import React, { Component } from "react";
import Products from "../../Components/Products/Products";
import { connect } from "react-redux";
import {
  fetch_api_request_task,
  del_product_request,
} from "../../Redux/Actions/Action";
import ProductItem from "../../Components/ProductItem/ProductItem";

class PagesProducts extends Component {
  componentDidMount() {
    this.props.fetchApiRequestTask();
  }
  render() {
    const { products } = this.props;
    return (
      <Products>
        {products.map((value, index) => {
          return (
            <ProductItem
              products={value}
              index={index}
              key={index}
              del_product={this.props.del_product}
            />
          );
        })}
      </Products>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.Products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApiRequestTask: () => {
      return dispatch(fetch_api_request_task());
    },
    del_product: (data) => {
      return dispatch(del_product_request(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PagesProducts);
