import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            date: new Date(),
            intervalId: undefined
         };
         console.log('constructor')
    }
    componentDidMount = () => {
        const setDate = () => this.setState({
            date: new Date(),
            intervalId: interval
        });
        const interval = setInterval(setDate, 1000);
        console.log('didMount')
    }

    componentDidUpdate = () => {
        console.log('new change');
    }
    
    componentWillUnmount = () => {
        clearInterval(this.state.intervalId);
    }
    


    render(){
        console.log(this.state.intervalId);
        return (
            <div>
                Hello World
                {this.state.date.getSeconds()}
            </div>
        );
    }
};

export default App;
