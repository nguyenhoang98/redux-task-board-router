import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
class Products extends Component {
  render() {
    return (
      <div className="products">
        <div className="add-task">
          <Link to="/add-product" className="btn btn-add-task">
            Thêm Công Việc
          </Link>
        </div>
        <div className="task-title">Danh Sách Các Sản Phẩm</div>
        <div className="task-list">
          <table>
            <thead>
              <tr>
                <th>Stt</th>
                <th>Mã Sản Phẩm</th>
                <th>Tên</th>
                <th>Mô Tả</th>
                <th>Giá</th>
                <th>Trạng Thái</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Products;
