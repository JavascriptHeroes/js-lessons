import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faCircle);

// styles
import "./index.scss";
import Login from "./login";
import Homepage from "./homepage";
import Province from "./province";

// utilities
import fetch from "client/utils/fetch";

export default class App extends React.Component {
  state = {
    isRedirected: false,
    isPasswordVisible: false,
    planetInfo: {
      "1": {
        id: "1",
        img:
          "https://space-facts.com/wp-content/uploads/jupiter-transparent.png",
        name: "Saturn"
      },
      "2": {
        id: "2",
        img:
          "https://space-facts.com/wp-content/uploads/jupiter-transparent.png",
        name: "Saturn"
      },
      "3": {
        id: "3",
        img:
          "https://space-facts.com/wp-content/uploads/jupiter-transparent.png",
        name: "Saturn"
      },
      "4": {
        id: "4",
        img:
          "https://space-facts.com/wp-content/uploads/jupiter-transparent.png",
        name: "Saturn"
      }
    }
  };

  isUserRedirected = () => {
    this.setState({
      isRedirected: !this.state.isRedirected
    });
  };
  render() {
    return (
      <div>
        <div>
          <FontAwesomeIcon icon={["circle"]} color="#ddd" />
        </div>
        <Login isLoginEnabled={this.isLoginEnabled} />
        {this.state.isRedirected && (
          <Homepage
          // planetInformations={planetInformations}
          />
        )}
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
