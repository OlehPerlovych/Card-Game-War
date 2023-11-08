import './App.css';
import React, {Component} from 'react';
import Game from "./components/Game";
import Result from "./components/Result";
import Start from "./components/Start";
import {gameConst, resultConst, startConst} from "./utils/constants";

class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
            {
                page: startConst,
                name: '',
                compWins: 0,
                playerWins: 0
            };
    }

    changeData = (page, ...args) =>
    {
        switch (args.length)
        {
            case 0:
                this.setState({page});
                break;
            case 1:
                this.setState({page, name: args[0]});
                break;
            case 2:
                this.setState({page, compWins: args[0], playerWins: args[1]});
        }
    }

    render()
    {
        switch (this.state.page)
        {
            case gameConst:
                return (
                    <div className={'field'}>
                        <Game changeData={this.changeData} name={this.state.name}/>
                    </div>
                )
            case resultConst:
                return (
                    <div className={'field'}>
                        <Result changeData={this.changeData} compWins={this.state.compWins}
                                playerWins={this.state.playerWins}/>
                    </div>
                )
            default:
                return (
                    <div className={'field'}>
                        <Start changeData={this.changeData}/>
                    </div>
                )
        }
    }
}

export default App;

