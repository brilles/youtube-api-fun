import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import "../scss/components/Navigation.scss";

import { Home } from "styled-icons/fa-solid/Home";
import { Hot } from "styled-icons/boxicons-solid/Hot";
import Search from "./Search";

const NavHome = styled(Home)`
  height: 24px;
  width: 24px;
  margin-right: 9px;
`;

const NavHot = styled(Hot)`
  height: 24px;
  width: 24px;
  margin-right: 4px;
`;

class Navigation extends React.Component {
  render() {
    return (
      <>
        <div className="navigation-container">
          <div className="navigation">
            <div className="left">
              <h1>Logo Name</h1>
              <Search />
            </div>
            <div className="right">
              <div className="router">
                <NavLink exact to="/" activeClassName="active-nav">
                  <NavHome /> Home
                </NavLink>
                <NavLink to="/trending" activeClassName="active-nav">
                  <NavHot /> Trending
                </NavLink>
                <Link to="/login" className="login">
                  Login
                </Link>
                <Link to="/signup" className="signup">
                  Signup
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navigation;
