import React, { PureComponent } from "react";
import ChairList from "./ProductList";
import Result from "./Result";
import style from "./Home.module.css";

export class Home extends PureComponent {
  render() {
    return (
      <div className={style.home}>
        <div>Screen</div>

        <div className="">
          {" "}
          <ChairList />
        </div>
        <div className="">
          {" "}
          <Result />
        </div>
      </div>
    );
  }
}

export default Home;
