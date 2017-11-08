import React from 'react'
import Bar from './Bar'
import {
  Provider,
  Measure,
  Lead
} from 'rebass'

const configBar = {
  width: 800,
  height: 400,
  oAccessor: 'x',
  rAccessor: 'y'
}

const ItemDetail = (props) => {
  return (
    <Provider>
      <Lead>
        {props.item.id} : {props.item.title}
      </Lead>
      <Measure py={2}>
        Description: {props.item.item}
      </Measure>
      <Bar data={props.item.data} {...configBar} />
    </Provider>
  )
}

export default ItemDetail
