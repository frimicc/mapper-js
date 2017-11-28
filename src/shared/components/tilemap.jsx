import React from 'react'

class TileMap extends React.Component {
  render() {
    var rows = []
    var curr_col = 0
    var curr_row = ''
    
    const num_cols = this.props.num_cols
    const tiles = this.props.tiles
        
    tiles.forEach((tile) => {
      if (curr_col < num_cols) {
        curr_row += tile
      } else {
        const row = curr_row
        rows.push(<p>{row}</p>)
        curr_row = ''
        curr_col = 0
      }
    }
    
    return (
      <div>{rows}</div>
    )
  }
}

export default TileMap
