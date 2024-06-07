import React, { useContext } from 'react'
import AppContext from '../context'
import { Box, Typography } from '@mui/material'

export default function Screen() {
  const {state, setState} = useContext(AppContext)
  return (
    <Box sx={{padding: '10px', width: '300px', height: '120px', display: 'flex', flexDirection: 'column' }}>
      <Typography variant='h5' align='right' sx={{overflow: 'auto', flex: '1 0 auto'}}>{state.first}</Typography>
      <Typography variant='h4' align='right' sx={{overflow: 'auto', flex: '1 0 auto'}}>{state.second}</Typography>
      <Typography variant='h5' align='right' sx={{overflow: 'auto', flex: '0 0 auto'}}>{state.third}</Typography>
    </Box>
  )
}
