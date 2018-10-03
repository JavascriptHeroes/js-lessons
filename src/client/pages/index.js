// styles
import "./index.scss";

// utilities
import fetch from "client/utils/fetch";

export default class App extends React.Component {
  doLogin = async () => {
    const data = await fetch("/api/v1/login", "POST", {
      email: "email@email.cz",
      password: "tajneheslo"
    });

    console.info(data);
  };

  render() {
    return (
      <div>
        Hello World! <button onClick={this.doLogin}>Login</button>
      </div>
    );
  }
}
