import React from 'react'
import ItemList from '../containers/item-list'
import ItemDetails from '../containers/item-detail'
import {
  Provider,
  Divider,
  Subhead
} from 'rebass'

const App = () => (
  <Provider>
    <Subhead
      color='#635045'
      is='h3'
      f={18}
      mb={2}
      children='Test update:'
    />
    <ItemList />
    <Subhead
      color='#635045'
      is='h3'
      f={18}
      mb={2}
      children='Breakdown:'
    />
    <ItemDetails />
    <Divider
      py={2}
      w={1}
      color='#e4e6dd'
    />
  </Provider>
)

export default App
