import React from 'react'
import TileRow from './tilerow'
import Tile from './tile'

class TileMap extends React.Component {
  render() {
    var rows = []
    var curr_col = 0
    var curr_row = []
    
    const num_cols = this.props.num_cols
    const tiles = this.props.tile_data
        
    tiles.forEach((tile_type) => {
      if (curr_col < num_cols) {
        curr_row.push(<Tile type={tile_type} />)
        curr_col += 1
      } else {
        const row = curr_row
        rows.push(<TileRow tiles={curr_row} />)
        curr_row = ''
        curr_col = 0
      }
    })
    
    return (
      <div>{rows}</div>
    )
  }
}

export default TileMap
