import React from 'react';
import { tag0Unique } from '../api/spreadsheet';
import Folder from '../components/Folder/Folder';


const generateContent = {
    tag0: (imgPath) => {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < tag0Unique.length; i++) {
                document.getElementById('tag0Container').innerHTML = document.getElementById('tag0Container').innerHTML + '<div class="topicDiv"><img className="folder" src="./src/images/folder_red.png" alt="Topic Icon"/><p class="topic">' + tag0Unique[i] + '<p></div>'
            }
        }) 
    }
}

export default generateContent;