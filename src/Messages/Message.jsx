import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {gmAction,gaAction,geAction,gnAction} from "../Redux/Message/Message.action"

const Message = () => {
    let dispatch = useDispatch()
    let message = useSelector((state)=>{
        return state
    })
    let gmHandler = () => {
        dispatch(gmAction())
    }

    let gaHandler = () => {
        dispatch(gaAction())
    }

    let geHandler = () => {
        dispatch(geAction())
    }

    let gnHandler = () => {
        dispatch(gnAction())
    }
  return <div>
                <h2>Message Compononent</h2>
                <hr /><br />
                <pre>{JSON.stringify(message)}</pre>
                <h4>Value : {message.msg}</h4>
                <button onClick={gmHandler}>GM</button><br /><br />
                <button onClick={gaHandler}>GA</button><br /><br />
                <button onClick={geHandler}>GE</button><br /><br />
                <button onClick={gnHandler}>GN</button>
            </div>
}

export default Message