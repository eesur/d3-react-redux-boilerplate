import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectItem} from '../actions/index'
import ItemList from '../components/ItemList'

// Get apps state and pass it as props to UserList
// > whenever state changes, the UserList will automatically re-render
function mapStateToProps (state) {
  return {
    items: state.items
  }
}

// Get actions and pass them as props to to UserList
// > now UserList has this.props.selectUser
function matchDispatchToProps (dispatch) {
  return bindActionCreators({selectItem: selectItem}, dispatch)
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
// > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(ItemList)
