import './login.scss';

export default class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  isLoginEnabled = () => {
    if (this.state.email === '' || this.state.password === '') {
      //console.log(isLoginEnabled);
      return false;
    } else {
      return true;
    }
  };

  render() {
    const { HandleEmail, HandlePassword, doLogin, email, password, isLoginEnabled, error } = this.props;
    // const { emailValue, passwordValue } = this.state
    console.log(this.isLoginEnabled());
    const errorClassName = `login__password ${error && 'border'}`;
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
                  <input
                    type="text"
                    className="login__email"
                    placeholder="Email address"
                    value={email}
                    onChange={HandleEmail}
                  />
                  <span className="password__title">Password</span>
                  <input
                    type="password"
                    className={errorClassName}
                    placeholder="Enter your password"
                    value={password}
                    onChange={HandlePassword}
                  />
                  <p className="error-show">{error}</p>
                  <button
                    className={this.isLoginEnabled() ? 'login__button-disabled' : 'login__button'}
                    onClick={doLogin}
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
