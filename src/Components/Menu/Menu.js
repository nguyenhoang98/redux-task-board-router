import React, { Component } from "react";
import "./Menu.css";
import { NavLink, Route } from "react-router-dom";
const MenuLink = ({ label, to, actionWhenExact }) => {
  return (
    <Route
      path={to}
      exact={actionWhenExact}
      children={(props) => {
        return (
          <li className={props.match ? "action" : ""}>
            <NavLink to={to} exact>
              {label}
            </NavLink>
          </li>
        );
      }}
    />
  );
};
const menus = [
  {
    label: "Trang Chủ",
    to: "/",
    actionWhenExact: true,
  },
  {
    label: "Quản Lí Sản Phẩm",
    to: "/products",
    actionWhenExact: false,
  },
];
class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul>
          {menus.map((value, index) => {
            return (
              <MenuLink
                label={value.label}
                to={value.to}
                actionWhenExact={value.actionWhenExact}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Menu;
