import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';
import { getMovies_async, showMovies } from '../../Redux/Action_Redux/Action_Movie';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardMovies from './Item_Movie/index';


export class SlideMovie extends Component {
    constructor(props) {
        super()
        this.state = {
            phimDangchieu: true,
            phimSapchieu: false,
            DanhSachPhim: [],
        }
    }

    static propTypes = {
        getMovies: PropTypes.func,
        DanhSachPhim: PropTypes.array,
        showMovies: PropTypes.func,
        phimDangchieu: PropTypes.bool,
        phimSapchieu: PropTypes.bool
    }

    componentDidMount() {
        this.props.getMovies();
    }

    changeShow = (check) => {
        if (check === 1) {
            this.setState({
                phimDangchieu: false,
                phimSapchieu: true,
            })
        }
        else {
            this.setState({
                phimDangchieu: true,
                phimSapchieu: false,
            })
        }
        this.props.showMovies(check)
    }

    render() {

        const { DanhSachPhim } = this.props

        const { phimDangchieu, phimSapchieu } = this.state;

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3,
        };

        return (
            <div id='show_movies'>

                <div className='show_movies'>

                    <div className='movies-nav'>
                        <p onClick={() => this.changeShow(0)}
                            className={phimDangchieu ? 'actives' : ''}

                        >Đang Chiếu</p>
                        <p
                            onClick={() => this.changeShow(1)}
                            className={phimSapchieu ? 'actives' : ''}

                        >Sắp Chiếu</p>
                    </div>

                    <Slider {...settings}>
                        {DanhSachPhim.map((item, index) => <CardMovies DanhSachPhim={item} key={index} />)}
                    </Slider>



                </div>


            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        DanhSachPhim: state.moviesReducers.moviesShow,
        DanhSachPhim_ChuaBiet: state.moviesReducers.movies,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovies: () => dispatch(getMovies_async()),
        showMovies: check => dispatch(showMovies(check))
    }
}

SlideMovie.defaultProps = {
    DanhSachPhim: []
}


export default connect(mapStateToProps, mapDispatchToProps)(SlideMovie)