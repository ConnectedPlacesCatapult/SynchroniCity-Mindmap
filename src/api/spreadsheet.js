import Tabletop from 'tabletop';

export const apiCall = () => {
    return new Promise((resolve, reject) => {
        Tabletop.init({
            key: '1Bh5AV7LwiiWOlK6G-kVDX8YiWJNEyLrrYU6WEYnb_lg',
            callback: googleData => {
                console.log('google sheet data --->', googleData)
            },
            simpleSheet: true
        })
    });
}