import React, { Component, PropTypes } from 'react';

// Components
import PersonImage from './PersonImage';
import PersonName from './PersonName';
import Bubble from './Bubble.js';
import VoteCounter from './VoteCounter';

class Person extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
    	oneup: false,
      flipping: false
    };
  }

  handleClick() {
    this.props.data.count += 1;
  	!this.state.oneup && this.setState({oneup: true});
  	setTimeout(() => {
      this.state.oneup && this.setState({oneup: false});
      this.props.next(this.props.index);
  	}, 1200);
  }

  render() {
    var {oneup, flipping} = this.state;
    return (
    	<div className="person" onClick={this.handleClick.bind(this)}>
    		<Bubble visible={oneup} text="👍" />
    		<PersonImage flipping={this.props.shouldFlip} image={this.props.data.image}/>
    		<PersonName name={this.props.data.name}/>
        <VoteCounter count={this.props.data.count}/>
    	</div>
    );
  }
}

export default Person;
