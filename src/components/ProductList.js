import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";

export class ProductList extends Component {
  render() {
    const { productList } = this.props;
    console.log(this.props);
    return (
      <div>
        {productList.map((item) => {
          return (
            <div key={item.hang} className="d-flex">
              <div style={{ width: "30px", marginTop: "1rem" }}>
                {item.hang}
              </div>
              <div>
                {item.danhSachGhe.map((prod) => {
                  return <Product key={prod.soGhe} item={prod} />;
                })}
              </div>
            </div>
          );
          // return <div>{item.hang}</div>;
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
