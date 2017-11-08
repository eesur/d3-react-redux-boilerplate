import React from 'react'
import {
  Provider,
  NavLink,
  Column,
  Row
} from 'rebass'

const renderList = (props) => {
  const list = props.items.map((item) => {
    return (
      <Provider key={item.id}>
        <Column mb={0}>
          <NavLink
            href='#!'
            onClick={() => props.selectItem(item)}
          >
            {item.title}
          </NavLink>
        </Column>
      </Provider>
    )
  })
  return list
}

const ItemList = (props) => {
  return (
    <Row pl={1} mb={2} bg='#eee'>
      {renderList(props)}
    </Row>
  )
}

export default ItemList
