import React, { Component } from "react";
// import styles from "./index.module.css";
import PropTypes from "prop-types";
import cx from "classnames";
// import { Spring } from "react-spring/renderprops";

class ToolTip extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    placement: PropTypes.oneOf(["top", "bottom", "left", "right"]).isRequired,
    active: PropTypes.bool.isRequired,
    classname: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    text: "",
    placement: "bottom",
    active: false,
  };

  state = {
    active: this.props.active,
  };

  show = () => {
    this.setState({
      active: true,
    });
  };

  hide = () => {
    this.setState({
      active: false,
    });
  };

  render() {
    const { text, placement, children, classname } = this.props;
    const { active } = this.state;

    return (
      <div
        className={cx(classname)}
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
      >
        {children}
        {active && (
          <div className="transition-all">
            {(props) => (
              <span className={cx(placement)} style={props}>
                {text}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default ToolTip;
