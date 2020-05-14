import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ error }) => <h1>{error}</h1>;

ErrorMessage.propTypes = {
  error: PropTypes.string,
};

ErrorMessage.defaultProps = {
  error: "",
};

export default ErrorMessage;
