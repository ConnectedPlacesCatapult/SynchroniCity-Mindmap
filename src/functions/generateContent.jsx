import React from 'react';
import { tag0Unique, tagAllUnique } from '../api/spreadsheet';
import Folder from '../components/Folder/Folder';
export let value;
export let id;
export let getId;
let myElement;


const generateContent = {
    tag0: (imgPath) => {
        return new Promise((resolve, reject) => {
            getId = (get) => {console.log(document.getElementById(get))}
            for (let i = 0; i < tag0Unique.length; i++) {
                id = tag0Unique[i].replace(/\s/g, '').toLowerCase();
                myElement = document.getElementById('tag0Container').innerHTML + '<div class="topicDiv" value=' + tag0Unique[i] + ' onclick="console.log(document.getElementById(' + id + '))"><img id=' + id + ' class="folder" src="/static/media/folder_red.90acdd63.png" alt="Topic Icon"/><p class="topic">' + tag0Unique[i] + '<p></div>'
                document.getElementById('tag0Container').innerHTML = myElement;
                // document.getElementById(id).addEventListener("click", () => {getId(id)});
            }

            document.getElementById('topicsHeader').addEventListener("click", () => {console.log('clicked')});

            resolve('resolved');
        }) 
    },

    subtopics: (e) => {
        return new Promise((resolve, reject) => {
            for(let i = 0; i < tagAllUnique.length; i++) {
                document.getElementById('subtopcisContainer').innerHTML = document.getElementById('subtopicsContainer').innerHTML + '<div class="topicDiv"><img class="folder" src="/static/media/folder_red.90acdd63.png" alt="Topic Icon"/><p class="topic">' + tag0Unique[i] + '<p></div>'
            }
            resolve(console.log(e.target.value));
        })
    }
}

export default generateContent;