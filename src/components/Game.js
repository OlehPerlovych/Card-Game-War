import React, {Component} from 'react';
import {cards, resultConst} from "../utils/constants";

class Game extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
            {
                compCard: cards[0],
                playerCard: cards[0]
            };
        this.compWins = 0;
        this.playerWins = 0;
        this.compCards = [];
        this.playerCards = [];
    }

    componentDidMount()
    {
        const deck = [...cards];
        for (let i = deck.length - 1; i > 0; i--)
        {
            deck.sort(() => Math.random() - 0.5);
        }
        this.compCards = deck.slice(0, deck.length / 2);
        this.playerCards = deck.slice(deck.length / 2, deck.length);
        this.handleClickNext();
    }

    handleClickNext = () =>
    {
        if (this.compCards.length)
        {
            const compCard = this.compCards.pop();
            const playerCard = this.playerCards.pop();
            if (compCard.value > playerCard.value)
                this.compWins++;
            else if (compCard.value < playerCard.value)
                this.playerWins++;
            this.setState({compCard, playerCard})
        } else
            this.props.changeData(resultConst, this.compWins, this.playerWins)
    }

    render()
    {
        return (<div>
            <h1 className={'players computer'}>Computer</h1>
            <div className={'playerDeck'}>
                <img src={this.state.compCard.src}/>
            </div>
            <div className={'playerDeck'}>
                <img src={this.state.playerCard.src}/>
            </div>
            <h1 className={'players you'}>{this.props.name}</h1>
            <button className={'ingameButton'} onClick={this.handleClickNext}>Next</button>
        </div>)
    }
}

export default Game;
