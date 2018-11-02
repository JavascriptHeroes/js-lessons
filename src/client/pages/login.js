import "./login.scss";
import View from "./view";

import ReactSVG from "react-svg";
export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    isPasswordVisible: false,
    email: "",
    password: "",
    isEmailValid: "",
    error: "",
    passwordValid: false
  };
  isLoginEnabled = () => {
    if (this.state.email === "" || this.state.password === "") {
      //console.log(isLoginEnabled);
      return false;
    } else {
      return true;
    }
  };

  WillBePasswordVisible = () => {
    this.setState(
      {
        isPasswordVisible: !this.state.isPasswordVisible
      },
      () => {
        console.info(this.state.isPasswordVisible);
      }
    );
  };
  isLoginEnabled = () => {
    if (this.state.email === "" || this.state.password === "") {
      //console.log(isLoginEnabled);
      return false;
    } else {
      return true;
    }
  };
  //   if (this.state.email !== "" && this.state.password !== "") {
  //     this.setState({
  //       valid: true
  //     });
  //   }
  //   else {
  //     this.setState({
  //       valid: false
  //     });
  //   }
  // }

  HandleEmailErorr = event => {
    this.setState(
      {
        email: event.target.value
      },
      () => {
        const validation = this.state.email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        );
        if (!validation && this.state.email.length > 0) {
          this.setState({
            isEmailValid: "Neni email"
          });
        } else {
          this.setState({
            isEmailValid: ""
          });
        }
      }
    );
  };

  HandleEmail = event => {
    const email = event.target.value;
    this.setState(
      {
        email
      },
      () => {
        console.info(email);
      }
    );
  };

  HandlePassword = event => {
    const password = event.target.value;
    if (password.length < 8 && password.length !== 0) {
      this.setState({
        error: "Password needs to be at least 8 characters"
      });
    } else {
      this.setState({
        error: ""
      });
    }
    const passwordValid = password.match(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    //passwordValid = value.length > 6;
    //password valid === nul tak udleej to

    console.log(password);
    // if (validation(password) === false) {
    this.setState({
      password
      //passwordValid: true
    });
  };

  isPasswordCorrect = () => {
    const password = event.target.value;
    const validation = "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/";
    if (validation(password) === false) {
      this.setState({
        passwordValid: true
      });
    }
  };

  doLogin = e => {
    if (this.state.password.length < 8) {
      this.setState({
        error: "Password needs to be at least 8 characters"
      });
      return;
    } else {
      this.setState({
        error: null
      });
    }

    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const data = fetch("/api/v1/login", {
      method: "POST",
      email: email,
      password: password
    }).then(res => {
      window.location = "/homepage";
    });
  };

  render() {
    const { error, isEmailValid, password } = this.state;
    const errorEmail = `${isEmailValid && "border"}`;
    const errorPasswor = `${error && "border"}`;
    // const errorEmailField = `login__email ${isEmailValid && "border"}`;

    return (
      <div className="container-image">
        <h1 className="title_page">Awaken Of War</h1>
        <div className="container">
          <div className="login-position">
            <div className="loginBorder">
              <div className="loginBorder--alignment">
                <div className="titles--alignment">
                  <span className="login__title">Login</span>

                  <span className="email__title">Email</span>
                  <div />
                  <input
                    type="text"
                    className={`login__email ${errorEmail}`}
                    placeholder="Email address"
                    value={this.state.email}
                    onChange={this.HandleEmailErorr}
                  />
                  <p className="error-show-email">{isEmailValid}</p>
                  <span className="password__title">Password</span>
                  <div className="password__wrapper">
                    <input
                      type={this.state.isPasswordVisible ? "text" : "password"}
                      id="myInput"
                      className={`login__password ${errorPasswor}`}
                      placeholder="Enter your password"
                      value={password}
                      onChange={this.HandlePassword}
                    />
                    <div
                      className="password__icon"
                      onClick={this.WillBePasswordVisible}
                    >
                      <View />
                    </div>
                  </div>

                  <p className="error-show-password">{error}</p>
                  <button
                    className={
                      this.isLoginEnabled()
                        ? "login__button-disabled"
                        : "login__button"
                    }
                    onClick={this.doLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
