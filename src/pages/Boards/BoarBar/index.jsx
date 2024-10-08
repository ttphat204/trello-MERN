import React from 'react'
import Box from '@mui/material/Box'

function index() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        width: '100%',
        height: (theme) => theme.trelloCustom.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      Boarbar
    </Box>
  )
}

export default index
