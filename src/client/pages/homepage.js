import Header from "./header";
import Province from "./province";
import Statistics from "./statistics";
// import LeftMenu from "./leftMenu"

const Planets = {
  0: {
    id: "1",
    img: "https://space-facts.com/wp-content/uploads/jupiter-transparent.png",
    name: "Saturn",
    people: "434 343 211",
    danger: "Big",
    size: "3396km"
  },
  1: {
    id: "2",
    img: "https://space-facts.com/wp-content/uploads/venus-transparent.png",
    name: "Uran",
    people: "213 432",
    danger: "No danger",
    size: "69911km"
  },

  2: {
    id: "3",
    img: "http://pluspng.com/img-png/planet-png-hd--1049.png",
    name: "Mars",
    people: "1 233 111 434",
    danger: "Enter at your own risk",
    size: "58232km"
  },
  3: {
    id: "4",
    img: "https://space-facts.com/wp-content/uploads/earth-transparent.png",
    name: "Neptun",
    people: "193 111 434",
    danger: "No",
    size: "8232km"
  }
};

const commanders = {
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
    name: "",
    amountOfPlanets: "74",
    rank: "Rebels",
    equipment: "Strong",
    army: "33 949 233"
  },
  5: {
    name: "",
    amountOfPlanets: "75",
    rank: "Major",
    equipment: "Weak",
    army: "1 123 o3"
  },
  6: {
    name: "",
    amountOfPlanets: "71",
    rank: "Marshal",
    equipment: "Strong",
    army: "Undefined"
  },
  7: {
    name: "",
    amountOfPlanets: "68",
    rank: "General",
    equipment: "Strong",
    army: "Undefined"
  },
  8: {
    name: "",
    amountOfPlanets: "67",
    rank: "Sergeant",
    equipment: "Undefined",
    army: "1 321 312"
  },
  9: {
    name: "",
    amountOfPlanets: "63",
    rank: "Captain",
    equipment: "Strong",
    army: "Undefined"
  },
  10: {
    name: "",
    amountOfPlanets: "54",
    rank: "Marshal",
    equipment: "Undefined",
    army: "44 212"
  },
  11: {
    name: "",
    amountOfPlanets: "52",
    rank: "Major",
    equipment: "",
    army: "123 543"
  },
  12: {
    name: "",
    amountOfPlanets: "49",
    rank: "Rebels",
    equipment: "Undefined",
    army: "423 123"
  },
  13: {
    name: "",
    amountOfPlanets: "45",
    rank: "Rebels",
    equipment: "",
    army: "23 234"
  },
  14: {
    name: "",
    amountOfPlanets: "42",
    rank: "Rebels",
    equipment: "Medium",
    army: "123 432"
  },
  15: {
    name: "",
    amountOfPlanets: "38",
    rank: "Marshal",
    equipment: "Strong",
    army: "43 343 111"
  },
  16: {
    name: "",
    amountOfPlanets: "38",
    rank: "Captain",
    equipment: "Undefined",
    army: "354 422 123"
  },
  17: {
    name: "",
    amountOfPlanets: "35",
    rank: "Captain",
    equipment: "Undefined",
    army: "123 111 434"
  },
  18: {
    name: "",
    amountOfPlanets: "32",
    rank: "Major",
    equipment: "Undefined",
    army: "65 234"
  },
  19: {
    name: "",
    amountOfPlanets: "30",
    rank: "Rebels",
    equipment: "Weak",
    army: "22 444"
  },
  20: {
    name: "",
    amountOfPlanets: "29",
    rank: "General",
    equipment: "Strong",
    army: "44 123"
  },
  21: {
    name: "",
    amountOfPlanets: "27",
    rank: "Rebels",
    equipment: "Strong",
    army: "74 544"
  },
  22: {
    name: "",
    amountOfPlanets: "26",
    rank: "Captain",
    equipment: "Medium",
    army: "652 234 123"
  },
  23: {
    name: "",
    amountOfPlanets: "23",
    rank: "Marshal",
    equipment: "Undefined",
    army: "23 434"
  },
  24: {
    name: "",
    amountOfPlanets: "20",
    rank: "Major-General",
    equipment: "Strong",
    army: "948 132 111"
  },
  25: {
    name: "",
    amountOfPlanets: "19",
    rank: "Private",
    equipment: "Weak",
    army: "11 321"
  },
  26: {
    name: "",
    amountOfPlanets: "12",
    rank: "",
    equipment: "Weak",
    army: "43 312"
  },
  27: {
    name: "",
    amountOfPlanets: "8",
    rank: "General",
    equipment: "Strong",
    army: "123 434"
  },
  28: {
    name: "",
    amountOfPlanets: "10",
    rank: "Marshal",
    equipment: "Weak",
    army: "31 312"
  },
  29: {
    name: "",
    amountOfPlanets: "5",
    rank: "Major",
    equipment: "Medium",
    army: "123 342"
  },
  30: {
    name: "",
    amountOfPlanets: "2",
    rank: "Sergant",
    equipment: "Weak",
    army: "50 323"
  }
};
export default class Homepage extends React.Component {
  state = {
    isRedirected: false,
    isPasswordVisible: false,
    isStatisticVisible: false
  };
  ShowStatistic = () => {
    console.info(this.state.ShowStatistic);
    this.setState({
      ShowStatistic: !this.state.ShowStatistic
    });
  };

  render() {
    const { selectedPlanet } = this.state;
    return (
      <div>
        <Header
          ShowStatistic={this.ShowStatistic}
          isStatisticVisible={this.state.isStatisticVisible}
        />
        <Province planetInfo={Planets} />
        {/* <Statistics
                    CommandersArray={commanders}
                /> */}
      </div>
    );
  }
}
