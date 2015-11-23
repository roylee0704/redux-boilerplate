import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Grid} from 'react-flexbox-grid';


class App extends Component {
  render() {
    return (
      <div>
        <Grid>
          Hello From React-Boilerplate
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
