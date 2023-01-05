/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * LoginScreenContainer - LoginScreenContainer
 */

import {connect} from 'react-redux';
import React, {Component} from 'react';
import LoginScreen from './LoginScreen';

class LoginScreenContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <LoginScreen {...this.props} />;
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
)(LoginScreenContainer);
