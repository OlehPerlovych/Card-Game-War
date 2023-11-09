import React, { useState } from 'react';
import { gameConst } from '../utils/constants';

function Start(props) {
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleStartGame = () => {
        props.changeData(gameConst, name);
    };

    return (
        <div className={'playerForm'}>
            <h1 className={'readyForWar'}>Ready for war</h1>
            <input onChange={handleNameChange} type='text' placeholder='Enter your name' className={'playerName'} />
            <button className={'startButton'} onClick={handleStartGame}>
                Start
            </button>
        </div>
    );
}

export default Start;
