/**
 * Created by Linu Sherin Issac
 * on Jan 05, 2023
 * HomeScreenContainer - HomeScreenContainer
 */

import {connect} from 'react-redux';
import React, {Component} from 'react';
import HomeScreen from './HomeScreen';
import * as appActions from '../../actions/appActions';

class HomeScreenContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HomeScreen {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.loadingReducer.isLoading,
    deviceIP:state.loadingReducer.deviceIP,
    deviceName:state.loadingReducer.deviceName,
    deviceMAC:state.loadingReducer.deviceMAC,
  }

}

function mapDispatchToProps(dispatch) {
  return {
    onRequestLogin: params => {
      dispatch(appActions.onRequestLogin(params));
    },
    saveDeviceDetails: params => {
      dispatch(appActions.saveDeviceDetails(params));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenContainer);
