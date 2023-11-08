import React from 'react';
import {gameConst} from "../utils/constants";

const Result = ({playerWins, compWins, changeData}) =>
{
    const getResult = () =>
    {
        if (playerWins > compWins)
            return 'WIN';
        if (playerWins < compWins)
            return 'LOSE';
        return 'DRAW';
    }
    return (
        <div className={'playerForm'}>
            <h1 className={'readyForWar'}>{getResult()}</h1>
            <h2 className={'readyForWar small'}>{playerWins} - {compWins}</h2>
            <button className={'startButton'} onClick={() => changeData(gameConst)}>Again</button>
        </div>
    )
}

export default Result;
