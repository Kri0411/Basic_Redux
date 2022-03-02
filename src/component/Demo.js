import React from 'react';
import { connect } from 'react-redux';
import {Buy } from '../Redux/DispatchAction.js'




const Demo = (props) =>{
    return(
        <div>
        <h1> buy player - {props.amount_we_have} </h1>
        <button onClick={props.buy}> BUY </button>
        </div>
    )
}
const mapStatetoProps = state =>{
    return {
    amount_we_have : state.Amount_we_have
}
}

const mapDispatchtoProps = Dispatch =>{
    return {
    buy :()=> Dispatch(Buy())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Demo);