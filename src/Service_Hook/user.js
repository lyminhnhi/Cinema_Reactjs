import Axios from 'axios';
import * as yup from 'yup';

export const signupUserSchema = yup.object().shape({
    taiKhoan: yup
        .string()
        .required("* Tài khoản không được rỗng !"),
    matKhau: yup
        .string()
        .required("* Mật khẩu không được rỗng !")
        .min(8, 'Mật khẩu ít nhất 8 kí tự'),
    hoTen: yup
        .string()
        .required("* Họ tên không được rỗng !")
        .min(5, 'Họ tên phải lớn hơn 5 kí tự')
        .max(10, 'HỌ tên phải nhỏ hơn 10 kí tự'),
    email: yup
        .string()
        .required("* Tài khoản không được rỗng !")
        .email("* Email không hợp lệ"),
    soDt: yup
        .string()
        .matches(/^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/, "Số điện thoại không hợp lệ"),
    maNhom: yup
        .string()
        .required("* Mã nhóm không để trống ")
})



class UserService {
    signUp(data) {
        return Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data
        })
    }

    signIn(user) {
        return Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: user
        })
    }
}

export default UserService;