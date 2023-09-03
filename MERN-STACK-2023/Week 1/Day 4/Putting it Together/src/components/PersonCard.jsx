import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age : this.props.age
        };
    }
    add_one = () => this.setState((prevState)=>({age:prevState.age+1}));

    render() {
        return <div>
            <h1>{this.props.firstName}, {this.props.lastName}</h1>
            <p>Age : {this.state.age}</p>
            <p>Hair Color : {this.props.hairColor}</p>
            <button onClick={this.add_one}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
        </div>;
    }
}

export default PersonCard;
