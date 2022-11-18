import React, { Component } from "react";
import ProductList from "./ProductList";
import Result from "./Result";
import style from "./Home.module.css";

export class Home extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="text-center">Đặt vé xem phim CyberMovie</h2>
        <div className="row">
          <div className="col-8">
            <div className="bg-black text-white my-3 text-center fs-4">
              Screen
            </div>
            <ProductList />
          </div>
          <div className="col-4">
            <Result />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
