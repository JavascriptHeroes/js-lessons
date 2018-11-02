import "./header.scss";
export default class Header extends React.Component {
  render() {
    // console.info(this.props.ShowStatistic);
    const { ShowStatistic } = this.props;
    return (
      <div className="container">
        <div className="header--background">
          <ul className="header__list">
            <li>
              <a
                href="/statistics"
                className="header__item"
                //onClick={ShowStatistic}
              >
                Statistics
              </a>
            </li>
            <li className="header__item">Support</li>
            <li className="header__item">Chat</li>
            <li className="header__item">Forum</li>
            <li className="header__item">Tokens</li>
          </ul>
        </div>
      </div>
    );
  }
}
