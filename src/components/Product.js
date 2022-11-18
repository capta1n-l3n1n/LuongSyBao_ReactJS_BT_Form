import React, { Component } from "react";
import { connect } from "react-redux";
import clsx from "clsx";

export class Product extends Component {
  render() {
    const { item, productsSelectedList, handleProduct } = this.props;
    return (
      <button
        onClick={() => {
          handleProduct(item);
        }}
        className={clsx("product", {
          booked: item.daDat,
          booking: productsSelectedList.find(
            (index) => index.soGhe === item.soGhe
          ),
        })}
        disabled={item.daDat}
      >
        {item.soGhe}
      </button>
    );
  }
}

const mapStateToProps = (state) => {
  return { productsSelectedList: state.product.productsSelectedList };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleProduct: (product) => {
      dispatch({
        type: "CHANGE_CHAIR",
        payload: product,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
