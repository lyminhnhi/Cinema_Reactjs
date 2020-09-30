import React, { Component } from 'react';
import './style.scss';
import PropTypes from "prop-types";
import { danhsachDoiTac } from "../../Constant/index"



class Footer extends Component {

    static propTypes = {
        danhsachDoiTac: PropTypes.array
    };

    render() {

        const { danhsachDoiTac } = this.props;

        return (
            <footer>
                <div className="container">
                    <div className='footer-top mb-5'>

                        <div className="heading pl-0">
                        <h5>Business</h5>
                        </div>

                        <div className='mb-4'>
                            <div className=" content doitac">
                                {danhsachDoiTac.map((item, index) => (
                                    <div className="footer-doitac" key={index}>
                                        <img src={item.logo} alt={item.biDanh} />
                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="heading pl-0">
                            <h5>Mobile App</h5>
                        </div>
                        <div className=' mb-4'>

                            <div className=" content app">
                                <div className="footer-appitem">
                                    <i className="fab fa-android"></i>
                                </div>
                                <div className="footer-appitem">
                                    <i className="fab fa-apple"></i>
                                </div>
                            </div>

                        </div>
                        <div className=''>
                            <div className="heading">
                                <h5>Social</h5>
                            </div>
                            <div className="content social">
                                <div className='footer-socialitem'>
                                    <i className="fab fa-facebook-f"></i>

                                </div>
                                <div className='footer-socialitem'>
                                    <i className="fab fa-youtube"></i>

                                </div>
                                <div className='footer-socialitem'>
                                    <i className="fab fa-twitter"></i>

                                </div>
                                <div className='footer-socialitem'>
                                    <i className="fab fa-instagram"></i>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-botoom '>
                        <p>Dự Án Website Xem Phim (React)</p>
                        <span>Tác giả:
                            <a href='https://www.facebook.com/ly.minh.nhi.leo' target="_blank" rel="noopener noreferrer">Lý Minh Nhi</a>
                            <a href='https://cybersoft.edu.vn/' target="_blank" rel="noopener noreferrer">Cybersoft</a>
                        </span>
                        <span>Dự án có tham khảo từ Web:
                            <a href='https://tix.vn/' target="_blank" rel="noopener noreferrer"  >Tix.vn </a>
                        </span>
                    </div>
                </div>
            </footer>
        );
    }
}

Footer.defaultProps = {
    danhsachDoiTac
};

export default Footer;