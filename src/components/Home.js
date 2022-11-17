import React, { PureComponent } from "react";
import ChairList from "./ChairList";
import Result from "./Result";

export class Home extends PureComponent {
  render() {
    return (
      <div>
        <ChairList />
        <Result />
      </div>
    );
  }
}

export default Home;
