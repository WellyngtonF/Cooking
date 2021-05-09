import React from 'react'
import { HashRouter } from 'react-router-dom'

import Header from './template/header'

import Routes from './routes'

const App = () => (
  <HashRouter>
    <Header />
    <Routes />
  </HashRouter>
)

export default App
