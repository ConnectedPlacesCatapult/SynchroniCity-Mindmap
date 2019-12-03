export const scrollLock = (section1, section2) => {
    let offset;
    let pageHeight;

    return new Promise((resolve, reject) => {
        const first = document.getElementById(section1).getBoundingClientRect();
        const second = document.getElementById(section2).getBoundingClientRect();
        offset = first.top + second.top;
        pageHeight = window.innerHeight;
        console.log(window.innerHeight);
        resolve(console.log(offset));
    })
    .then(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset < 900) {
                // window.scrollTo(0, window.innerHeight);
            }
            console.log(window.pageYOffset);
        });
    })
}

//FIND BETTER WAY TO STOP SCROLLING