import React from 'react'
import Container from '@mui/material/Container'
import AppBar from '../../components/AppBar'
import BoarBar from '../Boards/BoarBar'
import BoarContent from '../Boards/BoardContent'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoarBar />
      <BoarContent />
    </Container>
  )
}

export default Board
