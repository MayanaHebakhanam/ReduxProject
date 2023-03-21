import { buyIcecream } from "../redux/icecreams/icecreamAction"
import {connect} from 'react-redux'

function icecreamContainer(props){
    return(
        <div>
            <h2>Number of Icecreams - {props.numOfIcecreams}</h2>
            <button onClick={props.buyIcecream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        numOfIcecreams:state.icecream.numOfIcecreams
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        buyIcecream:()=>dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (icecreamContainer)
