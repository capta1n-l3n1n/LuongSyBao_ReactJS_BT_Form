import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";

export class ProductList extends Component {
  render() {
    const { productList } = this.props;
    return (
      <div className="d-flex flex-column align-items-center">
        {productList.map((item) => {
          return (
            <div key={item.hang} className="d-flex">
              <div
                style={{ width: "30px", marginTop: "1rem" }}
                className="text-light fw-bold"
              >
                {item.hang}
              </div>
              <div>
                {item.danhSachGhe.map((prod) => {
                  return <Product key={prod.soGhe} item={prod} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.product.productsList,
  };
};
export default connect(mapStateToProps)(ProductList);
