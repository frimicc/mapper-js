import React from 'react'
import Tile from './components/tile'
import TileMap from './components/tilemap'

const tiles = [<Tile type='tree' />,
  <Tile type='water' />,
  <Tile type='tree' />,
  <Tile type='plain' />
]

const App = () => <div>
  <h1>Hello Mapper</h1>
  <p><TileMap tiles={tiles} /></p>
  </div>

export default App
