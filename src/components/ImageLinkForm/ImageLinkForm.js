import React from 'react';
import './imageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Brain Will Detect Faces In Your Pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input
                        className='f4 pa2 center w-70'
                        type="text"
                        onChange={onInputChange} />
                    <button
                        className='w-30 grow f4 link ph3 pv2 white bg-light-purple center'
                        onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
};

export default ImageLinkForm;