import './style.scss';
import moment from 'moment'

import React, { useEffect, useState } from 'react'
import { movieService } from '../Service_Hook/index';
import Axios from 'axios';

export default function Booking(props) {

    let [lstBookingTicket, setlstBookingTicket] = useState({});

    let [danhSachGheDangDat, setDanhSachGheDangDat] = useState([])

    useEffect(() => {
        movieService.fetchBookingTicket(props.match.params.Id)
            .then(res => {

                setlstBookingTicket(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [JSON.stringify(lstBookingTicket)])

    let datGhe = (ghe) => {

        let danhSachGheDangDatUpdate = [...danhSachGheDangDat];
        let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);
        if (index != -1) {
            danhSachGheDangDatUpdate.splice(index, 1);
        } else {
            danhSachGheDangDatUpdate.push(ghe);
        }
        setDanhSachGheDangDat(danhSachGheDangDatUpdate)
    }

    const datVe = () => {

        let taiKhoan = JSON.parse(localStorage.getItem('userLogin')).taiKhoan;

        let objectDatVe = {
            "maLichChieu": props.match.params.Id,
            "danhSachVe": danhSachGheDangDat,
            "taiKhoanNguoiDung": taiKhoan
        }


        Axios({
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
            method: 'POST',
            data: objectDatVe,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err.response.data);
        })

    }

    return (
        <section className="seatList">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-8 col-xl-8 seatList_detail">
                        <div className="screen col-12"></div>
                        <table style={{ width: '700px', margin: 'auto' }}>
                            <tr>
                                <td>A</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(0, 16).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(ghe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>B</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(16, 32).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(ghe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(32, 48).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(ghe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(48, 64).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(ghe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(64, 80).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(ghe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>
                                    {
                                        lstBookingTicket.danhSachGhe?.slice(80, 96).map((ghe, index) => {

                                            let classGheVip = ghe.loaiGhe === 'Vip' ? 'seatVip' : '';



                                            let indexGhe = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.stt === ghe.stt);

                                            let classGheDangDat = indexGhe !== -1 ? 'seatSelect' : '';

                                            return ghe.daDat ? <button key={index} className=" seatBooking">
                                                X </button>
                                                :
                                                <button key={index} onClick={() => { datGhe(ghe) }} className={` seat ${classGheDangDat}  ${classGheVip} `}>
                                                    {ghe.stt}
                                                </button>
                                        })
                                    }
                                </td>
                            </tr>
                        </table>
                    </div>
                    
                    <div className="col-md-12 col-lg-4 contentRight">
                        <div className="card">
                            <div className="card-header totalCost">
                                85.000 đ </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="text_Form_Title">Tên phim : </div>
                                        </div>
                                        <div className="col pl-0">


                                            <div className="text_Normal">
                                                {
                                                    Object.entries(lstBookingTicket).map(([index, item]) => {
                                                        return (
                                                            item.tenPhim
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="text_Form_Title">Cụm rạp : </div>
                                        </div>
                                        <div className="col pl-0">
                                            <div className="text_Normal">
                                                {
                                                    Object.entries(lstBookingTicket).map(([index, item]) => {
                                                        return (
                                                            item.tenCumRap
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="text_Form_Title">Ghế</div>
                                        </div>
                                        <div className="col pl-0">
                                            {
                                                console.log(danhSachGheDangDat)
                                            }
                                            <span className="text_Orange mr-2">A01 - <span className="text_Green">75.000</span></span>
                                            <span className="text_Orange mr-2">A01 - <span className="text_Green">75.000</span></span>
                                            <span className="text_Orange mr-2">A01 - <span className="text_Green">75.000</span></span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="text_Form_Title">Rạp : </div>
                                        </div>
                                        <div className="col pl-0">
                                            <div className="text_Normal">
                                                {
                                                    Object.entries(lstBookingTicket).map(([index, item]) => {
                                                        return (item.tenRap)
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col-5">
                                            <div className="text_Form_Title">Ngày chiếu : và giờ chiếu </div>
                                        </div>
                                        <div className="col pl-0">
                                            {
                                                Object.entries(lstBookingTicket).slice(0, 1).map(([index, item]) => {
                                                    return (
                                                        <div className="text_Normal">{moment(item.ngayChieuGioChieu).format('DD.MM')} ~ <span className="text_Orange">{moment(item.ngayChieuGioChieu).format('hh:mm a')}</span></div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="card-foot">
                                <button onClick={() => { datVe() }} className="button_Form bookingEdit">Đặt Vé</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

