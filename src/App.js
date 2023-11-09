import './App.css';
import React, { useState } from 'react';
import Game from "./components/Game";
import Result from "./components/Result";
import Start from "./components/Start";
import { gameConst, resultConst, startConst } from "./utils/constants";

function App() {
    const [page, setPage] = useState(startConst);
    const [name, setName] = useState('');
    const [compWins, setCompWins] = useState(0);
    const [playerWins, setPlayerWins] = useState(0);

    const changeData = (newPage, ...args) => {
        setPage(newPage);
        if (args.length === 1) {
            setName(args[0]);
        } else if (args.length === 2) {
            setCompWins(args[0]);
            setPlayerWins(args[1]);
        }
    };

    return (
        <div className={'field'}>
            {page === gameConst && (
                <Game changeData={changeData} name={name} />
            )}
            {page === resultConst && (
                <Result
                    changeData={changeData}
                    compWins={compWins}
                    playerWins={playerWins}
                />
            )}
            {page !== gameConst && page !== resultConst && (
                <Start changeData={changeData} />
            )}
        </div>
    );
}

export default App;
