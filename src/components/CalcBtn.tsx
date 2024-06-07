import { Button } from '@mui/material'
import React from 'react'

interface ICalcBtn{
  num?: boolean
  title: string | React.ReactNode
  event?(): void
}

function CalcBtn(props:ICalcBtn) {
  return (
    <Button onClick={() => props.event()} variant={props.num ? "outlined" : "contained"}>{props.title}</Button>
  )
}

export default CalcBtn