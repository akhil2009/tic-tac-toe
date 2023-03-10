import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class Square extends React.Component {  
    render() {
      return (
        <button className="square" onClick={()=>this.props.onClick()} >
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props)
    {
      super(props);
      this.renderSquare=this.renderSquare.bind(this);
      this.state={squares:Array(9).fill(null),
      xstate:true
    };
      this.handleclick=this.handleclick.bind(this);
    }
    handleclick(i){
      //console.log('click')
      const square=this.state.squares.slice();
      // if (calculateWinner(square) || square[i]) {
      //   return;
      // }
      square[i]=this.state.xstate ? 'X':'O';
      this.setState({squares:square,xstate:!this.state.xstate});
    }
    
    renderSquare(i) {
      return <Square value={this.state.squares[i]} onClick={()=>this.handleclick(i)}/>;
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
     
    } else {
      status = 'Next player: ' + (this.state.xstate ? 'X' : 'O');
    }
      
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  function calculateWinner(squares) {
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  
