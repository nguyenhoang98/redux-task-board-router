import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";
class ProductItem extends Component {
  del_product = (product) => {
    this.props.del_product(product);
  };
  render() {
    const { products, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{products.id}</td>
        <td>{products.name}</td>
        <td>{products.description}</td>
        <td>{products.price}$</td>
        <td>
          <span className={products.status ? "red" : "green"}>
            {products.status ? "Còn Hàng" : "Hết Hàng"}
          </span>
        </td>
        <td>
          <Link
            to={`/add-product/${products.id}/edit`}
            className="btn btn-update"
          >
            Sửa
          </Link>
          <button
            className="btn btn-del"
            onClick={() => this.del_product(products)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}
export default ProductItem;
