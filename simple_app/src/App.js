import React, { Component }  from 'react';
import {
    Button,
    Modal
} from 'antd'
import './App.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            counter : 0,
            visible: false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { counter } = this.state;
        if(counter < 0) this.validateCounterValue();
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleIncreaseCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    handleDecreaseCounter = () => {
        this.setState({ counter: this.state.counter - 1 });
    };

    handleEraseCounter = () => {
        this.setState({ counter: 0 });
    };

    validateCounterValue = () => {
        const { counter } = this.state;
        if(counter < 0 ) {
            this.setState({ counter: 0 });
            this.showModal();
        }
    };

    render(){
        const {
            counter,
            visible
        } = this.state;

        return(
            <div className='app-container' data-test="something">
                <h1 className='counter-display'>
                    Counter Value now is { counter }
                </h1>
                <Button
                    className='increase-btn'
                    onClick={this.handleIncreaseCounter}
                >
                    Increase counter
                </Button>
                <Button
                    className='decrease-btn'
                    onClick={this.handleDecreaseCounter}
                >
                    Decrease counter
                </Button>
                <Button
                    className='erase-btn'
                    onClick={this.handleEraseCounter}
                >
                    Erase
                </Button>
                <Modal
                    title="Error"
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Counter can't be lower then 0</p>
                </Modal>
            </div>
        )
    }
}

export default App;
