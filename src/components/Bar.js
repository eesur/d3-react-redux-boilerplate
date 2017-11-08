import React from 'react'
import { Group } from '@vx/group'
import { Bar } from '@vx/shape'
import { scaleLinear, scaleBand } from '@vx/scale'
import { AxisLeft, AxisBottom } from '@vx/axis'
import PropTypes from 'prop-types'
import {
  Provider,
  Text
} from 'rebass'

// responsive utils for axis ticks
function numTicksForHeight (height) {
  if (height <= 300) return 3
  if (height > 300 && height <= 600) return 5
  return 10
}

const Render = (props) => (
  <Provider>
    <header>
      <Text
        my={2}
        f={4}
        children={props.title}
        color={props.color}
      />
    </header>
    <section className='chart-bar'>
      <BarGraph {...props} />
    </section>
  </Provider>
)

// set some defaults
Render.defaultProps = {
  title: null,
  color: '#454545',
  width: 800,
  height: 400,
  fill: 'tomato',
  margin: { top: 20, bottom: 60, left: 60, right: 20 },
  oAccessor: 'category',
  rAccessor: 'value'
}

Render.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  oAccessor: PropTypes.string.isRequired,
  rAccessor: PropTypes.string.isRequired
}

const BarGraph = (props) => {
  const {
    width,
    height,
    margin,
    fill,
    data
  } = props

  // create some bounds
  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  // helpers to get at the data we want
  const x = d => d[props.oAccessor]
  const y = d => +d[props.rAccessor] * 100

  // And then scale the graph by our data
  const xScale = scaleBand({
    rangeRound: [0, xMax],
    domain: data.map(x),
    padding: 0.4
  })
  const yScale = scaleLinear({
    rangeRound: [yMax, 0],
    domain: [0, Math.max(...data.map(y))]
  })

  // compose together the scale and accessor functions to get point functions
  const compose = (scale, accessor) => (data) => scale(accessor(data))
  const xPoint = compose(xScale, x)
  const yPoint = compose(yScale, y)

  // embed it all in an SVG and return the UI
  return (
    <svg width={width} height={height}>
      {data.map((d, i) => {
        const barHeight = yMax - yPoint(d)
        return (
          <Group key={`bar-${i}`}>
            <Bar
              x={xPoint(d) + margin.left}
              y={(yMax - barHeight) + margin.top}
              height={barHeight}
              width={xScale.bandwidth()}
              fill={fill}
            />
          </Group>
        )
      })}
      <AxisLeft
        top={margin.top}
        left={margin.left}
        scale={yScale}
        hideZero
        numTicks={numTicksForHeight(height)}
        labelProps={{
          textAnchor: 'middle'
        }}
        stroke='#1b1a1e'
        tickStroke='#8e205f'
        tickLabelProps={(value, index) => ({
          textAnchor: 'end',
          fontFamily: 'monospace',
          dx: '-0.25em',
          dy: '0.25em'
        })}
      />
      <AxisBottom
        scale={xScale}
        top={height - margin.bottom}
        left={margin.left}
      />
    </svg>
  )
}

export default Render
