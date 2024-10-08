import React from 'react'
import Box from '@mui/material/Box'

function index() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: (theme) =>
          `calc(100vh - ${theme.trelloCustom.appBarHeight} - ${theme.trelloCustom.boardBarHeight})`,
      }}
    >
        Boarmenu
    </Box>
  )
}

export default index
