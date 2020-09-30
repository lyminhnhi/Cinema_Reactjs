import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { NavLink } from "react-router-dom";

export class CardMovies extends Component {
  
  static propTypes = {
    DanhSachPhim: PropTypes.object
  };
  
  render() {
    const { DanhSachPhim } = this.props;
    return (
      <div className="cardmovie">
        <div className="cardmovie__img">
          <img src={DanhSachPhim.hinhAnh} alt="movie" />
        </div>
        <div className="cardmovie__infor">
          <div>
            <NavLink className="btn_readmore btn" to={`/chitietphim/${this.props.DanhSachPhim.maPhim}`}>Read More</NavLink>
            <button
              className="btn_trailer btn"
              data-toggle="modal"
              data-target="#modaltrailer"
            >
              Trailer
            </button>
          </div>
        </div>
        <div className="cardmovie_service">
          <h5>{DanhSachPhim.tenPhim}</h5>
        </div>
      </div>
    );
  }
}


export default (CardMovies);