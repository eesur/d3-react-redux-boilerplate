// import React, {Component} from 'react'
import {connect} from 'react-redux'
import ItemDetail from '../components/ItemDetail'

// "state.activeUser" is set in reducers/index.js
function mapStateToProps (state) {
  return {
    item: state.activeItem
  }
}

export default connect(mapStateToProps)(ItemDetail)
