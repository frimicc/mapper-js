import React from 'react'

class Tile extends React.Component {
  render() {
    const type = this.props.type
    var color = 'black'
    if (type === 'tree') {
      color = 'green'
    }
    
    const styles = {
      backgroundColor: color
    }
    
    return (
      <span style={styles}>
        *
      </span>
    )
  }
}

export default Tile

