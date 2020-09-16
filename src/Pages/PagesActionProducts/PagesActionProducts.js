import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PagesActionProducts.css";
import {
  add_products_request,
  editting_request,
  update_products_request,
} from "../../Redux/Actions/Action";
import { connect } from "react-redux";
class PagesActionProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      description: "",
      price: "",
      status: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    var target = e.target;
    var name = target.name;
    var value = name === "status" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const { id, name } = this.state;
    if (name) {
      if (!id) {
        this.props.addProducts(this.state);
      } else {
        this.props.updateProducts(this.state);
      }
      const { history } = this.props;
      history.goBack();
    }
  }
  componentDidMount() {
    const { match } = this.props;
    console.log(match);
    if (match) {
      this.props.onEdittingForm(match.params.id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.editting) {
      this.setState({
        id: nextProps.editting.id,
        name: nextProps.editting.name,
        description: nextProps.editting.description,
        status: nextProps.editting.status,
        price: nextProps.editting.price,
      });
    }
  }
  render() {
    const { name, price, status, description } = this.state;
    return (
      <div className="PagesActionProducts">
        <h2>Thêm Sản Phẩm</h2>
        <form onSubmit={this.onSubmit}>
          <div className="group-form">
            <label>Tên Sản Phẩm</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.onChange}
            />
          </div>
          <div className="group-form">
            <label>Miêu Tả</label>
            <textarea
              name="description"
              value={description}
              onChange={this.onChange}
            ></textarea>
          </div>
          <div className="group-form">
            <label>Giá</label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={this.onChange}
            />
          </div>
          <div className="group-form">
            <label>Trạng Thái</label>
            <input
              type="checkbox"
              name="status"
              value={status}
              onChange={this.onChange}
              checked={status}
            />
          </div>

          <div className="group-form">
            <Link to="/products" className="btn btn-prev">
              Trở Lại
            </Link>
            <button className="btn btn-save" type="submit">
              Lưu Lại
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    editting: state.Editting,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addProducts: (data) => {
      return dispatch(add_products_request(data));
    },
    onEdittingForm: (id) => {
      return dispatch(editting_request(id));
    },
    updateProducts: (data) => {
      return dispatch(update_products_request(data));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagesActionProducts);
