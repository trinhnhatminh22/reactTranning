import React, { Component} from 'react';
import '../App.css';

const RED = 0;
const GREEN = 1;
const YELLOW = 2;

class TraficLight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: 0
        };
    }

    componentWillMount() {
        setInterval(() => this.changeColor(),1000);
    }
    print() {
        document.getElementById("text").innerHTML = "Hello";
    }

    changeColor() {
        const currentColor = this.state.currentColor;
        switch (currentColor) {
            case RED:
                this.setState({currentColor : 1});
                return;
            case GREEN:
                this.setState({currentColor : 2});
                return;
            case YELLOW:
                this.setState({currentColor : 0});
                return;
            default:
                break;      
        }
    }

    render() {
        const currentColor = this.state.currentColor;
        return (
        <div>   
         <div className="TrafficLight">
             <div className={`bulb red ${currentColor===GREEN? "active":""}`}/>
             <div className={`bulb green ${currentColor===YELLOW? "active":""}`}/>
             <div className={`bulb yellow ${currentColor===RED? "active":""}`}/>
         </div>
         <div id="text"></div>
         <div><input className="button" type="button" value="Button" onClick={this.print}/></div>
        </div>  
        );
    }
}

export default TraficLight;