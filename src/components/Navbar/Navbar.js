import aesthetics from '../../functions/aesthetics';
import { filteredSubStandards } from '../../api/spreadsheet';

export const navigate = {
    about: () => {
        document.getElementById('navAbout').classList.add('active');
        document.getElementById('navGI').classList.remove('active');
        document.getElementById('navTopic').classList.remove('active');
        document.getElementById('navSubtopic').classList.remove('active');

        aesthetics.fade('aboutSection', 1);
    },
    gi: () => {
        document.getElementById('navGI').classList.add('active');
        document.getElementById('navAbout').classList.remove('active');
        document.getElementById('navTopic').classList.remove('active');
        document.getElementById('navSubtopic').classList.remove('active');

        aesthetics.fade('CTASection', 1);
    },
    topic: () => {
        document.getElementById('navTopic').classList.add('active');
        document.getElementById('navAbout').classList.remove('active');
        document.getElementById('navGI').classList.remove('active');
        document.getElementById('navSubtopic').classList.remove('active');

        aesthetics.fade('topicsSection', 1);
    },
    subtopic: () => {
        document.getElementById('navSubtopic').classList.add('active');
        document.getElementById('navAbout').classList.remove('active');
        document.getElementById('navGI').classList.remove('active');
        document.getElementById('navTopic').classList.remove('active');

        aesthetics.fade('resultsSection', 1);
    }
}