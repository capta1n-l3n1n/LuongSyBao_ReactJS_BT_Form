import React, { PureComponent } from "react";

export class Product extends PureComponent {
  render() {
    return <div>Product</div>;
  }
}

const mapStateToProps = (state) => {
  return { productSelectedList: state.product };
};
export default Product;
