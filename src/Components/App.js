import React, { Component } from 'react';
import logo from '../logo.svg';

// Components
import Person from './Person';

// Some sample data for person
var people = [
  {
    name: 'Aishwarya Rai',
    image: './images/aishwarya.jpg',
    count: 0
  },
  {
    name: 'Kate Upton',
    image: './images/kate.jpg',
    count: 0
  },
  {
    name: 'Jennifer Lawrence',
    image: './images/jennifer.jpg',
    count: 0
  },
  {
    name: 'Emilia Clarke',
    image: './images/emilia.jpg',
    count: 0
  },
  {
    name: 'Keira Knightley',
    image: './images/keira.jpg',
    count: 0
  },
  {
    name: 'Scarlett Johansson',
    image: './images/scarlett.jpg',
    count: 0
  },
  {
    name: 'Emma Stone',
    image: './images/emmastone.jpg',
    count: 0
  },
  {
    name: 'Emma Watson',
    image: './images/emmawatson.jpg',
    count: 0
  }
];


class App extends Component {

  constructor(props) {
    super(props);
    this.data = people;
    this.state = {
      current: [4, 5],
      toFlip: -1
    };
  }

  nextPeople(chosenIndex) {
    this.setState({
      toFlip: chosenIndex === 0 ? 1 : 0,
      current: this.getNextPeople(this.state.current, chosenIndex, this.data.length - 1)
    });

    setTimeout(() => {
      this.setState({
        toFlip: -1
      });
    }, 550);
  }

  getNextPeople(current, chosenIndex, limit) {
    var random,
      result = Array(2),
      insertionIndex = chosenIndex === 0 ? 1 : 0;

    result[chosenIndex] = current[chosenIndex];

    while(true) {
      random = randomInRange();
      if(!~(current.indexOf(random))) {
        result[insertionIndex] = random;
        return result;
      }
    }

    function randomInRange() {
      return Math.floor( Math.random() * ( 1 + limit - 0 ) ) + 0;
    }
  }

  render() {
    var {current, toFlip} = this.state;
    return (
      <div className="Home">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Facemash</h1>
        </header>
        <div className="App">
          <div className="separator">or</div>
          {
            current.map((_, index) => {
              return (<Person
                index={index}
                data={this.data[current[index]]}
                next={this.nextPeople.bind(this)}
                shouldFlip={index === toFlip}
              />);
            })
          }
        </div>
        <footer className="Footer">
          <div>
              <p>Designed by Mark Zuckerberg @ Harvard Dorm</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
