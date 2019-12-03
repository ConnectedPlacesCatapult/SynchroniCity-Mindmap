const GoogleSpreadsheet = require('google-spreadsheet');
const { promisify } = require('util');
const creds = require('./standards.json');

// the function retrieves a google spreadsheet row as an object with keys set by the column headers
export const accessSpreadsheet = async () => {
    const doc = new GoogleSpreadsheet('1nogRbK3sIbF0T2bUPar9YLqvKPUWwFaSk5jk_hGBq-g');
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets;

    // const rows = await promisify(sheet.getRows)({
    //     offset: 1
    // });
    // console.log(rows);
}