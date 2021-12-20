import React from 'react'
import {
    IoPlaySharp,
    IoPauseSharp,
    IoPlayForwardSharp,
    IoPlayBackSharp,
} from "react-icons/io5";

// == STYLES
import '../../assets/styles/modules/player.scss';

export default function Player() {
    return (
        <div className='player'>
            <div className="player__infos">
                <p className="player__song">Rockstar</p>
                <p className="player__artist">Post Malone</p>
            </div>
            <div className="player__bar">
                <input type="range" className="player__range" />
                <div className="player__times">
                    <p className="player__time player__played-time">2:10</p>
                    <p className="player__time player__full-time">-03.56</p>
                </div>
            </div>
            <div className="player__commands">
                <IoPlayBackSharp className='player__previous' />
                <div className="player__play-pause">
                    <div>
                        <IoPlaySharp />
                        {/* <IoPauseSharp /> */}
                    </div>
                </div>
                <IoPlayForwardSharp className='player__next'/>
            </div>
        </div>
    )
}
