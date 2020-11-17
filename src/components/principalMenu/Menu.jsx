import React from 'react'
import { Hidden } from '@material-ui/core';

import MobileMenu from './MobileMenu'
import PCMenu from './PCMenu'


const Menu = () => {
    return (
        <div>
            <PCMenu></PCMenu>
            <Hidden mdUp>
                <MobileMenu></MobileMenu>            
            </Hidden>
        </div>
    )
};

export default Menu;
