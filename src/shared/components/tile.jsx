import React from 'react'

class Tile extends React.Component {
  render() {
    const type = this.props.type
    var color = #000000
    if (type === 'tree') {
      color = #00ff00
    }
    
    return (
      <span style={{background-color: '${color}'}}>
        *
      </span>
    )
  }
}

export default Tile

