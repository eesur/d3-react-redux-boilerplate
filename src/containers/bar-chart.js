// import React, {Component} from 'react'
import {connect} from 'react-redux'
import Bar from '../components/Bar'

// "state.activeUser" is set in reducers/index.js
function mapStateToProps (state) {
  console.log('state from bar container: ', state)
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Bar)
