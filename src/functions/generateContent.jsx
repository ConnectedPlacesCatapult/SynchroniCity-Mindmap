import React from 'react';
import { tag0Unique, tagAllUnique, filteredSubStandards, rows, getTags, filteredStandards } from '../api/spreadsheet';
import Folder from '../components/Folder/Folder';
export let value;
export let getId;
export let id;
export let idArray = [];
export let standard;
export let subtopic;
let myElement;


const generateContent = {
    tag0: (imgPath) => {
        return new Promise((resolve, reject) => {
            getId = (get) => {console.log(get)}
            for (let i = 0; i < tag0Unique.length; i++) {
                idArray.push(tag0Unique[i]);

                myElement = document.getElementById('tag0Container').innerHTML + '<div class="topicDiv"><img class="folder" src="/static/media/folder_red.90acdd63.png" alt="Topic Icon"/><p class="topic">' + tag0Unique[i] + '<p></div>'
                document.getElementById('tag0Container').innerHTML = myElement;
            }
            document.getElementById('topicsHeader').addEventListener("click", () => {console.log('clicked')});

            resolve('resolved');
        });
    },

    subtopics: () => {
        return new Promise((resolve, reject) => {
            for(let i = 0; i < tagAllUnique.length; i++) {
                document.getElementById('subtopicsContainer').innerHTML = document.getElementById('subtopicsContainer').innerHTML + '<div class="topicDiv"><img class="folder" src="/static/media/folder_red.90acdd63.png" alt="Topic Icon"/><p class="topic">' + tagAllUnique[i] + '<p></div>'
            }
            resolve(console.log());
        })
    },

    // standards: (e) => {
    //     return new Promise((resolve, reject) => {
    //         let standardName = filteredSubStandards[0].serial;

    //         for(let i = 0; i < filteredSubStandards.length; i++) {
    //             if(standardName === filteredSubStandards[i].serial) {
    //                 resolve(standard = filteredSubStandards[i]);
    //                 console.log(standard);
    //             } else if (i === filteredSubStandards.length) {
    //                 reject(console.log('error'));
    //             }
    //         }
    //     })
    // },

    assignId: () => {
        for(let i = 0; i < idArray.length; i++) {
            document.querySelector('.topicDiv:nth-child(' + (i + 1) +')').id = idArray[i];
            document.querySelector('.topicDiv:nth-child(' + (i + 1) +')').onclick = () => {subtopic = idArray[i]; console.log(subtopic); getTags(rows, subtopic)};
        }
        
        
    },

    results: () => {
        
    }
}

export default generateContent;