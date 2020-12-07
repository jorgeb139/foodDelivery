import React from 'react'
import { Hidden } from '@material-ui/core';

import MobileMenu from './MobileMenu'
import PCMenu from './PCMenu'


const Menu = () => {
    return (
        <div>
            <Hidden smDown>
                <PCMenu/>
            </Hidden>
            <Hidden mdUp>
                <MobileMenu/>            
            </Hidden>
        </div>
    )
};

export default Menu;
