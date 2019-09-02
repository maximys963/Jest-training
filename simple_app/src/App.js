import React, { Component }  from 'react';
import { Button }            from 'antd'
import './App.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        }
    }

    handleIncreaseCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    handleDecreaseCounter = () => {
        this.setState({ counter: this.state.counter - 1 });
    };

    handleEraseCounter = () => {
        this.setState({ counter: 0 });
    };

    render(){
        const { counter } = this.state;
        return(
            <div className='app-container'>
                <h1>
                    Counter Value now is { counter }
                </h1>
                <Button
                    className='app-button'
                    onClick={this.handleIncreaseCounter}
                >
                    Increase counter
                </Button>
                <Button
                    className='app-button'
                    onClick={this.handleDecreaseCounter}
                >
                    Decrease counter
                </Button>
                <Button
                    className='app-button'
                    onClick={this.handleEraseCounter}
                >
                    Erase
                </Button>
            </div>
        )
    }
}

export default App;
