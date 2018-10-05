// styles
import './index.scss';

// utilities
import fetch from 'client/utils/fetch';

export default class App extends React.Component {
  state = {
    email: '',
    password: ''
  };

  changePassword = e => {
    const password = e.target.value;
    this.setState({
      password
    });
  };

  changeEmail = e => {
    const email = e.target.value;
    this.setState({
      email
    });
  };

  doLogin = async e => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    console.log(email, password);
    const data = await fetch('/auth/v1/login', 'POST', {
      email: email,
      password: password
    });

    console.info(data);
  };

  render() {
    return (
      <div className="container">
        Přihlášení
        <form onSubmit={this.doLogin} method="POST">
          <input type="text" name="email" placeholder="email" value={this.props.email} onChange={this.changeEmail} />
          <br />

          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.props.password}
            onChange={this.changePassword}
          />
        </form>
        <button onClick={this.doLogin}>Login</button>
      </div>
    );
  }
}
