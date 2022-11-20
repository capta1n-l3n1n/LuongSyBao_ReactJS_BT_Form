import React, { Component } from "react";
import { connect } from "react-redux";

export class Result extends Component {
  render() {
    const { productsSelectedList, handlePay, handleDelete } = this.props;
    return (
      <div className="pt-3">
        <h3 className="text-light fw-bold">DANH SÁCH GHẾ BẠN CHỌN</h3>
        <div className="mt-3">
          <div>
            <button
              style={{ cursor: "initial" }}
              className="btn p-2 bg-danger me-2"
            ></button>
            <span className="fw-semibold text-danger">Ghế đã chọn</span>
          </div>
          <div>
            <button
              style={{ cursor: "initial" }}
              className="btn p-2 bg-warning me-2"
            ></button>
            <span className="fw-semibold text-warning">Ghế đang chọn</span>
          </div>
          <div>
            <button
              style={{ cursor: "initial" }}
              className="btn p-2 bg-light me-2"
            ></button>
            <span className="fw-semibold text-light">Ghế chưa chọn</span>
          </div>
        </div>
        <div>
          <table className="table mt-3">
            <thead>
              <tr>
                <td className="text-light fw-bold">Số ghế</td>
                <td className="text-light fw-bold">Giá tiền</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {productsSelectedList.map((item) => {
                return (
                  <tr key={item.soGhe}>
                    <td className="text-warning ">{item.soGhe}</td>
                    <td className="text-warning ">
                      {item.gia.toLocaleString()} VND
                    </td>
                    <td>
                      <button
                        className="btn btn-danger fw-bold"
                        onClick={() => {
                          handleDelete(item);
                        }}
                      >
                        X
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
