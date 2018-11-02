import React from "react";
import "./province.scss";

export default class Province extends React.Component {
  state = {
    isArmyVisible: false,
    activePlanet: 0
  };

  // onClick = () => {
  //     const { product, isSelected } = this.props;

  //     this.props.onSelect(isSelected ? null : product.id);
  // };

  ShowNextPlanet = () => {
    //console.log(Object.keys(this.props.planetInfo).length);
    if (
      this.state.activePlanet ===
      Object.keys(this.props.planetInfo).length - 1
    ) {
      this.setState({
        activePlanet: 0
      });
    } else {
      this.setState(
        prevState => ({
          activePlanet: prevState.activePlanet + 1
        }),
        () => {
          console.info(this.state.activePlanet);
        }
      );
      //   console.info(this.state.activePlanet);
    }
  };

  ShowPreviousPlanet = () => {
    //console.info(this.props.planetInfo.length);
    if (this.state.activePlanet <= 0) {
      this.setState({
        activePlanet: Object.keys(this.props.planetInfo).length - 1
      });
    } else {
      this.setState({
        activePlanet: this.state.activePlanet - 1
      });
    }
  };

  ShowArmyTab = () => {
    console.info(this.state.isArmyVisible);
    this.setState(
      {
        isArmyVisible: !this.state.isArmyVisible
      },
      () => {
        // console.info(this.state.isArmyVisible);
      }
    );
  };
  ShowPlanetInfo = planetInfo => {
    return Object.entries(planetInfo).map((planet, index) => {
      // return <div>{planetInfo.img}</div>
      return <p>{planet.name}</p>;
    });
  };

  render() {
    console.log(this.props);
    const { isArmyVisible, activePlanet } = this.state;
    const { ShowPlanetInfo, planetInfo, planet } = this.props;
    // console.log(this.props);
    // console.log(planetInfo);
    //console.log(this.props.planetInfo.1.img);
    //console.log(planet.name);
    //console.info(this.state.activePlanet);

    return (
      <div className="alignment--wrapper">
        <div className="container-province">
          <ul className="leftMenuList">
            <li className="leftMenuList__item">Profile</li>
            <li className="leftMenuList__item" onClick={this.ShowArmyTab}>
              Army
            </li>
            <li className="leftMenuList__item">Aliance</li>
            <li className="leftMenuList__item">Production</li>
            <li className="leftMenuList__item">Buildings</li>
          </ul>
          <div className="province__background">
            <div className="province__border">
              <img
                className="province__img"
                src={planetInfo[this.state.activePlanet].img}
              />
              <button
                className="province__button__next"
                onClick={this.ShowNextPlanet}
              >
                Next
              </button>
              <button
                className="province__button__back"
                onClick={this.ShowPreviousPlanet}
              >
                Back
              </button>
              <ul className="informations">
                <li className="informations__item--pseudo">
                  <p>
                    <span>Name: </span>
                    <span>{planetInfo[this.state.activePlanet].name}</span>
                  </p>
                </li>
                <li className="informations__item--pseudo">
                  <p>
                    <span>People: </span>
                    <span>{planetInfo[this.state.activePlanet].people}</span>
                  </p>
                </li>
                <li className="informations__item">
                  <p>
                    <span>Danger: </span>
                    <span>{planetInfo[this.state.activePlanet].danger}</span>
                  </p>
                </li>
                <li className="informations__item">
                  <p>
                    <span>Radius: </span>
                    <span>{planetInfo[this.state.activePlanet].size}</span>
                  </p>
                </li>
                {/* <li className="informations__item">Race</li> */}

                {this.ShowPlanetInfo(this.props.planetInfo)}

                {/* <ShowPlanetInfo planetInformations={planetInformations} /> */}
                {/* <div>{planetInformations}</div> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
