import React from 'react'

const HomePage = () => (
  <div>
    <div>I'm the BEST home component</div>
    <button onClick={() => console.log('Hi there!')}>Press me!</button>
  </div>
)

export default {
  component: HomePage
}
