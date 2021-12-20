import React from 'react'

// == COMPONENTS
import Burger from './Burger';
import Nav from './Nav';

// == STYLES
import '../../assets/styles/modules/menu.scss';

export default function Menu() {
    return (
        <div className="menu">
            <div className="menu__header">
                <p>LS</p>
                <Burger />
            </div>
            <Nav />
        </div>
    )
}
