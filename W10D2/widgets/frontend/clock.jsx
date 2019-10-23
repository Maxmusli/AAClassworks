import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newDate: new Date()
        };
        this.tick = this.tick.bind(this)
        
    }

    componentDidMount() {
        this.IntervalId = setInterval(this.tick, 1000) 
    }

    componentWillUnmount() {
        clearInterval(this.IntervalId)
    }

    tick() {
        this.setState({newDate: new Date()})
    }

    render() {
        return (
            <div>
                <header><h1>Clock</h1></header>
                <div id="time"> 
                    <div className="time">
                        <h2>Time:</h2>
                        <h2>{this.state.newDate.getHours()}:{this.state.newDate.getMinutes()}:{this.state.newDate.getSeconds()}</h2>
                    </div>
                    <div className="date">
                        <h2>Date:</h2>
                        <h2>{this.state.newDate.getMonth() + 1}/{this.state.newDate.getDate()}/{this.state.newDate.getFullYear()}</h2>
                    </div>
                </div>
            </div>
        )
    }
}


export default Clock;