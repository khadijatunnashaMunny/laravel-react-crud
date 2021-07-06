
import React, { Component } from 'react';
 import ReactDOM from 'react-dom';


class Counter extends Component {
    state={
        counter:0,
    };
    incrementcounter= () => {
        let counternew = this.state.counter +1 ;
        this.setState ({
            counter:counternew,
        });
    };
    decrementcounter= (value) => {
        let counternew = this.state.counter -value ;
        this.setState ({
            counter:counternew,
        });
    };

    render (){

        return (
        <div className="container mt-10">
            <h3> count : {this.state.counter}</h3>
            <p>
                <button className="btn btn-success btn-lg mr-2"
                onClick={this.incrementcounter} >
                    +
                </button>
           
         
                <button className="btn btn-danger btn-lg "
                onClick={() => this.decrementcounter(1)} >
                    -
                </button>

            </p>
        </div>);

      
    };
}

export default Counter;

if (document.getElementById('counter')) {
    ReactDOM.render(<Counter />, document.getElementById('counter'));
}
