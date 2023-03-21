import {useSelector} from 'react-redux'
import React from 'react'
import {useDispatch} from 'react-redux'
import { buyCake } from '../redux/cakes/cakeActions'

function HooksCakeContainer(){
    const numOfCakes=useSelector(state=>state.cake.numOfCakes)
    const dispatch=useDispatch()
    return(
        <div>
            <h2>No of Cakes - {numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer