import React from 'react'

export default function Nav() {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className="nav__items"><a href="#" className="nav__link">Home</a></li>
                <li className="nav__items"><a href="#" className="nav__link">Browse</a></li>
                <li className="nav__items"><a href="#" className="nav__link">Moods</a></li>
                <li className="nav__items"><a href="#" className="nav__link">Playlists</a></li>
            </ul>
            <ul className='nav__list'>
                <li className="nav__items"><a href="#" className="nav__link">Profil</a></li>
                <li className="nav__items"><a href="#" className="nav__link">Parameters</a></li>
            </ul>
        </nav>
    )
}
