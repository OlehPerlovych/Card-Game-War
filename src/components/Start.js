import React, {Component} from 'react';
import {gameConst} from "../utils/constants";


class Start extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {name: ''};
    }

    render()
    {
        return (
            <div className={'playerForm'}>
                <h1 className={'readyForWar'}>Ready for war</h1>
                <input onChange={e => this.setState({name: e.target.value})} type='text'
                       placeholder='Enter your name' className={'playerName'}/>
                <button className={'startButton'} onClick={() => this.props.changeData(gameConst, this.state.name)}>
                    Start
                </button>
            </div>
        )
    }
}

export default Start;
