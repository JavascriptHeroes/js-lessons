// styles
import "./index.scss";
import Login from "./login";

// utilities
import fetch from "client/utils/fetch";

export default class App extends React.Component {
  state = {
    email: "",
    password: "",
    isEmailValid: false,
    error: "",
    passwordValid: false
  };

  validate = () => {
    if (this.state.password.length < 8) {
      return "Password needs to be at least 8 characters";
    }
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

  HandleEmail = event => {
    const email = event.target.value;
    let validation = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // console.log(email);
    //console.log(validation.test(email).toLowercase());
    // return validation.test(email).toLowercase();
    this.setState(
      {
        email
      },
      () => {
        console.log(this.state.email);
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

  IsEmailCorrect = e => {
    const validation = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const email = this.state.email;
    console.log(isEmailValid, "validace");
    if (validation(email) === false) {
    }
    this.setState({
      isEmailValid: true
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

  doLogin = async e => {
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
    const err = this.validate();
    console.log("funkce doLogin");
    const email = this.state.email;
    const password = this.state.password;
    const data = await fetch("/api/v1/login", "POST", {
      email: email,
      password: password
    });
    // { this.state.email === "email@email.cz" && this.state.passwordValue === "tajneheslo" ? true : false }
    console.info(data);
    if (data.success === true) {
      window.location = "https://google.com";
    }
  };

  render() {
    return (
      <div>
        <Login
          email={this.state.email}
          password={this.state.password}
          HandlePassword={this.HandlePassword}
          HandleEmail={this.HandleEmail}
          doLogin={this.doLogin}
          error={this.state.error}
          passwordErorr={this.state.passwordErorr}
          isLoginEnabled={this.isLoginEnabled}
        />

        {/* <div>
          Hello World! <button className="nevim" onClick={this.doLogin}>Login</button>
        </div> */}
      </div>
    );
  }
}
