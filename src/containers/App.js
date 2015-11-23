import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (<div> Hello From React-Boilerplate </div>);
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
