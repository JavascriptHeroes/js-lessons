import "./statistics.scss";
import { cpus } from "os";

export default class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showedItems: 10,
      sortHovno: true,
      sortDirection: "descending",
      commandersArray: {
        1: {
          name: "Horattio",
          amountOfPlanets: "120",
          rank: "Field-Marshal",
          equipment: "Strong",
          army: "190 123 122"
        },
        2: {
          name: "Tento",
          amountOfPlanets: "69",
          rank: "General",
          equipment: "Medium",
          army: "40 123 912"
        },
        3: {
          name: "Engel",
          amountOfPlanets: "80",
          rank: "Major",
          equipment: "Strong",
          army: "44 120 212"
        },
        4: {
          name: "Pirate",
          amountOfPlanets: "74",
          rank: "Rebels",
          equipment: "Strong",
          army: "33 949 233"
        },
        5: {
          name: "John Garland",
          amountOfPlanets: "75",
          rank: "Major",
          equipment: "Weak",
          army: "1 123 o3"
        },
        6: {
          name: "William S. Harney",
          amountOfPlanets: "71",
          rank: "Marshal",
          equipment: "Strong",
          army: "Not known"
        },
        7: {
          name: "Nevjem name",
          amountOfPlanets: "68",
          rank: "General",
          equipment: "Strong",
          army: "Not known"
        },
        8: {
          name: "Albert S. Johnston",
          amountOfPlanets: "67",
          rank: "Sergeant",
          equipment: "Not known",
          army: "1 321 312"
        },
        9: {
          name: "Winfield Scott",
          amountOfPlanets: "63",
          rank: "Captain",
          equipment: "Strong",
          army: "Not known"
        },
        10: {
          name: "Edwin V. Sumner",
          amountOfPlanets: "54",
          rank: "Marshal",
          equipment: "Not known",
          army: "44 212"
        },
        11: {
          name: "David E. Twiggs",
          amountOfPlanets: "52",
          rank: "Major",
          equipment: "Not known",
          army: "123 543"
        },
        12: {
          name: "John E. Wool",
          amountOfPlanets: "49",
          rank: "Rebels",
          equipment: "Not known",
          army: "423 123"
        },
        13: {
          name: "Timothy Andrews",
          amountOfPlanets: "45",
          rank: "Rebels",
          equipment: "Not known",
          army: "23 234"
        },
        14: {
          name: "Sylvester Churchill",
          amountOfPlanets: "42",
          rank: "Rebels",
          equipment: "Medium",
          army: "123 432"
        },
        15: {
          name: "Samuel Cooper",
          amountOfPlanets: "38",
          rank: "Marshal",
          equipment: "Strong",
          army: "43 343 111"
        },
        16: {
          name: "Henry Knox Craig",
          amountOfPlanets: "38",
          rank: "Captain",
          equipment: "Not known",
          army: "354 422 123"
        },
        17: {
          name: "George Gibson",
          amountOfPlanets: "35",
          rank: "Captain",
          equipment: "Not known",
          army: "123 111 434"
        },
        18: {
          name: "Joseph E. Johnston",
          amountOfPlanets: "32",
          rank: "Major",
          equipment: "Not known",
          army: "65 234"
        },
        19: {
          name: "Joseph K. F. Mansfield",
          amountOfPlanets: "30",
          rank: "Rebels",
          equipment: "Weak",
          army: "22 444"
        },
        20: {
          name: "Benjamin Franklin Larned",
          amountOfPlanets: "29",
          rank: "General",
          equipment: "Strong",
          army: "44 123"
        },
        21: {
          name: "Thomas Lawson",
          amountOfPlanets: "27",
          rank: "Rebels",
          equipment: "Strong",
          army: "74 544"
        },
        22: {
          name: "Joseph G. Totten",
          amountOfPlanets: "26",
          rank: "Captain",
          equipment: "Medium",
          army: "652 234 123"
        },
        23: {
          name: "Henry Lumley",
          amountOfPlanets: "23",
          rank: "Marshal",
          equipment: "Not known",
          army: "23 434"
        },
        24: {
          name: "Nejmko",
          amountOfPlanets: "20",
          rank: "Major-General",
          equipment: "Strong",
          army: "948 132 111"
        },
        25: {
          name: "Charles Ross",
          amountOfPlanets: "19",
          rank: "Private",
          equipment: "Weak",
          army: "11 321"
        },
        26: {
          name: "Sir Charles Wills",
          amountOfPlanets: "12",
          rank: "Marshal",
          equipment: "Weak",
          army: "43 312"
        },
        27: {
          name: "Joseph Sabine",
          amountOfPlanets: "8",
          rank: "General",
          equipment: "Strong",
          army: "123 434"
        },
        28: {
          name: "William Evans",
          amountOfPlanets: "10",
          rank: "Marshal",
          equipment: "Weak",
          army: "31 312"
        },
        29: {
          name: "Richard Boyle",
          amountOfPlanets: "5",
          rank: "Major",
          equipment: "Medium",
          army: "123 342"
        },
        30: {
          name: "George Wade",
          amountOfPlanets: "2",
          rank: "Sergant",
          equipment: "Weak",
          army: "50 323"
        }
      }
    };
  }

  SortPeople = () => {
    this.setState(
      prevstate => ({
        sortHovno: !prevstate.sortHovno
      }),
      () => {
        const sortedPlanet = Object.values(this.state.commandersArray).sort(
          (a, b) => {
            return this.state.sortHovno
              ? a.amountOfPlanets - b.amountOfPlanets
              : b.amountOfPlanets - a.amountOfPlanets;
          }
        );

        this.setState({
          commandersArray: sortedPlanet
        });
      }
    );
  };

  ShowMoreHeroes = () => {
    this.setState({
      showedItems: this.state.showedItems + 5
    });
  };

  ShowLessHeroes = () => {
    this.setState({
      showedItems: (this.state.showedItems = 10)
    });
  };

  // FunctionCompare = (a, b) => {
  //     if (Object.values(this.state.commander.amountOfPlanets))
  // }
  render() {
    const { commandersArray } = this.state;
    // console.info(Object.values(this.state.commandersArray));
    // console.log(Object.values(commandersArray).length);
    return (
      <div>
        <div className="container">
          <div className="commanderers__wrapper">
            <div className="commanderItems">
              <div className="commanderItems__name__wrapper">
                <span
                  className="commanderItems__name commanderItems__title"
                  onClick={this.SortFunction}
                >
                  Name
                </span>
              </div>
              <div className="commanderItems__planets__wrapper">
                <span
                  className="commanderItems__planets commanderItems__title"
                  onClick={this.SortPeople}
                >
                  Planets
                </span>
              </div>
              <div className="commanderItems__rank__wrapper">
                <span className="commanderItems__rank commanderItems__title">
                  Rank
                </span>
              </div>
              <div className="commanderItems__equipment__wrapper">
                <span className="commanderItems__equipment commanderItems__title">
                  Equipment
                </span>
              </div>
              <div className="commanderItems__army__wrapper">
                <span className="commanderItems__army commanderItems__title">
                  Army
                </span>
              </div>
            </div>
          </div>

          {Object.values(commandersArray)
            .slice(0, this.state.showedItems)
            .map((commander, index) => {
              return (
                <div className="commanderers__wrapper">
                  <div className="commanderItems">
                    <div className="commanderItems__name__wrapper">
                      <span className="commanderItems__name">
                        {commander.name}
                      </span>
                    </div>
                    <div className="commanderItems__planets__wrapper">
                      <span className="commanderItems__planets">
                        {commander.amountOfPlanets}
                      </span>
                      <button />
                    </div>
                    <div className="commanderItems__rank__wrapper">
                      <span className="commanderItems__rank">
                        {commander.rank}
                      </span>
                    </div>
                    <div className="commanderItems__equipment__wrapper">
                      <span className="commanderItems__equipment">
                        {commander.equipment}
                      </span>
                    </div>
                    <div className="commanderItems__army__wrapper">
                      <span className="commanderItems__army">
                        {commander.army}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          {this.state.showedItems === Object.values(commandersArray).length ? (
            <div className="commannders__moreButton--alignment">
              <button
                className="commannders__moreButton"
                onClick={this.ShowLessHeroes}
              >
                Show Less Heroes
              </button>
            </div>
          ) : (
            <div className="commannders__moreButton--alignment">
              <button
                className="commannders__moreButton"
                onClick={this.ShowMoreHeroes}
              >
                Show More Heroes
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
