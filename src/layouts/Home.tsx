import React from 'react'

// == COMPONENTS
import Header from '../components/Header/Header';
import Player from '../components/Player/Player';

// == STYLES
import '../assets/styles/modules/home.scss';

export default function Home() {
    return (
        <div className='home'>
            <Player />
        </div>
    )
}
