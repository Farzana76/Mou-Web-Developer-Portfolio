import React from 'react';
import vdo from '../../img/vdo.mp4'
import Menu from '../Menu/Menu';

const Header = () => {
    return (
        <div>
            <div>
                <Menu></Menu>
                <video src={vdo} autoPlay="true" loop="true" className="w-100"/>
                
            </div>
        </div>
    );
};

export default Header;