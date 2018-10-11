import React from "react";
import { startLogin } from "../actions/auth";
import { connect } from "react-redux";

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    startLogin: () => {
      dispatch(startLogin());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
