import React, { useState, useEffect } from 'react';
import { cards, resultConst } from '../utils/constants';

function Game(props) {
    const [compCard, setCompCard] = useState(cards[0]);
    const [playerCard, setPlayerCard] = useState(cards[0]);
    const [compWins, setCompWins] = useState(0);
    const [playerWins, setPlayerWins] = useState(0);
    const [compCards, setCompCards] = useState([]);
    const [playerCards, setPlayerCards] = useState([]);

    useEffect(() => {
        const deck = [...cards];
        for (let i = deck.length - 1; i > 0; i--) {
            deck.sort(() => Math.random() - 0.5);
        }

        setCompCards(deck.slice(0, deck.length / 2));
        setPlayerCards(deck.slice(deck.length / 2, deck.length));
    }, []);

    const handleClickNext = () => {
        if (compCards.length) {
            const compCard = compCards.pop();
            const playerCard = playerCards.pop();
            if (compCard.value > playerCard.value) setCompWins(compWins + 1);
            else if (compCard.value < playerCard.value) setPlayerWins(playerWins + 1);
            setCompCard(compCard);
            setPlayerCard(playerCard);
        } else {
            props.changeData(resultConst, compWins, playerWins);
        }
    };

    return (
        <div>
            <h1 className={'players computer'}>Computer</h1>
            <div className={'playerDeck'}>
                <img src={compCard.src} alt="Computer Card" />
            </div>
            <div className={'playerDeck'}>
                <img src={playerCard.src} alt="Player Card" />
            </div>
            <h1 className={'players you'}>{props.name}</h1>
            <button className={'inGameButton'} onClick={handleClickNext}>
                Next
            </button>
        </div>
    );
}

export default Game;
