const aesthetics = {
    fade: (fadeIn, duration) => {
        return new Promise((resolve, reject) => {
            let page2 = document.getElementById(fadeIn);

            page2.style.opacity = 0;

            page2.style.transitionDuration = duration / 2 + 's';

            return new Promise((resolve, reject) => {
                if (fadeIn === 'topicsSection') {
                    //ADD ALL OTHER SECTIONS TO THIS LIST
                    document.getElementById('resultsSection').style.opacity = 0;
                    document.getElementById('aboutSection').style.opacity = 0;
                    document.getElementById('CTASection').style.opacity = 0;
                    document.getElementById('resultsSection').style.transitionDuration = duration / 2 + 's';
                    document.getElementById('aboutSection').style.transitionDuration = duration / 2 + 's';
                    document.getElementById('CTASection').style.transitionDuration = duration / 2 + 's';

                    setTimeout(() => {
                        resolve(document.getElementById('resultsSection').style.display = 'none');
                        resolve(document.getElementById('aboutSection').style.display = 'none');
                        resolve(document.getElementById('CTASection').style.display = 'none');
                    }, duration * 500);
                }
                else if (fadeIn === 'resultsSection') {
                    //ADD ALL OTHER SECTIONS TO THIS LIST
                    document.getElementById('topicsSection').style.opacity = 0;
                    document.getElementById('aboutSection').style.opacity = 0;
                    document.getElementById('CTASection').style.opacity = 0;
                    document.getElementById('topicsSection').style.transitionDuration = duration / 2 + 's';
                    document.getElementById('aboutSection').style.transitionDuration = duration / 2 + 's';
                    document.getElementById('CTASection').style.transitionDuration = duration / 2 + 's';

                    setTimeout(() => {
                        resolve(document.getElementById('topicsSection').style.display = 'none');
                        resolve(document.getElementById('aboutSection').style.display = 'none');
                        resolve(document.getElementById('CTASection').style.display = 'none');
                    }, duration * 500);
                } 
                else if (fadeIn === 'aboutSection') {
                    document.getElementById('topicsSection').style.opacity = 0;
                    document.getElementById('aboutSection').style.opacity = 0;
                    document.getElementById('CTASection').style.opacity = 0;
                    document.getElementById('topicsSection').style.transitionDuration = duration / 2 + 's';
                    document.getElementById('aboutSection').style.transitionDuration = duration / 2 + 's';
                    document.getElementById('CTASection').style.transitionDuration = duration / 2 + 's';

                    setTimeout(() => {
                        resolve(document.getElementById('topicsSection').style.display = 'none');
                        resolve(document.getElementById('resultsSection').style.display = 'none');
                        resolve(document.getElementById('CTASection').style.display = 'none');
                    }, duration * 500);
                } 
                else if (fadeIn === 'CTASection') {
                    document.getElementById('topicsSection').style.opacity = 0;
                    document.getElementById('aboutSection').style.opacity = 0;
                    document.getElementById('CTASection').style.opacity = 0;
                    document.getElementById('topicsSection').style.transitionDuration = duration / 2 + 's';
                    document.getElementById('aboutSection').style.transitionDuration = duration / 2 + 's';
                    document.getElementById('CTASection').style.transitionDuration = duration / 2 + 's';

                    setTimeout(() => {
                        resolve(document.getElementById('topicsSection').style.display = 'none');
                        resolve(document.getElementById('resultsSection').style.display = 'none');
                        resolve(document.getElementById('aboutSection').style.display = 'none');
                    }, duration * 500);
                } 
                else {
                    console.log(fadeIn);
                }

            }).then(() => {
                if (fadeIn === 'topicsSection') {
                    page2.style.display = 'flex';
                    setTimeout(() => {
                        page2.style.opacity = 1;
                    }, duration * 100);
                } else {
                    page2.style.display = 'block';
                    setTimeout(() => {
                        page2.style.opacity = 1;
                    }, duration * 100);
                }
            });
        });
    },
}

export default aesthetics;