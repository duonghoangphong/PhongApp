import Utils from '../app/Utils';

//http://phongduong3570-001-site1.gtempurl.com/api/getDSNhanVien
let PREFIX = 'api/getDSNhanVien';

async function getDSNhanVien() {
  const res = await Utils.get_apiToken(PREFIX);
  return res;
}

export default getDSNhanVien;
