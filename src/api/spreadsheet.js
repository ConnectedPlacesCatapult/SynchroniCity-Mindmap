import Tabletop from 'tabletop';

export let rows;
export let tag0Unique;
export let tagAllUnique;

export const getTag0 = () => {

    return new Promise((resolve, reject) => {
        Tabletop.init({
            key: '1nogRbK3sIbF0T2bUPar9YLqvKPUWwFaSk5jk_hGBq-g',
            callback: googleData => {
                // all data stored in data
                var data = googleData['standards-datastore'];
                // console.log('data --->', data);

                // rows stored in rows
                rows = data['elements'];
                var tag0Array = []
                for (let step = 0; step < Object.keys(rows).length; step++) {
                    var tag0 = rows[step]['tag0'];
                    tag0Array.push(tag0)
                    }
                resolve(tag0Unique = Array.from(new Set(tag0Array)));
                // console.log(tag0Unique);
            },
        });
    });
    
}


export const getTags = (rows, tag0) => {
    return new Promise((resolve, reject) => {
        var tagAll = []
        var filteredStandards = []
        for (let step = 0; step < Object.keys(rows).length; step++) {
            if (rows[step]['tag0'] === tag0) {
                tagAll.push(rows[step]['tag1']);
                tagAll.push(rows[step]['tag2']);
                tagAll.push(rows[step]['tag3']);
                tagAll.push(rows[step]['tag4']);
                tagAll.push(rows[step]['tag5']);
                tagAll.push(rows[step]['tag6']);
                tagAll.push(rows[step]['tag7']);
                filteredStandards.push(rows[step]);
                }
            }
        resolve(tagAllUnique = Array.from(new Set(tagAll.filter(function (el) {
            return el !== "";
            }))));
            console.log(filteredStandards); 
    });
}
