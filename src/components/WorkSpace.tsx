import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import CalcBtn from './CalcBtn'
import AppContext from '../context'
import BackspaceIcon from '@mui/icons-material/Backspace';

export default function WorkSpace() {
  const {state, setState} = useContext(AppContext)

  function addNumber(value: string){
    setState(prev =>({...prev, second: prev.second + value}))
    setState(prev => ({...prev, third: eval(prev.second)}))
  }
  
  function addSymbol(value: string){
    const lastIsNumber = isFinite(Number(state.second[state.second.length - 1]))
    if(lastIsNumber){
      setState({...state, second: state.second + value})
    }else{
      setState({...state, second: state.second.slice(0, state.second.length - 1) + value})
    }
  }
  function clear(){
    setState({first: '', second: '', third: '0'})
  }
  function backSpace(){
    const value = state.second.slice(0, state.second.length - 1)
    setState({...state, second: value})
  }
  function percent(){
    const lastIsNumber = isFinite(Number(state.second[state.second.length - 1]))
    if(lastIsNumber){
      const arrOfNumbers = state.second.split(/[*/+-]/)
      const arrOfSymbols = state.second.split(/[0-9.]/).filter(item => item)
      if(arrOfSymbols[arrOfSymbols.length-1] == '+' || arrOfSymbols[arrOfSymbols.length-1] == '-'){
        const funcResult = Number(arrOfNumbers[arrOfNumbers.length - 2]) / 100 * Number(arrOfNumbers[arrOfNumbers.length - 1])
        if(String(funcResult).split('').includes('.')){
          setState(prev => ({...prev, second: prev.second.slice(0, prev.second.lastIndexOf(arrOfSymbols[arrOfSymbols.length - 1]) + 1) + Number(funcResult).toFixed(2)}))
        }else{
          setState(prev => ({...prev, second: prev.second.slice(0, prev.second.lastIndexOf(arrOfSymbols[arrOfSymbols.length - 1]) + 1) + Number(funcResult)}))
        }
        setState(prev => ({...prev, third: eval(prev.second)}))
      }else{
        const funcResult = Number(arrOfNumbers[arrOfNumbers.length - 1]) / 100
        setState(prev => ({...prev, second: prev.second.slice(0, prev.second.lastIndexOf(arrOfSymbols[arrOfSymbols.length - 1]) + 1) + Number(funcResult)}))
        setState(prev => ({...prev, third: eval(prev.second)}))
      }
    }
  }
  function result(){
    setState(prev => ({first: `${prev.second} = ${prev.third}`, second: '', third: '0'}))
  }

  return (
    <Grid container spacing={1} sx={{width: '300px', margin: '10px',marginBottom: '18px', paddingRight: '3px'}}>
      <Grid item xs={3}>
        <CalcBtn title= 'c' event={clear}/>
      </Grid>
      <Grid item xs={3}>
        <CalcBtn title= {<BackspaceIcon/>} event={backSpace}/>
      </Grid>
      <Grid item xs={3}>
        <CalcBtn title= '%' event={percent}/>
      </Grid>
      <Grid item xs={3}>
        <CalcBtn title= '/' event={() =>addSymbol('/')}/>
      </Grid>

      <Grid item xs={3}>
        <CalcBtn num={true} title= '7' event={() =>addNumber('7')}/>
      </Grid>
      <Grid item xs={3}>
        <CalcBtn num={true} title= '8' event={() =>addNumber('8')}/>
      </Grid>
      <Grid item xs={3}>
        <CalcBtn num={true} title= '9' event={() =>addNumber('9')}/>
      </Grid>
      <Grid item xs={3}>
        <CalcBtn title= '*' event={() =>addSymbol('*')}/>
      </Grid>

      <Grid item xs={3}>
        <CalcBtn num={true} title= '4' event={() =>addNumber('4')}/>
      </Grid>
      <Grid item xs={3}>
        <CalcBtn num={true} title= '5' event={() =>addNumber('5')}/>
      </Grid>
      <Grid item xs={3}>
        <CalcBtn num={true} title= '6' event={() =>addNumber('6')}/>
      </Grid>
      <Grid item xs={3}>
        <CalcBtn title= '-' event={() =>addSymbol('-')}/>
      </Grid>
      
      <Grid item xs={3}>
        <CalcBtn num={true} title= '1' event={() =>addNumber('1')}/>
      </Grid>
      <Grid item xs={3}>
        <CalcBtn num={true} title= '2' event={() =>addNumber('2')}/>
      </Grid>
      <Grid item xs={3}>
        <CalcBtn num={true} title= '3' event={() =>addNumber('3')}/>
      </Grid>
      <Grid item xs={3}>
        <CalcBtn title= '+' event={() =>addSymbol('+')}/>
      </Grid>

      <Grid item xs={3}>
        <CalcBtn num={true} title= '00' event={() =>addNumber('00')}/>
      </Grid>
      <Grid item xs={3}>
        <CalcBtn num={true} title= '0' event={() =>addNumber('0')}/>
      </Grid>
      <Grid item xs={3}>
        <CalcBtn num={true} title= '.' event={() =>addSymbol('.')}/>
      </Grid>
      <Grid item xs={3}>
        <CalcBtn title= '=' event={result}/>
      </Grid>
      
    </Grid>
  )
}
