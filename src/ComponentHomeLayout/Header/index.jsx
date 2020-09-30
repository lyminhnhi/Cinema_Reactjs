import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import PropTypes from "prop-types";



class Header extends Component {

    render() {
        return (
            <header>
                <div className="row header_container p-3">

                    <NavLink className="col-3 header_logo" to="/">
                        <img src="/img/Logo.png" alt="logo" />
                    </NavLink>

                    <div className="col-6 header_items">
                        <p >Lịch Chiếu</p>
                        <p >Cụm Rạp</p>
                        <NavLink className="header_link" to="/dangnhap" activeStyle={{ color: 'orange' }}>Đăng Nhập</NavLink>
                        <NavLink className="header_link" to="/dangky" activeStyle={{ color: 'orange' }}>Đăng Ký</NavLink>
                    </div>

                    <div className="col-3 header_loging">
                        <div className="loging">
                            <img src="https://123phim.vn/app/assets/img/icons/web-logo.png" />
                            <div className='loging_dropdown'>
                                <p>Thông Tin Cá Nhân</p>
                            </div>
                        </div>
                    </div>
                </div>


            </header>
        );
    }
}

export default Header;