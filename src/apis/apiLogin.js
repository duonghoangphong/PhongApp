import Utils from '../app/Utils';

//http://phongduong3570-001-site1.gtempurl.com/api/DangNhap?taikhoan=admin&matkhau=12345678
let PREFIX = 'api/DangNhap?';

async function apiLogin(taiKhoan = 'admin', matKhau = '123') {
  let temp = `taikhoan=${taiKhoan}&matkhau=${matKhau}`;
  const res = await Utils.post_api(PREFIX + temp, 'no token');
  return res;
}

export default apiLogin;
