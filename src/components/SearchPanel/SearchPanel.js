import React, { Component } from 'react';
import './style.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
    this.props.onSearchTermChange(e.target.value);
  }

  render() {
    return (
      <div className="input-header">
        <input
          className="input-header input-group mb-3"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default SearchPanel;
