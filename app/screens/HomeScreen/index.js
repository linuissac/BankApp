/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * HomeScreenContainer - HomeScreenContainer
 */

import {connect} from 'react-redux';
import React, {Component} from 'react';
import HomeScreen from './HomeScreen';

class HomeScreenContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HomeScreen {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenContainer);
