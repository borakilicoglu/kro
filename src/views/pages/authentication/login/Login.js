import React from "react";
import { Mail, Lock, Check, Facebook, Twitter, GitHub } from "react-feather";
import { history } from "../../../../history";
// import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
// import googleSvg from "../../../../assets/img/svg/google.svg";

// import loginImg from "../../../../assets/img/pages/login.png";
// import "../../../../assets/scss/pages/authentication.scss";

class Login extends React.Component {
  state = {
    activeTab: "1",
    email: "",
    password: "",
  };
  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };
  render() {
    return <h4>Login</h4>;
  }
}
export default Login;
