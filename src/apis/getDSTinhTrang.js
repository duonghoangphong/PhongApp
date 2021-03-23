//http://phongduong3570-001-site1.gtempurl.com/api/getDSTinhTrang
import Utils from '../app/Utils';
let PREFIX = 'api/getDSTinhTrang';

async function getDSTinhTrang() {
    const res = await Utils.post_apiTokenHeader(PREFIX, 'a');
    return res;
}

export default getDSTinhTrang;
