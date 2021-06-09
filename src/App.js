import React from "react";
import "./sass/main.scss";
import Button from "./components/button/button";
import DateNow from "./utils/date";
import Card from "./components/card/card";

const Count = ({ count, addOne, minusOne, color }) => (
  <div className="count">
    <Button text="1+" onclick={addOne} isAdd />
    <h2 className="count__text" style={{ color }}>
      {count}
    </h2>
    <Button text="1-" onclick={minusOne} isMinus />
  </div>
);

class App extends React.Component {
  state = {
    count: 0,
    backgroundColor: "#dfe6e9",
    color: "#000",
  };
  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };
  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };
  changeBackground = () => {
    const stateBackground = this.state.backgroundColor;
    const stateColor = this.state.color;

    const backgroundWhite = "#dfe6e9";
    const backgroundBlack = "#2d3436";
    const colorWhite = "#000";
    const colorBlack = "#fff";

    const backgroundColor =
      stateBackground === backgroundWhite ? backgroundBlack : backgroundWhite;
    const colorText = stateColor === colorWhite ? colorBlack : colorWhite;

    this.setState({
      backgroundColor: backgroundColor,
      color: colorText,
    });
    //    console.log(stateBackground);
  };

  render() {
    return (
      <Card
        style={{
          backgroundColor: this.state.backgroundColor,
          border: this.state.borderRadius,
        }}
      >
        <div className="flex">
          <h1 className="header__title" style={{ color: this.state.color }}>
            {DateNow(new Date())}
          </h1>
          <Count
            color={this.state.color}
            count={this.state.count}
            addOne={this.addOne}
            minusOne={this.minusOne}
          />
          <Button
            text="Change background"
            onclick={this.changeBackground}
            isWidth
            isBorderBlack
          />
        </div>
      </Card>
    );
  }
}

export default App;
