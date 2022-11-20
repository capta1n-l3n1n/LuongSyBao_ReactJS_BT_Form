import React, { Component } from "react";
import { connect } from "react-redux";

export class Result extends Component {
  render() {
    const { productsSelectedList, handlePay, handleDelete } = this.props;
    return (
      <div className="pt-3">
        <h3 className="text-light fw-bold">DANH SÁCH GHẾ BẠN CHỌN</h3>
        <div>
          <table className="table">
            <thead>
              <tr>
                <td className="text-light">Số ghế</td>
                <td className="text-light">Giá tiền</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {productsSelectedList.map((item) => {
                return (
                  <tr key={item.soGhe}>
                    <td className="text-light ">{item.soGhe}</td>
                    <td className="text-light ">
                      {item.gia.toLocaleString()} VND
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleDelete(item);
                        }}
                      >
                        Hủy
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mt-5 text-light fw-bold">
            Tổng tiền:{" "}
            {productsSelectedList
              .reduce((total, item) => {
                return (total += item.gia);
              }, 0)
              .toLocaleString()}{" "}
            VND
          </div>
          <div>
            <button onClick={handlePay} className="btn btn-success mt-3">
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { productsSelectedList: state.product.productsSelectedList };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handlePay: () => {
      dispatch({
        type: "result/setSeat",
      });
    },
    handleDelete: (product) => {
      dispatch({
        type: "product/setSelectedSeat",
        payload: product,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);
