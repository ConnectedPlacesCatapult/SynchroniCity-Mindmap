import Tabletop from 'tabletop';

export const apiCall = () => {
    return new Promise((resolve, reject) => {
        Tabletop.init({
            key: '1nogRbK3sIbF0T2bUPar9YLqvKPUWwFaSk5jk_hGBq-g',
            callback: googleData => {
                console.log('google sheet data --->', googleData)
            },
            simpleSheet: true
        })
    });
}