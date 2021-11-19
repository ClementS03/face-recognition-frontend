import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './logo.css'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt
                className='Tilt br2 shadow-2' tiltMaxAngleX={45}
                tiltMaxAngleY={45}
                style={{ height: '100px', width: '100px' }}>
                <div className='Tilt-inner pa3'>
                    <img style={{ paddingTop: '5px' }} src={brain} alt="logo" />
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;