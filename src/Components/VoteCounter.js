import React, { Component, PropTypes } from 'react';

class VoteCounter extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    var text = this.props.count.toString() + " 👍";
    return (
			<div className="voteCounter">
				{text}
			</div>
    );
  }
}

export default VoteCounter;
