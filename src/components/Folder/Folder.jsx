import React from 'react';
import './Folder.css';

const Folder = () => {
    return(
        <div id="folderContainer">
            <img className="folder" src={require("../../images/folder_red.png")} alt="Folder Icon" />
        </div>
    )
}

export default Folder;