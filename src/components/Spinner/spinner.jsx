import React from 'react';
import SpinnerIcon from './spinnerIcon';
import './spinner.css';

export const Spinner = (props) => {
    const showSpinner = () => {
        document.getElementById('spinner').style.display = 'block';
    setTimeout(() => {document.getElementById('spinner').style.opacity = 1;}, 100);
    }
    
    const hideSpinner = () => {

    }

    return (
        <div id="spinner">
            <SpinnerIcon />
        </div>
    )
}

export default Spinner;
