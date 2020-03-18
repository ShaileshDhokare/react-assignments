import React, { Component } from 'react';
import Element from './Element'

class Table extends Component {
   state = {
      elements: Array(9).fill(null),
      isNext: true,
      winner: ''
   }
   onClick = (i) => {
      if (this.state.winner === '') {
         let {elements, isNext} = this.state;
         elements = this.state.elements.slice();
         let NewValue = isNext ? 'X' : '0';
         if(!elements[i]){
            elements[i] = NewValue;
            this.setState({elements:elements, isNext: !isNext}, () => {
               this.checkForWinner();
            });
         }
      }else{
         alert('Game is Over!!');
      }
      
   }

   resetState = () => {
      this.setState({elements: Array(9).fill(null), winner: ''})
   }

   checkForWinner = () => {
      let {elements} = this.state;
      const lines = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
         const [a, b, c] = lines[i];
         if (elements[a] && elements[a] === elements[b] && elements[a] === elements[c]) {
            this.setState({winner: elements[a]});
            console.log(elements[a]);
            return elements[a];
         }
      }
      return null;
   }

   render() {
      let {elements} = this.state;
      elements = elements.slice();
      return (
         <div className="text-center">
            <h5>Winner is: {this.state.winner}</h5>
            <div className="row my-4 w-50 h-50" style={{marginLeft: '25%'}}>
               {elements.map((value, index) => (
                  <Element key={index} value={value} onClick={this.onClick.bind(this, index)}/>
               ))}
            </div>
            <button className="btn btn-info" onClick={this.resetState}>Reset</button>
         </div>
      )
   }
}

export default Table;
