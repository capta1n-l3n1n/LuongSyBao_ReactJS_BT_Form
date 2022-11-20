import React, { Component } from "react";
import ProductList from "./ProductList";
import Result from "./Result";
import style from "./Home.module.css";
// import { connect } from "react-redux";

export class Home extends Component {
  render() {
    return (
      <div className={style.home}>
        <div className="container">
          <div className={style.content}>
            <h2 className="text-center text-light pb-3">
              ĐẶT VÉ XEM PHIM CYBERLAND.VN
            </h2>
            <div className="row ">
              <div className="col-8">
                <div className="bg-black text-white my-3 text-center fs-4">
                  Screen
                </div>
                <div>
                  {" "}
                  <ProductList />
                </div>
              </div>
              <div className="col-4">
                <Result handleDelete={this.props.handleDelete} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
