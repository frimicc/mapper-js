import React from 'react'
import Tile from './components/tile'
import TileMap from './components/tilemap'

const tile_data = ['tree', 'plain', 'water', 'tree']

const App = () => <div>
  <h1>Hello Mapper</h1>
  <p><TileMap num_cols='2' tile_data={tile_data} /></p>
  </div>

export default App
