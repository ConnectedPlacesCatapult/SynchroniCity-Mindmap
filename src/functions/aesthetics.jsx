const aesthetics = {
    fade: (fadeOut, fadeIn, duration) => {
        return new Promise((resolve, reject) => {
            let page1 = document.getElementById(fadeOut);
            let page2 = document.getElementById(fadeIn);
            // page2.hidden = true;
            page1.style.transitionDuration = duration + 's'; 
            page2.style.transitionDuration = duration + 's';

            return new Promise((resolve, reject) => {
                page1.style.opacity = 0;
                setTimeout(() => {
                    resolve('resolved');
                }, duration * 250);
                setTimeout(() => {
                    page1.hidden = true;
                }, duration * 1000);
            }).then(() => {
                page2.hidden = false;
                page2.style.opacity = 0;
                setTimeout(() => {
                    page2.style.opacity = 1;
                }, duration * 100);
            });
        });
    },
}

export default aesthetics;