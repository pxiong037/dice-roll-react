import React, {Component} from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component{
    constructor(props){
        super(props);
        this.state = {
            rolling: false,
            dice: this.generateDice(this.props.numOfDice)
        }
        this.roll = this.roll.bind(this);
        this.rolling = this.rolling.bind(this);
    }

    static defaultProps = {
        numOfDice: 2,
        faces: ['one','two','three','four','five','six']
    };

    generateDice(num){
        let array = [];
        for(let i=0; i< num; i++){
            array[i] = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
        }
        return array;
    }

    roll(e){
        this.setState({
            rolling: true,
            dice: this.generateDice(this.props.numOfDice)
        })

        setTimeout(this.rolling, 1000);
    }

    rolling(){
        this.setState({rolling: false});
    }



    render(){
        return(
            <div className="RollDice">
                <div className="Dice">
                    {this.state.dice.map((dieFace,index) => <Die key={index} face={dieFace} rolling={this.state.rolling}/>)}
                </div>
                <button disabled={this.state.rolling} onClick={this.roll}>{this.state.rolling ? 'Rolling...' : 'Roll Dice!'}</button>
            </div>
        );
    }
}

export default RollDice;